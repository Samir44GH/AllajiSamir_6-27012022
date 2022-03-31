function A(data, photographe /*media*/) {
  for (let cur of data) {
    // const imageCardContainers = document.querySelector(".imageCard");
    let instanceMedia = new MediaFactory(photographe, cur);
    document
      .querySelector(".imageCardContainers")
      .appendChild(instanceMedia.draw());

    // const userCardPhotoMedia = function getUserCardPhoto() {
    //   const imageCardMedia = document.createElement("article");
    // };
  }
}

fetch("data/photographers.json")
  .then((res) => res.json())
  .then((data) => {
    // récupération de la chaine de requête dans l'url
    const queryString_url_id = window.location.search;
    console.log(queryString_url_id);

    //méthode pour extraire l'id
    const urlSearchParams = new URLSearchParams(queryString_url_id);
    console.log(urlSearchParams);

    const id = urlSearchParams.get("id");
    // console.log(id);
    const photographe = data.photographers.filter(
      (element) => element.id === parseInt(id)
    );
    console.log(photographe);
    const RecupDataMedia = data.media.filter(
      (element) => element.photographerId === parseInt(id)
    );
    // const userCardPhotoMedia = function getUserCardPhoto() {
    //   const imageCardMedia = document.createElement("article");
    // };
    console.log(RecupDataMedia);
    A(RecupDataMedia, photographe[0] /*userCardPhotoMedia*/);
  });
