
// fetch API data
// const fetchStatDetails = async () => {
//     try {
//         const response = await fetch(ABILITY_SCORES_URL);
//         if (!response.ok) {
//             throw new Error("Epic fail");
//         }
//         const data = await response.json();
//         // adds count to track nr of each stat the user has picked
//         data.results.forEach(stat => {
//             stat.count = 0;
//         });

//         // console.log(data.results)
//         // save in localstorage
//         localStorage.setItem("character_data", JSON.stringify(data));
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// };
// 



// new API call to use for "read more about this stat" https://www.dnd5eapi.co/api/ability-scores/${url}

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
        console.log("Button click:", data.desc);
        return data;
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
        console.log(data);
    }
};





// save character data
const saveCharacter = () => {
    // collect stat name and value
    // store data in obj or array
}

// render any data found in localstorage

const renderCharacterData = (character) => {
    // currently targetting the ability scores rather than `https://www.dnd5eapi.co${url}`because of my first fetch fn
    console.log("character data: ", character)
};


// fetchStatDetails();
checkCurrentData();