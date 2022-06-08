class ImageFactory {
  constructor(photographers, media) {
    console.log(media);
    console.log(photographers);
    this.name = photographers.name;
    this.country = photographers.country;
    console.log(photographers.country);
    this.image = media.image;
    this.title = media.title;
    this.likes = media.likes;
    console.log(media.image);
    this.elimg = document.createElement("img");
  }
  getUserCardPhoto() {
    //Création Des images dans l'article "ImageCardMedia"//
    const imageCardMedia = document.createElement("article");

    //Création des éléments dans la div "SousTitre"//
    const divSousTitre = document.createElement("div");
    const titleImage = document.createElement("h2");
    const divLike = document.createElement("div");
    const spanLikeNumber = document.createElement("span");
    const IcButton = document.createElement("button");
    const IcHeart = document.createElement("span");

    imageCardMedia.classList.add("containersImageCards");
    divSousTitre.classList.add("sousTitre");
    titleImage.classList.add("titleMedia");
    divLike.classList.add("heartLike");
    spanLikeNumber.classList.add("likeNumber");
    IcButton.classList.add("heartButton");
    IcHeart.classList.add("fas", "fa-heart", "heart");

    titleImage.textContent = this.title;
    spanLikeNumber.textContent = this.likes;

    IcButton.addEventListener("click", (e) => {
      spanLikeNumber.textContent = parseInt(spanLikeNumber.textContent) + 1;
      console.log("Hello");
    });

    //Ajout des enfants de la divLike//
    divLike.appendChild(spanLikeNumber);
    divLike.appendChild(IcButton);
    IcButton.appendChild(IcHeart);

    //Ajout des enfants du sous-titre//
    divSousTitre.appendChild(titleImage);
    divSousTitre.appendChild(divLike);
    //Ajout des enfants du lien et du sous-titre//
    imageCardMedia.appendChild(divSousTitre);

    return imageCardMedia;
  }

  draw() {
    //Création de l'élément Image//

    const imageLink = document.createElement("a");
    const getUserCard = this.getUserCardPhoto();
    imageLink.setAttribute("href", "#");
    imageLink.classList.add("enterLightbox");
    this.elimg.classList.add("imageMedia");
    //Création de la variable et de la fonction qui permettent d'ouvrir la lightBox
    this.elimg.addEventListener("click", (event) => {
      event.preventDefault();
      this.openLB();
    });

    this.elimg.setAttribute("alt", this.title);

    this.elimg.src = "assets/" + this.country + "/" + this.image;

    //Ajout de l'élément elimg > imageLink > getUserCard//
    imageLink.appendChild(this.elimg);
    getUserCard.prepend(imageLink);
    return getUserCard;
  }

  openLB() {
    let LightBox = document.querySelector(".lightboxContainer");
    LightBox.style.display = "block";
  }
}
