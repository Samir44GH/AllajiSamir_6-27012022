async function getPhotographers() {
  // Penser à remplacer par les données récupérées dans le json
  const photographers = [
    {
      name: "Mimi Keel",
      id: 243,
      city: "London",
      country: "UK",
      tagline: "Voir le beau dans le quotidien",
      price: 400,
      portrait: "MK.jpg",
    },
    {
      name: "Ellie-Rose Wilkens",
      id: 930,
      city: "Paris",
      country: "France",
      tagline: "Capturer des compositions complexes",
      price: 250,
      portrait: "ER.jpg",
    },
    {
      name: "Tracy Galindo",
      id: 82,
      city: "Montréal",
      country: "Canada",
      tagline: "Photographe freelance",
      price: 500,
      portrait: "TG.jpg",
    },
    {
      name: "Nabeel Bradford",
      id: 527,
      city: "Mexico city",
      country: "Mexico",
      tagline: "Toujours aller de l'avant",
      price: 350,
      portrait: "NB.jpg",
    },
    {
      name: "Rhode Dubois",
      id: 925,
      city: "Barcelona",
      country: "Spain",
      tagline: "Je crée des souvenirs",
      price: 275,
      portrait: "RD.jpg",
    },
    {
      name: "Marcel Nikolic",
      id: 195,
      city: "Berlin",
      country: "Germany",
      tagline: "Toujours à la recherche de LA photo",
      price: 300,
      portrait: "Marcel.jpg",
    },
  ];
  // et bien retourner le tableau photographers seulement une fois
  return {
    photographers: [...photographers],
  };
}

async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();

fetch("data/photographers.json")
  .then((res) => res.json())
  .then((data) => console.log(data));
