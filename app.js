const api_key = "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym";

const form = document.querySelector("form");
const gifs = document.querySelector("#gifs");
const remove = document.querySelector("#remove");
const search = document.querySelector("#inputs form input");

remove.addEventListener("click", () => {
    gifs.innerHTML = "";
});

form.addEventListener("submit", (e) => {
    e.preventDefault();
    searchGiphy(search.value);
    search.value = "";
});

async function searchGiphy(search) {
    const results = await axios.get("https://api.giphy.com/v1/gifs/search", { params: { q: search, api_key } });
    const giphyImg = results.data.data[0].images.original.url;
    //console.log(results.data.data[0]);

    const div = document.createElement("div");
    const img = document.createElement("img");
    img.src = giphyImg;
    div.append(img);
    gifs.append(div);
}