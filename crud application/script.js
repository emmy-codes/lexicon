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

        console.log(data.results)
        // save in localstorage
        localStorage.setItem("character_stats", JSON.stringify(data));
        return data;
    } catch (error) {
        console.error(error);
    }

};

// render from Local storage to UI
const renderCharacterStats = (stats) => {
    console.log("stats", stats);
    const statsContainer = document.getElementById("stats-info");
    statsContainer.innerHTML = stats.results.map(stat =>
        `
            <article class="${stat.name}">
                <h2>${stat.name}</h2>
                    <input type="number">
                    <button class="save-stat">Save</button>
                        <button id="${stat.name.toLowerCase()}-info">Read up on this stat</button>
            </article>
            `.trim()).join("");
};

// check if data stored in local storage
const checkCurrentData = async () => {
    const character_stats = JSON.parse(localStorage.getItem("character_stats"));
    if (character_stats) {
        console.log("There are characters saved");
        renderCharacterStats(character_stats);
    } else {
        console.log("No characters yet");
        const data = await fetchApiData();
        renderCharacterStats(data);
    }
};

fetchApiData();
checkCurrentData();