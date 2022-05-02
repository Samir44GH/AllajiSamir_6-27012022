class VideoFactory {
  constructor(photographers, media) {
    this.name = photographers.name;
    this.video = media.video;
    this.title = media.title;
    this.likes = media.likes;
  }

  getUserCardVideo() {
    //Création Des vidéos dans l'article "videoCardMedia"//
    const videoCardMedia = document.createElement("article");

    //Création des éléments dans la div "SousTitre"//
    const divSousTitre = document.createElement("div");
    const titleVideo = document.createElement("h2");
    const divLike = document.createElement("div");
    const spanLikeNumber = document.createElement("span");
    const IcButton = document.createElement("button");
    const IcHeart = document.createElement("span");

    videoCardMedia.classList.add("containersVideoCards");
    divSousTitre.classList.add("sousTitre");
    titleVideo.classList.add("titleMedia");
    divLike.classList.add("heartLike");
    spanLikeNumber.classList.add("likeNumber");
    IcButton.classList.add("heartButton");
    IcHeart.classList.add("fas", "fa-heart", "heart");

    titleVideo.textContent = this.title;
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
    divSousTitre.appendChild(titleVideo);
    divSousTitre.appendChild(divLike);
    //Ajout des enfants du lien et du sous-titre//

    videoCardMedia.appendChild(divSousTitre);

    return videoCardMedia;
  }
  draw() {
    //Création de l'élément Vidéo//
    let elvid = document.createElement("video");
    const videoLink = document.createElement("a");
    const getUserCard = this.getUserCardVideo();
    //Icone de lecture a ajouté en + pour reconnaitre la vidéo//
    videoLink.setAttribute("href", "#");
    videoLink.classList.add("enterLightbox");
    elvid.classList.add("videoMedia");
    let elsrc = document.createElement("source");
    elvid.setAttribute("alt", this.title);

    elsrc.src = "../assets/" + this.name + "/" + this.video;
    elvid.appendChild(elsrc);
    videoLink.appendChild(elvid);
    getUserCard.prepend(videoLink);
    return getUserCard;
  }
}
// draw() {
//   //Création de l'élément Image//
//   let elimg = document.createElement("img");
//   const imageLink = document.createElement("a");
//   const getUserCard = this.getUserCardPhoto();

//   imageLink.classList.add("EnterLightbox");
//   elimg.classList.add("imageMedia");
//   elimg.setAttribute("alt", this.title);
//   imageLink.classList.add("EnterLightbox");
//   // imageLink.setAttribute("href, ");
//   elimg.src = "../assets/" + this.name + "/" + this.image;

//   //Ajout de l'élément elimg > imageLink > getUserCard//
//   imageLink.appendChild(elimg);
//   getUserCard.prepend(imageLink);
//   return getUserCard;
// }
