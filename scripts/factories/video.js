class VideoFactory {
  constructor(photographers, media) {
    this.video = media.video;
  }
  draw() {
    let elvid = document.createElement("video");
    let elsrc = document.createElement("source");
    elsrc.src = "../assets/media/" + this.video;
    elvid.appendChild(elsrc);
    return elvid;
  }
}
