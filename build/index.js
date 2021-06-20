"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Sorter_1 = require("./Sorter");
var NumbersCollection_1 = require("./NumbersCollection");
var CharactersCollection_1 = require("./CharactersCollection");
// Numbers Sort
var numbersCollection = new NumbersCollection_1.NumbersCollection([10, 3, -5, 0]);
var numberSorter = new Sorter_1.Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);
// Characters Sort
var charactersCollection = new CharactersCollection_1.CharactersCollection('aHrHea');
var characterSorter = new Sorter_1.Sorter(charactersCollection);
characterSorter.sort();
console.log(charactersCollection.data);
