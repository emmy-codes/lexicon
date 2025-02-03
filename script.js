const statTitle = document.getElementById("stat-title");
const statDescription = document.getElementById("stat-description");
const statsContainer = document.getElementById("stats-info");
const targetModal = document.getElementById("modal");
const closeModal = document.querySelector(".modal-close");
const showSpentPoints = document.getElementById("spent-points");
const showMaxPoints = document.getElementById("max-points");
const totalPoints = 20;
let currentPointDistribution = 0;
const targetStatsInputFields = document.querySelectorAll("#stats-info input");
const nameInput = document.querySelector("#character-name");
const statInputs = document.querySelectorAll("#stats-info input");

const fetchStatDetails = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch stat description");
        }
        const data = await response.json();
        // save in localstorage
        localStorage.setItem("character_data", JSON.stringify(data));
        console.log(data)
        statTitle.textContent = data.full_name;
        statDescription.textContent = data.desc;
        return data;
    } catch (error) {
        console.error(error);
    }
};

// event listener for buttons to fetch description from api
statsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        targetModal.style.display = "block";
        const url = e.target.dataset.url; // dataset is the data-url tag on the HTML elements
        fetchStatDetails(`https://www.dnd5eapi.co${url}`);
    }
});

// close modal
closeModal.addEventListener("click", () => {
    targetModal.style.display = "none";
});

// check if data stored in local storage
const checkCurrentData = async () => {
    try {
        const character_data = JSON.parse(localStorage.getItem("character_data"));
        if (character_data) {
            console.log("There are characters saved");
            renderCharacterData(character_data);
        } else {
            console.log("No characters yet");

            // initialise input fields as empty/0
            nameInput.value = "";
            statInputs.forEach(stat => {
                stat.value = 0;
            });
        }
    } catch (error) {
        console.error("Error fetching character data :( ", error);
    }

};

const updateAvailablePoints = (event) => {
    // myserious unexplained "use destructuring" from fiance
    const { value } = event.target;
    // track spent points
    // TIL that using radix (here as 10) is a good practice to avoid the number input being incorrectly interpreted which can lead to errors
    currentPointDistribution += parseInt(value, 10);
    // update available points
    // currentPointDistribution = totalPoints - currentPointDistribution;

    showSpentPoints.textContent = `${currentPointDistribution}`;
    showMaxPoints.textContent = `/ ${totalPoints} points`;
};

// event listener for onchange of input fields to update the available stats
targetStatsInputFields.forEach(stat => {
    stat.addEventListener("change", updateAvailablePoints);
});

// save character data
const saveCharacter = () => {
    // collect stat name and value
    // store data in obj or array
    // collect stat values
    const stats = {};
    statInputs.forEach(stat => {
        stats[stat.parentElement.classList] = parseInt(stat.value, 10)
    })
    const characterData = {
        name: nameInput.value,
        stats: stats
    };
    // save to local storage
    localStorage.setItem("character_data", JSON.stringify(characterData));
};

// event listener to save character data
const saveButton = document.querySelector(".save-character");
saveButton.addEventListener("click", saveCharacter);

// render any data found in localstorage
const renderCharacterData = (characterData) => {
    // append each input field to the DOM
    nameInput.textContent = characterData.name;
    for (const stat in characterData.stats) {
    document.getElementById(`${stat}-value`).value = characterData.stats[stat];    
};
};

checkCurrentData();