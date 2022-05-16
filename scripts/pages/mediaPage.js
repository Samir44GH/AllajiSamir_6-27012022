function A(data, photographe) {
  for (let cur of data) {
    let instanceMedia = new MediaFactory(photographe, cur);
    //console.log(instanceMedia);
    document.querySelector(".mediaContainer").appendChild(instanceMedia.draw());
  }
}

function B(data, photographe) {
  console.log(data);
  let instanceLB = new LightBox(data, photographe);
  console.log(instanceLB);
  document.body.appendChild(instanceLB.draw());
  console.log(instanceLB.draw);
}

fetch("data/photographers.json")
  .then((res) => res.json())
  .then((data) => {
    // récupération de la chaine de requête dans l'url
    const queryString_url_id = window.location.search;
    //console.log(queryString_url_id);

    //méthode pour extraire l'id
    const urlSearchParams = new URLSearchParams(queryString_url_id);
    // console.log(urlSearchParams);

    const id = urlSearchParams.get("id");
    // console.log(id);
    const photographe = data.photographers.filter(
      (element) => element.id === parseInt(id)
    );
    //console.log(photographe);
    const recupDataMedia = data.media.filter(
      (element) => element.photographerId === parseInt(id)
    );

    const dataMediaLB = data.media.filter(
      /*.map*/ (element) => element.photographerId === parseInt(id)
    );
    //Création des images des médias dans la  classe MediaContainer
    console.log(recupDataMedia);
    console.log(dataMediaLB);

    A(recupDataMedia, photographe[0]);
    B(recupDataMedia, photographe[0]);
  });
