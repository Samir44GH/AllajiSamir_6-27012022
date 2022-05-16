class LightBox {
  constructor(media, photographers) {
    this.title = media.title;
    this.listImage = media.map((element) => element.image);
    this.listVideo = media.map((element) => element.video);
    this.listTitle = media.map((element) => element.title);
    this.listMedia = media;
    console.log(this.listImage);
    console.log(this.listTitle);
    console.log(this.listVideo);
    this.name = photographers.name;
  }

  getUserLB() {}

  draw() {
    //Création d'un tableau d'image
    let LightBox = document.createElement("div");
    let LightBoxEl = document.createElement("article");
    // let LBImgTitle = document.createElement("div");
    LightBox.classList.add("lightboxContainer");
    //Element courant de la galeire
    let imageCur = -1;

    for (let elCur of this.listMedia) {
      // const titleImage = document.createElement("h2");
      // titleImage.classList.add("titleLBImg");
      // titleImage.textContent = elCur;
      let LBimage = elCur.video
        ? this.createVideo(elCur.video)
        : document.createElement("img");
      console.log(elCur.video);
      let LightBoxEl1 = document.createElement("article");
      LightBoxEl1.classList.add("lightBoxEl1");

      const titleImage = document.createElement("h2");
      titleImage.classList.add("titleLBImg");

      titleImage.textContent = elCur.title;
      // LBImgTitle.classList.add("LBImgTitle");
      LBimage.classList.add("LBImg");
      LBimage.setAttribute("alt", elCur.title);
      LightBoxEl1.appendChild(LBimage);
      LightBoxEl1.appendChild(titleImage);

      LightBoxEl.appendChild(LightBoxEl1);

      LightBox.appendChild(LightBoxEl);

      LightBoxEl.children[LightBoxEl.children.length - 1].children[0].src =
        "../assets/" + this.name + "/" + elCur.image || elCur.video;
    }

    // for (let Cur of this.listTitle) {
    //   const titleImage = document.createElement("h2");

    //   titleImage.classList.add("titleLBImg");

    //   LBImgTitle.classList.add("LBImgTitle");

    //   LBImgTitle.appendChild(titleImage);
    //   LightBox.appendChild(LBImgTitle);
    //   LBImgTitle.children[LBImgTitle.children.length - 1].textContent = Cur;
    // }
    // for (let Cur of this.listImage) {
    //   const titleImage = document.createElement("h2");
    //   titleImage.classList.add("titleLBImg");
    //   //titleImage.textContent = Cur;
    //   LBImgTitle.appendChild(titleImage);
    //   LightBoxEl.appendChild(LBImgTitle);
    //   LBImgTitle.children[LBImgTitle.children.length - 1].textContent =
    //     this.title + "/" + Cur;
    // }

    //Fonction qui va faire l'animation de la gallerie
    const hideEl = () => {
      //LightBox.style.display = "none";
      //on réinitialise l'affichage de toutes les images (autres que celle que l'on veut afficher)
      for (let OnEl of LightBoxEl.children) {
        OnEl.style.display = "none";
      }
      // for (let El of LBImgTitle.children) {
      //   El.style.display = "none";
      // }
    };
    console.log(hideEl);
    //Création de la fonction qui permet de passer à l'image suivante
    const SuivImg = (e = {}) => {
      hideEl();
      LightBoxEl.children[
        Math.abs(++imageCur) % LightBoxEl.children.length
      ].style.display = "block";
    };
    SuivImg();
    //Création de la fonction qui permet de revenir à l'image précédente

    const PrecImg = (e = {}) => {
      hideEl();

      LightBoxEl.children[
        Math.abs(--imageCur % LightBoxEl.children.length)
      ].style.display = "block";
    };
    PrecImg();

    //Création du bouton qui permet de revenir à l'image précédente
    const buttonPrec = document.createElement("button");
    buttonPrec.classList.add("lightboxPrev");
    buttonPrec.addEventListener("click", PrecImg);

    //Création du bouton qui permet de passer à l'image suivante
    const buttonSuiv = document.createElement("button");
    buttonSuiv.classList.add("lightboxNext");
    buttonSuiv.addEventListener("click", SuivImg);

    //Création de la variable et de la fonction qui permettent de quitter la lightBox
    const closeLBbtn = document.createElement("button");
    closeLBbtn.classList.add("closeLightBox");
    closeLBbtn.addEventListener("click", function (event) {
      event.preventDefault();
      closeLB();
    });

    function closeLB() {
      LightBox.style.display = "none";
    }

    //LBElt.appendChild(LBImg);
    // LightBox.appendChild(LBElt);
    LightBox.appendChild(buttonSuiv);
    LightBox.appendChild(buttonPrec);
    LightBox.appendChild(closeLBbtn);

    return LightBox;
  }
  createVideo(vid) {
    let video = document.createElement("video");

    video.appendChild(document.createElement("source"));
    video.children[0].src = vid;

    return video;
  }
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
