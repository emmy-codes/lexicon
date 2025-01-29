// new API call to use for "read more about this stat" https://www.dnd5eapi.co/api/ability-scores/${url}
const statTitle = document.getElementById("stat-title");
const statDescription = document.getElementById("stat-description");

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
        statTitle.textContent = data.full_name;
        statDescription.textContent = data.desc;
        return data;
    } catch (error) {
        console.error(error);
    }
};

// event listener for buttons to fetch description from api
const statsContainer = document.getElementById("stats-info");
const targetModal = document.getElementById("modal");
statsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        targetModal.style.display = "block";
        const url = e.target.dataset.url; // dataset is the data-url tag on the HTML elements
        fetchStatDetails(`https://www.dnd5eapi.co${url}`);
    }
});

// close modal
const closeModal = document.querySelector(".modal-close");
closeModal.addEventListener("click", () => {
    targetModal.style.display = "none";
})

// check if data stored in local storage
const checkCurrentData = async () => {
    const character_data = JSON.parse(localStorage.getItem("character_data"));
    if (character_data) {
        console.log("There are characters saved");
        renderCharacterData(character_data);
    } else {
        console.log("No characters yet");
        const data = await fetchStatDetails();
        console.log(data);
    }
};

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


// fetchStatDetails();
checkCurrentData();