class ImageFactory {
  constructor(photographers, media) {
    this.name = photographers.name;
    this.image = media.image;
    this.title = media.title;
    console.log(photographers.name);
  }
  getUserCardPhoto() {
    const imageCardMedia = document.createElement("article");
    const titleImage = document.createElement("p");
    titleImage.textContent = this.title;
    imageCardMedia.appendChild(titleImage);

    return imageCardMedia;
  }

  draw() {
    let elimg = document.createElement("img");
    elimg.src = "../assets/" + this.name + "/" + this.image; //${photographerId}
    const getUserCard = this.getUserCardPhoto();
    getUserCard.prepend(elimg);
    return getUserCard;
    // const userCardPhotoMedia = function getUserCardPhoto() {
    //   const imageCardMedia = document.createElement("article");
    // };
  }
}
