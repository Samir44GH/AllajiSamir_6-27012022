fetch("data/photographers.json")
  .then((res) => res.json())
  .then((data) => {
    // récupération de la chaine de requête dans l'url
    const queryString_url_id = window.location.search;
    //console.log(queryString_url_id);

    //méthode pour extraire l'id
    const urlSearchParams = new URLSearchParams(queryString_url_id);
    // console.log(urlSearchParams);

    const id = urlSearchParams.get("id");
    // console.log(id);
    const photographe = data.photographers.filter(
      (element) => element.id === parseInt(id)
    );
    //console.log(photographe);
    const recupDataMedia = data.media.filter(
      (element) => element.photographerId === parseInt(id)
    );
    console.log(recupDataMedia);

    //Création des images des médias dans la  classe MediaContainer
    modal(photographe);
    Banneer(photographe);
    Media(recupDataMedia, photographe[0]);
    LB(recupDataMedia, photographe[0]);
  });

function Media(data, photographe) {
  for (let cur of data) {
    let instanceMedia = new MediaFactory(photographe, cur);
    //console.log(instanceMedia);
    document.querySelector(".mediaContainer").appendChild(instanceMedia.draw());
  }
}

function LB(data, photographe) {
  console.log(data);
  let instanceLB = new LightBox(data, photographe);
  console.log(instanceLB);
  document.body.appendChild(instanceLB.draw());
  console.log(instanceLB.draw);
}

function Banneer(data) {
  console.log(data);
  let instanceB = new Photographers(data[0]);
  console.log(instanceB);
  document
    .querySelector(".photograph-header")
    .appendChild(instanceB.getUserBannerDOM());
  console.log(instanceB.getUserBannerDOM);
}

function modal(data) {
  console.log(data);
  let instanceB = new Photographers(data[0]);
  console.log(instanceB);
  document
    .querySelector("#contact_modal")
    .appendChild(instanceB.modalPhotographer());
  console.log(instanceB.modalPhotographer);
}
// async function Banneer(photographers) {
//   const photographersBanner = document.querySelector(".photograph-header");

//   photographers.forEach((photographer) => {
//     const photographerModel = photographerBanner(photographer);
//     const userCardDOM = photographerModel.getUserBannerDOM();
//     photographersBanner.appendChild(userCardDOM);
//     console.log(userCardDOM);
//   });
// }

// async function Banneer(photographers) {
//   const photographersBanner = document.querySelector(".photograph-header");

//   photographers.forEach((photographer) => {
//     const userCardDOM = getUserBannerDOM(photographer);
//     photographersBanner.appendChild(userCardDOM);
//     console.log(userCardDOM);
//   });
// }BON

//

// fetch("data/photographers.json")
//   .then((res) => res.json())
//   .then((data) => {
//     // récupération de la chaine de requête dans l'url
//     const queryString_url_id = window.location.search;
//     //console.log(queryString_url_id);

//     //méthode pour extraire l'id
//     const urlSearchParams = new URLSearchParams(queryString_url_id);
//     // console.log(urlSearchParams);

//     const id = urlSearchParams.get("id");
//     // console.log(id);
//     const photographe = data.photographers.filter(
//       (element) => element.id === parseInt(id)
//     );
//     //console.log(photographe);
//     const recupDataMedia = data.media.filter(
//       (element) => element.photographerId === parseInt(id)
//     );
//     console.log(recupDataMedia);

//     //Création des images des médias dans la  classe MediaContainer
//     Banneer(photographe);
//     Media(recupDataMedia, photographe[0]);
//     LB(recupDataMedia, photographe[0]);
//   });
// .then((data) => Banneer(data.photographers));

// window.onload = function () {
//   // // Ouverture de la modale
//
//   console.log(openModalBtn);
// function displayModal() {
//   const modal = document.querySelector("#contact_modal");
//   modal.style.display = "block";
// }
// const openModalBtn = document.querySelector(".open_modal");
//   openModalBtn.addEventListener("click", displayModal);

//   console.log(displayModal());
// };
//Fonction qui permet d'ouvrir la modale
