/* 
    Skapa en loop som itererar 1000 varv. För varje iteration ska du console.log() vilket varv du är på.
*/

for (let i = 0; i <= 1000; i++) {
    console.log(i);
};

/*
    Skapa en loop som räknar ner från 100 till 0. 
    För varje varv ska du console.log() vilket varv du är på.
*/

for (let i = 100; i >= 0; i--) {
    console.log(i);
};

/*
 Loopa ut array med en for-loop. För varje varv ska du console.log() innehållet ( frukten )
*/

let fruits = ['apple', 'orange', 'pear', 'kiwi', 'pineapple'];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
};

/*
    Loopa ut ovanstående array med console.log(). 
    Sätt vilket index varje frukt har framför. Ex. 0. apple, 1. orange osv.
*/

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i], fruits.indexOf(fruits[i]));
};

/*
    Loopa ut array och console.log() varje pryl.
*/

let things = ['hammer', 'nails', 'ruler', 'screwdriver', 'screws', 'saw'];

for (tool of things) {
    console.log(tool);
};

/*
    Loopa ut ovanstående array och console.log() varje pryl.
*/

things.forEach(tool => {
    console.log("For each loop:" + tool);
});

/*
    Skapa en while-loop som kör 1000 varv. console.log() ut varje varv.
*/
let number = 0;
while(number < 1000) {
    number++;
    console.log(number);
};

/*
    Generera en kortlek med 52 kort där varje kort innehåller en färg ( suite ) 
    och ett värde mellan 2 och 14 ( ess ). Ex.
*/

// wtf....

/*
    Loopa ut samtliga vänners favoritfrukter med en console.log().
*/

let friends = [
    {
        name: 'Sixten',
        likes: [
            'bananas',
            'strawberries',
            'blueberries'
        ]
    },
    {
        name: 'Khalid',
        likes: [
            'papaya',
            'pear',
            'pineapple'
        ]
    },
    {
        name: 'Lisa',
        likes: [
            'raspberries',
            'watermelon',
            'apple'
        ]
    }
]

friends.forEach(friend => {
    console.log(friend.likes)
});
