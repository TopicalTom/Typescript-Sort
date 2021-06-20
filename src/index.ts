import { Sorter } from './Sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

// Numbers Sort
const numbersCollection = new NumbersCollection([10, 3, -5, 0]);
const numberSorter = new Sorter(numbersCollection);
numberSorter.sort();
console.log(numbersCollection.data);

// Characters Sort
const charactersCollection = new CharactersCollection('aHrHea');
const characterSorter = new Sorter(charactersCollection);
characterSorter.sort();
console.log(charactersCollection.data);

// LinkedList Sort
const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);

const linkedListSorter = new Sorter(linkedList);
linkedListSorter.sort();
linkedList.print();