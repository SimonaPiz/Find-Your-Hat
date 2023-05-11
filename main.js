/*
Obiettivi del progetto

In questo progetto, costruirai un gioco terminale interattivo con classi javascript e 
input dell'utente in Node.js.

Lo scenario è che il giocatore ha perso il cappello in un campo pieno di buche e 
deve tornare indietro senza cadere in una delle buche o uscire dal campo.
*/

//code below

const prompt = require('prompt-sync')({sigint: true});

const hat = '^';
const hole = 'O';
const fieldCharacter = '░';
const pathCharacter = '*';

//-------------------------
class Field {
  constructor(field) {
    this._field = field;
  }
  get field(){return this._field;}

  print() {
    this._field.forEach(arrayLine => {
       console.log(arrayLine.join(''));
    })   
  }

  static generateField(higth, width, percent) {
    const numTotalChar = higth * width;
    const percHole = Math.floor((numTotalChar * percent) / 100);
    //console.log('numero di buche totali: ' + percHole);
    
    const randomIndex = max => {
      return Math.floor(Math.random() * max);
    }
    
    let newField = [];

    const generateLine = (arrayLine) => {
      for (let i=0; i<width; i++) {
        arrayLine.push(fieldCharacter);
      };
      return arrayLine;  
    }

    const setHoles = () => {
      for (let i=0; i<= percHole; i++){
        let y = randomIndex(higth);
        let x = randomIndex(width);
        
        if (newField[y][x] === fieldCharacter){
          newField[y][x] = hole;
        } else {
          i -=1;
        };
      };
      return newField;
    }

    const setHat = () => {
      let y = randomIndex(higth);
      let x = randomIndex(width);
      if (y === 0) {
        return y += 1;
      };
      return newField[y][x] = hat;
    }
        
    for (let i=0; i<higth; i++) {
      const newLine = [];
      generateLine(newLine);
      newField.push(newLine);
    };

    setHoles();

    newField[0][0] = pathCharacter;
    
    setHat();
    //console.log(newField);    
    return newField;
  }
}

const randomField = Field.generateField(8,12, 35);
const myField = new Field(randomField);

//Field.generateField(8, 5, 25);
//--------------------------

/*const myField = new Field([
  ['*', '░', 'O'],
  ['░', 'O', '░'],
  ['░', '^', '░'],
]);*/

 //myField.print();
//console.log(myField.field[0][2]);

//--------------------------
console.log('Per vincere il gioco devi arrivare al cappello (^) senza cadere in una buca (O) o uscire dal campo. Il simbolo * indica il tuo percorso.\n\nPer scegliere una direzione digita:\nu=up, d=down, l=left, r=rigth \n');


//-----------------------
let indexX = 0; //coordinate per field[y][x]
let indexY = 0;
let continueGame = false;

const risultatoMossa = (y, x) => {
  if (y<0 || x<0 || y>myField.field.length || x>myField.field[y].length -1) {
    console.log('Hai perso! Sei uscito dal campo.');
    continueGame = false;
  } else if (myField.field[y][x] === 'O') {
    console.log('Hai perso! Sei caduto in una buca.');
    continueGame = false;
  } else if (myField.field[y][x] === '^') {
    console.log('Hai vinto! Hai trovato il tuo cappello!');
    continueGame = false;
  } else {
    myField.field[y][x] = '*';
    continueGame = true;
  };
}

do {
  myField.print();

  let way = prompt ('Quale direzione? ');

  switch (way) {
    case 'u':
    case 'U':
      indexY -= 1;
      risultatoMossa(indexY, indexX);
      break;
    case 'd':
    case 'D':
      indexY += 1;
      risultatoMossa(indexY, indexX);
      break;
    case 'l':
    case 'L':
      indexX -= 1;
      risultatoMossa(indexY, indexX);
      break;
    case 'r':
    case 'R':
      indexX += 1;
      risultatoMossa(indexY, indexX);
      break;
    default: 
      console.log('Direzione inserita non valida.');
      continueGame = true;
  };
} while (continueGame === true);
