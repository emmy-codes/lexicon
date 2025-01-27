const api_key = ACCESS_KEY;

const formEl = document.getElementById("search-form");
const inputEl = document.getElementById("search-input"); 
const prevPage = document.querySelector("#prev-page");
const nextPage = document.querySelector("#next-page");
const imageContainerEl = document.getElementById("image-container");
let currentPage = 1;


const fetchFromApi = async () => {
    const query = inputEl.value.trim();
    const select_options = document.querySelector("#per-page-options");
    const selected_option = select_options.value;

    try {
        const response = await fetch(`https://api.unsplash.com/search/photos?page=${currentPage}&query=${query}&client_id=${ACCESS_KEY}&per_page=${selected_option}}`);
        if (!response.ok) {
            throw new Error("Epic fail")
        }

        const json = await response.json();
        displayCatImages(json.results);
        
    } catch (error) {
        console.error(error.message)
    }
}

formEl.addEventListener("submit", (event) => {
    event.preventDefault();
    fetchFromApi();
});

const displayCatImages = (images) => {
    imageContainerEl.innerHTML = "";

    images.forEach(image => {
        const imgDiv = document.createElement("div");
        imgDiv.classList.add("image-item");
        imgDiv.innerHTML = `
            <a href="${image.links.html}" target="_blank">
                <img src="${image.urls.small}" alt="${image.alt_description}">
            </a>
        `;
        imageContainerEl.appendChild(imgDiv);
    });
}
    
nextPage.addEventListener("click", () => {
    currentPage++;
});

prevPage.addEventListener("click", () => {
    currentPage--;
})
