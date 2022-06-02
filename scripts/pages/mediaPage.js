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
    console.log(recupDataMedia);

    const recupDataMediaPop = data.media
      .filter((element) => element.photographerId === parseInt(id))
      .sort(function (a, b) {
        return a.likes - b.likes;
      });
    console.log(recupDataMediaPop);

    const recupDataMediaTitile = data.media
      .filter((element) => element.photographerId === parseInt(id))
      .sort(function (a, b) {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });
    console.log(recupDataMediaTitile);

    // document.addEventListener("click", function (e) {
    //   const ctnMedia = document.querySelector(".mediaContainer");
    //   let ctnImgcards = document.querySelector(".containersImageCards");
    //   let ctnVidcards = document.querySelector(".containersVideoCards");
    //   //Création de la mediaContainer trié en ordre croissant via la popularité en appuyant sur le buttonDrop1(Popularité)
    //   if (e.target.value === "Popularité") {
    //     recupDataMedia.sort(function (a, b) {
    //       return a.likes - b.likes;
    //     });
    //     console.log("POPU");
    //   }
    //   //Création de la mediaContainer trié en ordre croissant via les titres en appuyant sur le buttonDRop2(Titres)
    //   else if (e.target.value === "Titre") {
    //     recupDataMedia.sort(function (a, b) {
    //       if (a.title > b.title) return 1;
    //       if (a.title < b.title) return -1;
    //       return 0;
    //     });
    //     console.log("TITLE");
    //   }

    //supression de l'ancien .mediaContainer

    const spanLikeNumber = document.createElement("span");

    // while (ctnMedia.nth - child(1n + 0)) {
    //   ctnMedia.removeChild(ctnMedia.nth - child(1n + 0));
    // }

    // while (ctnMedia.firstChild) {
    //   ctnMedia.removeChild(ctnMedia.firstChild);
    // }

    // while ((ctnMedia.firstChild, (spanLikeNumber.textContent = this.likes))) {
    //   ctnMedia.removeChild(
    //     ctnMedia.firstChild,
    //     (spanLikeNumber.textContent = this.likes)
    //   );
    // }

    //   media(recupDataMedia, photographe);
    // });

    banneer(photographe, recupDataMedia);
    modal(photographe, recupDataMedia);
    dropDown(photographe, recupDataMedia);
    media(recupDataMedia, photographe);
    LB(recupDataMedia, photographe);
  });

function media(data, photographe) {
  // console.log(data);
  for (let cur of data) {
    let instanceMedia = new MediaFactory(photographe[0], cur);
    document.querySelector(".mediaContainer").appendChild(instanceMedia.draw());
  }
}

function LB(data, photographe) {
  // console.log(data);
  let instanceLB = new LightBox(data, photographe[0]);
  console.log(instanceLB);
  document.body.appendChild(instanceLB.draw());
  console.log(instanceLB.draw);
}

function banneer(photographers, listDataPhotographer) {
  // console.log(data);
  let instanceB = new Photographers(photographers[0], listDataPhotographer);
  console.log(instanceB);
  document
    .querySelector(".photograph-header")
    .appendChild(instanceB.getUserBannerDOM());
  console.log(instanceB.getUserBannerDOM);
}

function modal(photographer, listDataPhotographer) {
  // console.log(data);
  let instanceB = new Photographers(photographer[0], listDataPhotographer);
  console.log(instanceB);
  document
    .querySelector("#contact_modal")
    .appendChild(instanceB.modalPhotographer());
  console.log(instanceB.modalPhotographer);
}
// function modal(photographer) {
//   // console.log(data);
//   let instanceB = new modalContact(photographer[0]);
//   console.log(instanceB);
//   document
//     .querySelector("#contact_modal")
//     .appendChild(instanceB.modalPhotographer());
//   console.log(instanceB.modalPhotographer);
// }

function dropDown(photographers, listDataPhotographer) {
  // console.log(listDataPhotographer);
  let instanceB = new Photographers(photographers[0], listDataPhotographer);
  console.log(instanceB);
  document
    .querySelector(".dropDownContainer")
    .appendChild(instanceB.dropDown());
  console.log(instanceB.dropDown);
}
