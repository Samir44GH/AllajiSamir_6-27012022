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
    console.log(this.listMedia);
    this.name = photographers.name;
    console.log(photographers.name);
    this.country = photographers.country;
    this.video = media.video;
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
      let LBimage = elCur.video
        ? this.createVideo(elCur.video)
        : document.createElement("img");

      let LightBoxEl1 = document.createElement("article");
      LightBoxEl1.classList.add("lightBoxEl1");

      const titleImage = document.createElement("h2");
      titleImage.classList.add("titleLBImg");

      titleImage.textContent = elCur.title;
      LBimage.classList.add("LBImg");
      LBimage.setAttribute("alt", elCur.title);
      //Article comprenant chacun une image et un titre
      LightBoxEl1.appendChild(LBimage);
      LightBoxEl1.appendChild(titleImage);
      //Article contenant tous les articles (image+titre)
      LightBoxEl.appendChild(LightBoxEl1);
      //LighboxContainer contient un article
      LightBox.appendChild(LightBoxEl);
      if (!elCur.video)
        LightBoxEl.children[LightBoxEl.children.length - 1].children[0].src =
          "assets/" + this.country + "/" + elCur.image || elCur.video;
    }

    //Fonction qui va faire l'animation de la gallerie
    const hideEl = () => {
      //on réinitialise l'affichage de toutes les images (autres que celle que l'on veut afficher)
      for (let OnEl of LightBoxEl.children) {
        OnEl.style.display = "none";
      }
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

    //Les touche <-- et --> permettent de changer les médias et Escape de quitter la LB
    document.addEventListener("keydown", function (e) {
      //Escape permet de quitter la LB
      if (e.keyCode === 27) {
        closeLB();
        console.log("esc");
      }
      //Si la touche --> est appuyée, cela permettra de changer de média
      if (e.keyCode === 37) {
        PrecImg();
        console.log("FDroite");
      }
      //Si la touche <-- est appuyée, cela permettra de changer de média
      else if (e.keyCode === 39) {
        SuivImg();
        console.log("FGauche");
      }
    });

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

    LightBox.appendChild(buttonSuiv);
    LightBox.appendChild(buttonPrec);
    LightBox.appendChild(closeLBbtn);

    return LightBox;
  }
  createVideo(vid) {
    let video = document.createElement("video");

    video.appendChild(document.createElement("source"));
    video.children[0].src = "assets/" + this.country + "/" + vid;
    // /SamirALLAJI_6-27012022/
    video.controls = "controls";
    console.log(video.children);
    return video;
  }
}
