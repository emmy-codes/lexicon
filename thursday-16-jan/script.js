// access the element we want to use

const nameElement = document.getElementById("name");
nameElement.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(event.target.value);
});

const isCuteElement = document.getElementById("is-cute");
isCuteElement.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(event.target.checked);
    if (event.target.checked === false) {
        alert("Are you sure?");
    };
});

const breedElementSelector = document.getElementById("breed");
breedElementSelector.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(event.target.value);
});

const radioYesElement = document.getElementById("radio-yes");
radioYesElement.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(event.target.checked);
});

const dateElement = document.getElementById("date");
dateElement.addEventListener("change", (event) => {
    event.preventDefault();
    console.log(event.target.value);
});