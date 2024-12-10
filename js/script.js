const url = "http://localhost:5000"
const fetch_json = {
    method: "POST",
    mode: "no-cors",
}

document.querySelector("#flap").addEventListener("mousedown", () => {
    fetch(url + "/wing/flap", fetch_json)
    .catch(err => console.error(err));
});

document.querySelector("#flap").addEventListener("touchstart", () => {
    fetch(url + "/wing/flap", fetch_json)
    .catch(err => console.error(err));
});