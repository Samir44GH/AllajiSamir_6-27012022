//Mettre le code JavaScript lié à la page photographer.html

// import MediaFactory from "../factories/media";

async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const photographers = [];
  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers: [...photographers],
  };
}

async function displayData(photographers) {
  const photographHeader = document.querySelector(".photograph-header");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userBannerDOM = photographerModel.getUserBannerDOM();
    photographHeader.appendChild(userBannerDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  //displayData(photographers);
}

init();
// récupération des données .json
fetch("data/photographers.json")
  .then((res) => res.json())
  .then((data) => displayData(data.photographers));

// récupération de la chaine de requête dans l'url
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

//méthode pour extraire l'id
const ulrSearchParams = new URLSearchParams(queryString_url_id);
console.log(ulrSearchParams);

const id = ulrSearchParams.get("id");
console.log(id);

// affichage du photographe qui a été sélectioné par l'id
const photographerID = data.photographers.find((element) => element.id === id);
console.log(photographerID);

// const photographerID = await ffetch("data/photographers.json/$(id)");
// console.log(photographerID);
