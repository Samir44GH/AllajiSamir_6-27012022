class MediaFactory {
  constructor(photographers, media) {
    if (media.video) return new VideoFactory(photographers, media);
    else return new ImageFactory(photographers, media);
  }
}
