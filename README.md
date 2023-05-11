# Find Your Hat
> An interactive terminal game with JavaScript classes and user input

### Demo
![find-your-hat-demo](https://github.com/SimonaPiz/Find-Your-Hat/assets/91121660/23b54cf1-bc10-4991-ad13-da72becfde89)

## Table of contents
* [About this project](#about-this-project)
* [Objective](#objective)
* [Technologies](#technologies)
* [Setup](#setup)

## About this project

In this project, I build an interactive terminal game. The scenario is that the player has lost their hat in a field full of holes, and they must navigate back to it without falling down one of the holes or stepping outside of the field.

## Objective
### Implement Field
The project is centered on a Field class. Use a two-dimensional array representing the “field” itself. A field consists of a grid containing:
- “holes” (`O`)
- one “hat” (`^`)
- a neutral background character (`░`) to indicate the rest of the field itself.
- The player will begin in the upper-left of the field, and the player’s path is represented by (`*`).

`.generateField()` static method should at least take arguments for height and width of the field, and it should return a randomized two-dimensional array representing the field with a hat and one or more holes.
> extra: add a third argument used to determine what percent of the field should be covered in holes.

### Implement User Input
The game should be playable by users:
  - When a user runs **main.js**, they should be prompted for input and be able to indicate which direction they’d like to “move”.
  - After entering an instruction, the user should see a printed result of their current field map with the tiles they have visited marked with `*`. They should be prompted for their next move.

This should continue until the user either:

  - Wins by finding their hat.
  - Loses by landing on (and falling in) a hole.
  - Attempts to move “outside” the field.

## Technologies
- JavaScript
- Node.js
- prompt-sync 4 - (*A sync prompt for node*)

## Setup
To run this project, install it locally using npm:

```
$ cd ../[directory]
$ npm install
$ node main.js
```
