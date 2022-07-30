// getting the json data from the apex api
const player = "HaFRamen";
const platform = "PC";

const urlString =
  "https://api.mozambiquehe.re/bridge?auth=54b17113e1f445e5e82b0165b253efee&player=" +
  player +
  "&platform=" +
  platform;

const apiData = {
  url: urlString,
};

fetch(apiData.url)
  .then((data) => data.json())
  .then((playerdata) => generateHtml(playerdata));

const generateHtml = (data) => {
  console.log(data);
  document.getElementById(
    "apexData"
  ).innerHTML = `<div class="name">${data.global.name}</div>`;
};
