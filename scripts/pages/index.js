fetch("data/photographers.json")
  .then((res) => res.json())
  .then((data) => displayData(data.photographers));

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");
  // Récupère les datas des photographes
  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    //Utilisation des données des photographes dans la div .photographer_section
    photographersSection.appendChild(userCardDOM);
  });
}

// async function init() {
//
//   const { photographers } = await getPhotographers();
//   //displayData(photographers);
// }

// init();

// async function getPhotographers() {
//   // Penser à remplacer par les données récupérées dans le json
//   const photographers = [];
//   // et bien retourner le tableau photographers seulement une fois
//   return {
//     photographers: [...photographers],
//   };
// }
