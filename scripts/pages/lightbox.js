class LightBox {
  constructor(media, photographers) {
    this.titles = media.title;
    this.listImage = media.map((element) => element.image);
    console.log(this.listImage);
    this.name = photographers.name;
  }

  getUserLB() {}

  draw() {
    //Création d'un tableau d'image
    let LightBox = document.createElement("div");

    //Element courant de la galeire
    let imageCur = -1;
    for (let elCur of this.listImage) {
      LightBox.appendChild(document.createElement("img"));
      LightBox.children[LightBox.children.length - 1].src =
        "../assets/" + this.name + "/" + elCur;
    }
    return LightBox;
  }
  //Fonction qui va faire l'animation de la gallerie
  hideEl = () => {
    //on réinitialise l'affichage de toutes les images (autres que celle que l'on veut afficher)
    for (let OnEl of LightBox) {
      OnEl.style.display = "none";
    }
  };
}

/*


//Création d'un tableau d'image
let LightBoxContainer = [];
let dataImg = [];

//Element courant de la galeire
let imageCur = -1;

//Création des éléments html
for (let elCur of dataImg) {
  LightBox.push(document.createElement("img"));
  LightBox[LightBox.length - 1].src = elCur;
  document.body.appendChild(LightBox[LightBox.length - 1]);
}

//Fonction qui va faire l'animation de la gallerie
const hideEl = () => {
  //on réinitialise l'affichage de toutes les images (autres que celle que l'on veut afficher)
  for (let OnEl of LightBox) {
    OnEl.style.display = "none";
  }
};

//Création de la fonction qui permet de passer à l'image suivante
const SuivImg = (e = {}) => {
  hideEl();
  LightBox[Math.abs(++imageCur) % LightBox.length].style.display = "block";
};
SuivImg();
/*const PrecImg = (e={})=>{
  hideEl()
  LightBox[++imageCur].style.display="block"
  }
   PrecImg()*/
/*
//Création du bouton qui permet de revenir à l'image précédente
const buttonPrec = document.createElement("button");
buttonPrec.classList.add("lightboxPrev");
buttonPrec.onclick = (e) => {
  //Réinitialise l'affichage des images
  hideEl();
  //Création de l'évenement
  LightBox[
    LightBox.length - 1 - Math.abs(--imageCur % LightBox.length)
  ].style.display = "block";
};
/*buttonPrec.addEventListener("click", (e)=>{
  hideEl()
  })*/
/*document.body.appendChild(buttonPrec);

//Création du bouton qui permet de passer à l'image suivante
const buttonSuiv = document.createElement("button");
buttonSuiv.classList.add("lightboxNext");
buttonSuiv.addEventListener("click", SuivImg);
document.body.appendChild(buttonSuiv);

//Création de la variable et de la fonction qui permettent d'ouvrir la lightBox
openLBbtn.addEventListener("click", function (event) {
  event.preventDefault();
  openLB();
});
function openLB() {
  const lightboxContainer = document.querySelector("#lightboxContainer");
  lightboxContainer.style.display = "block";
}

//Création de la variable et de la fonction qui permettent de quitter la lightBox
const closeLBbtn = document.createElement("button");
closeLBbtn.classList.add("closeLightBox");
closeLBbtn.addEventListener("click", function (event) {
  event.preventDefault();
  closeLB();
});
document.body.appendChild(closeLBbtn);

function closeLB() {
  const lightboxContainer = document.querySelector("#lightboxContainer");
  lightboxContainer.style.display = "none";
}
*/
