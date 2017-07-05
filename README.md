# Lab 14: Context Clues

##### Covalence

## Info

* You will be building a webpage that will display 100 clues on the screen

* When a clue is clicked, an alert will appear that shows the full text of the clue

* Knowledge of closure or bind and the modulus operator will be useful in this lab

## Getting Started

* We aren't doing any server code, so we don't need a package.json

* Simply create a good ole index.html file, script.js file, and a css file for styling

## Objectives

* When the page first loads, insert 100 h3 elements onto the page

* The h3 elements should simply say Clue 1, Clue 2, Clue 3, ... Clue 100

* Clicking on an h3 element should display an alert that says a statement in the following format:

```

Clue i: FRIEND_NAME did it in the LOCATION_NAME with a WEAPON_NAME

ex: Clue 7: Kelsey did it in the copy room with a paperclip

```

* You will have an array of 5 friend names

* You will have an array of 10 location names

* You will have an array of 20 weapon/object names (feel free to be silly/absurd)

* You will use the value of i in the loop to determine which of the above array items to use

* Make sure you only select valid array indexes

* Modulus is your friend

* ex: 10 mod 10 is 0, 11 mod 10 is 1, 12 mod 10 is 2, ...
