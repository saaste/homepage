const PAGE_SIZE = 20;
let pagefind, timeout, queryInput, searchResultEl, searchResults, showMoreBtn;

window.addEventListener('DOMContentLoaded', async (event) => {
    queryInput = document.getElementById("query_input");
    if (!queryInput) {
        return;
    }
    
    pagefind = await import("/pagefind/pagefind.js");

    queryInput.focus();
    queryInput.addEventListener("input", (e) => {
        search(queryInput.value);
    });
    
    searchResultEl = document.getElementById("search_results");
    showMoreBtn = document.getElementById("more_results");
    showMoreBtn.addEventListener("click", showSearchResultPage)

    const storedQuery = sessionStorage.getItem("query");
    if (storedQuery !== null && storedQuery !== "") {
        queryInput.value = storedQuery
        search(storedQuery);
    }
});

const search = async (query) => {
    const search = await pagefind.debouncedSearch(query);
    if (!search) {
        return;
    }

    searchResults = search.results;
    searchResultEl.replaceChildren();
    sessionStorage.setItem("query", query);

    const resultCount = document.createElement("div");
    resultCount.classList.add("result_count")
    const resultText = searchResults.length == 1 ? "tulos" : "tulosta"; 
    resultCount.innerText = `${searchResults.length} ${resultText} haulle ${query}`;
    searchResultEl.appendChild(resultCount);
    showSearchResultPage();
}

const showSearchResultPage = async () => {
    let maxCount = Math.min(searchResults.length, PAGE_SIZE);
    let counter = 0;
    while (counter < maxCount) {
        let result = searchResults.shift();
        const data = await result.data();
        const resultElement = createSearchResultElement(data);
        searchResultEl.appendChild(resultElement);
        counter++;
    }
    showMoreResultsButton();
}

const showMoreResultsButton = () => {
    if (searchResults.length > 0) {
        showMoreBtn.classList.remove("hidden");
    } else {
        showMoreBtn.classList.add("hidden");
    }
}

const createSearchResultElement = (data) => {
    const image = document.createElement("img");
        image.classList.add("thumbnail")
        image.src = data.meta.image;
        image.alt = data.meta.image_alt;
        image.width = data.meta.image_width;
        image.height = data.meta.image_height;

        const headerLink = document.createElement("a");
        headerLink.href = data.url;
        headerLink.innerText = data.meta.title;

        const header = document.createElement("h4");
        header.classList.add("title")
        header.replaceChildren(headerLink);

        const excerpt = document.createElement("div");
        excerpt.innerHTML = data.excerpt;

        const pageType = document.createElement("div");
        switch(data.meta.page_type) {
            case "blogi":
                pageType.innerText = "Tyyppi: blogikirjoitus";
                break
            case "page":
                pageType.innerText = "Tyyppi: alasivu";
                break
            default:
                pageType.innerText = "";
        }

        const resultText = document.createElement("div");
        resultText.classList.add("result_text");
        resultText.replaceChildren(header, excerpt, pageType);

        const resultElement = document.createElement("div");
        resultElement.classList.add("result");
        resultElement.replaceChildren(image, resultText)

        return resultElement;
}

