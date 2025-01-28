const ABILITY_SCORES_URL = "https://www.dnd5eapi.co/api/ability-scores";

// fetch API data
const fetchApiData = async () => {
    try {
        const response = await fetch(ABILITY_SCORES_URL);
        if (!response.ok) {
            throw new Error("Epic fail");
        }
        const data = await response.json();
        // adds count to track nr of each stat the user has picked
        data.results.forEach(stat => {
            stat.count = 0;
        });

        // console.log(data.results)
        // save in localstorage
        localStorage.setItem("character_stats", JSON.stringify(data));
        return data;
    } catch (error) {
        console.error(error);
    }

};

// check if data stored in local storage
const checkCurrentData = async () => {
    const character_stats = JSON.parse(localStorage.getItem("character_stats"));
    if (character_stats) {
        console.log("There are characters saved");
        // renderCharacterStats(character_stats);
    } else {
        console.log("No characters yet");
        const data = await fetchApiData();
        // console.log(data);
    };
};


/* 
add stats to array 
add max stats
deduct available stats from max stats when a number of stats is chosen

*/

const applyingStatChoices = async () => {
    const maxStats = 20;

}

// new API call to use for "read more about this stat" https://www.dnd5eapi.co/api/ability-scores/${url}

const fetchStatDetails = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Failed to fetch stat description");
        }
        const data = await response.json();
        console.log(data.desc)
    } catch (error) {
        console.error(error);
    }
};

// event listener for buttons to fetch description from api
const statsContainer = document.getElementById("stats-info");
statsContainer.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
        const url = e.target.dataset.url; // dataset is the data-url tag on the HTML elements
        fetchStatDetails(`https://www.dnd5eapi.co${url}`)
    }
})



fetchApiData();
checkCurrentData();