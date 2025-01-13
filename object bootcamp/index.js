/*
Skapa ett objekt som innehåller data om en bok, nycklar som kan inkluderas är title, author, numPages.

Skapa en array av objekt med flera stycken böcker

Skapa en funktion som söker efter en titel i arrayen, om den hittar en så returneras objektet annars null. 
Låt funktionen ta emot arrayen med bok-objekt och söktermen som parametrar.
*/

// const obj1 = {
//     title: "Book1",
//     author: "Me",
//     numPages: 271
// };

// const arr1 = [
//     {
//         title: "Book1",
//         author: "Me",
//         numPages: 271
//     },
//     {
//         title: "Book2",
//         author: "You",
//         numPages: 175
//     },
//     {
//         title: "Book3",
//         author: "Her",
//         numPages: 521
//     }
// ]

// const arr2 = [
//     {
//         title: "Book4",
//         author: "Hi",
//         numPages: 111
//     }
// ]

// const findBook = (books, searchTerm) => {
//     for (let i = 0; i < books.length; i++) {
//         if (arr1[i].title === searchTerm) {
//             return books[i];
//         }
//     } 
//     return null;
// }

// const stuff = findBook(arr1, "Book2");
// console.log(stuff)
// const stuff1 = findBook(arr2, "Book4");
// console.log(stuff1)

/*
Letter Frequency
Räkna tecken i en sträng och organisera detta i ett objekt. 
Skapa en funktion som tar en sträng som input och ger ett objekt som output.

Varje tecken är sin egna nyckel i objektet och värdet på nyckeln är antalet av det tecknet. 
Dvs, för varje tecken ska det finnas en nyckel i objektet och värdet på den nyckeln ska vara 
antal förekomster av det tecknet.

Denna övning kräver dynamiska nycklar.
*/

let myString = "Beneficial";
let uniqueLetters = {};
let letterFrequency = 0;

/* step 1: loop over entire string and log 1 
const countDemStringz = (string) => {
  for (let i = 0; i < string.length; i++) {
    uniqueLetters[string[i]] = 1;
      console.log(uniqueLetters)
  }
   return uniqueLetters
} */

// step 2: increment occurances of string frequency from 0-9
// const countDemStringz = (string) => {
//     for (let i = 0; i < string.length; i++) {
//         uniqueLetters[string[i]] = letterFrequency++;
//         console.log(uniqueLetters)
//     }
//     return uniqueLetters
// }

// step 3: get count to only add ++ when a duplicate letter appears
// discovered https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/hasOwn
const countDemStringz = (string) => {
    for (let i = 0; i < string.length; i++) {
        if (Object.hasOwn(uniqueLetters, string[i])) {
            console.log("nailed it")
        } else {
            console.log("fail")
        }
        uniqueLetters[string[i]] = letterFrequency++;
        console.log(uniqueLetters)
    }
    return uniqueLetters
}


countDemStringz(myString);
