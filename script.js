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

const fetchStatDetails = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch stat description");
        }
        const data = await response.json();
        // data.results.forEach(stat => {
        //     stat.count = 0;
        // });
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
    const character_data = JSON.parse(localStorage.getItem("character_data"));
    if (character_data) {
        console.log("There are characters saved");
        renderCharacterData(character_data);
    } else {
        console.log("No characters yet");
        const data = await fetchStatDetails();
    }
};

const updateAvailablePoints = (event) => {
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
};

// render any data found in localstorage
const renderCharacterData = (character) => {
    // when i have multiple characters, for later
    console.log("character data: ", character)
};

checkCurrentData();