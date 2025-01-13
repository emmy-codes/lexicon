/* 1: Skriv en funktion som tar en sträng som parameter och returnerar längden på en sträng. 
Anropa funktion och console.log svaret. 
Tips! Du kan skriva .length på en variabel som är en sträng för att få längden. 
*/

const stringLength = (string) => {
    let string = "Hello";
    console.log("This string is " + string.length() + " characters long")
}

stringLength();