class ImageFactory {
  constructor(photographers, media) {
    this.name = photographers.name;
    this.image = media.image;
    console.log(photographers.name);
    //this.photographerId = data.photographerId;
  }
  draw() {
    let elimg = document.createElement("img");
    elimg.src = "../assets/" + this.name + "/" + this.image; //${photographerId}
    return elimg;
  }
}
