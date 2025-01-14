/*
    Gör en array som innehåller 5 st olika frukter av datatypen string.
*/

const fruitsByMyToddler = ["Stawbrees", "Blooblies", "Gwapes", "Owinge", "Watomelon"];

/*
    gör en array som innehåller 3 olika datatyper, ex. string, number, array.
*/

const arrOfDifferentTypes = ["Hello", 25, [
    { item1: "Emma" }, 
    { item2: "Lucy" }
]];

console.log(arrOfDifferentTypes);


let animals = ['cat', 'hamster', 'parrot', 'funky chihuahua'];

// console.log() hur många objekt arrayen innehåller.
console.log(animals.length);

// I arrayen ovan, hämta cat.

console.log(animals[0]);

// I arrayen ovan, hämta funky chihuahua.

console.log(animals[3]);

// I arrayen ovan, byt ut hamster mot tiger.

animals.splice(1, 1, 'tiger');
console.log(animals);

// Lägg ihop arrayer.

let a = [1, 2, 3];
let b = [4, 5, 6];

const completeArr = a.concat(b);
console.log(completeArr);

// Merga ner array b på index 3 array a.

let a1 = [1, 2, 3, 7, 8, 9];
let b1 = [4, 5, 6];

// Klona array.

let arr = ['a', 'b', 'c'];
let newArr = [...arr];
console.log(newArr);

// METHODS: .push(), .unshift(), .pop(), 
// .shift(), .splice(), .includes(), .indexOf(), .substring()

// Lägg till en frukt i slutet av arrayen.

let fruits = ['kiwi', 'apple', 'pear'];
fruits.push('strawberries');
console.log(fruits);

// Lägg till en frukt i början av arrayen.

fruits.splice(0, 0, 'grapes');
console.log(fruits);

// I arrayen ovan, ta bort sista frukten i arrayen.

fruits.shift();
console.log(fruits);

// I arrayen ovan, ta bort första frukten i arrayen.

fruits.pop();
console.log(fruits);

// Sätt in en frukt i arrayen ovan på index 1

fruits.splice(1, 0, 'banana');
console.log(fruits);

// Sätt in tre frukter i arrayen ovan på index 2

const newFruits = ['raspberries', 'lychee', 'orange']
fruits.push(...newFruits);
console.log(fruits);