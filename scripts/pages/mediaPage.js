fetch("data/photographers.json")
  //Première promesse qui va avoir notre réponse (transformation de nos données en json)
  .then((res) => res.json())
  //Deuxième promesse qui va nous permettre d'avoir accès à nos données
  .then((data) => {
    // récupération de la chaine de requête dans l'url
    const queryString_url_id = window.location.search;
    //console.log(queryString_url_id);

    //méthode pour extraire l'id
    const urlSearchParams = new URLSearchParams(queryString_url_id);
    // console.log(urlSearchParams);

    const id = urlSearchParams.get("id");
    // console.log(id);

    //Retourne un nouveau tableau avec les éléments des photographes
    const photographe = data.photographers.filter(
      (element) => element.id === parseInt(id)
    );
    //console.log(photographe);

    //Retourne un nouveau tableau avec les éléments des médias
    const recupDataMedia = data.media.filter(
      (element) => element.photographerId === parseInt(id)
    );
    console.log(recupDataMedia);

    /* /////////////DROPDOWN///////////// */
    let spanDD1 = document.querySelector(".btnArrow");
    let buttonDD1 = document.querySelector("#buttonDrop1");
    let buttonDD2 = document.querySelector("#buttonDrop2");
    let buttonDD3 = document.querySelector("#buttonDrop3");

    //Le clic du bouto spannDD1 permet l'apparation du menu en entier, plus la rotation .fas
    spanDD1.addEventListener("click", (event) => {
      event.preventDefault();
      buttonDD2Appear();
    });

    //Apparition du bouton DD2
    function buttonDD2Appear() {
      let buttonDD1Id = document.getElementById("buttonDrop1");
      let buttonDD2Id = document.getElementById("buttonDrop2");
      let buttonDD3Id = document.getElementById("buttonDrop3");
      buttonDD1Id.blur;
      //Apparition du menu
      function menuDDVisible(para) {
        document.querySelector("#buttonDrop2").classList.contains("disappear");
        let buttonDD2Id = document.getElementById("buttonDrop2");
        if (para === "appear") {
          buttonDD2Id.classList.remove("disappear");
          buttonDD3Id.classList.remove("disappear");
        } else if (para === "disappear") {
          buttonDD2Id.classList.add("disappear");
          buttonDD3Id.classList.add("disappear");
        }
      }
      //Apparition du menu lorsque le buttonDRop2 apparait
      if (
        document.querySelector("#buttonDrop2").classList.contains("disappear")
      ) {
        menuDDVisible("appear");
        buttonDD2Id.setAttribute("aria-expanded", "true");
        buttonDD3Id.setAttribute("aria-expanded", "true");
      } else {
        menuDDVisible("disappear");
        buttonDD2Id.setAttribute("aria-expanded", "false");
        buttonDD3Id.setAttribute("aria-expanded", "false");
      }
      // Rotation icon FA chevron: ajout/retrait class rotate
      if (document.querySelector(".fas").classList.contains("rotate")) {
        document.querySelector(".fas").classList.remove("rotate");
      } else {
        document.querySelector(".fas").classList.add("rotate");
      }
    }

    //Tri de la gallerie selon la popularité dans l'ordre croissant
    buttonDD1.addEventListener("click", () => {
      console.clear();
      console.log("btndd1");
      recupDataMedia.sort((a, b) => {
        return a.likes - b.likes;
      });
      const ctnMedia = document.querySelector(".mediaContainer");
      ////Suppression de l'ancien mediacontainer
      while (ctnMedia.firstChild) {
        ctnMedia.removeChild(ctnMedia.firstChild);
      }
      media(recupDataMedia, photographe);
    });

    //Tri de la gallerie selon les titres dans l'ordre croissant
    buttonDD2.addEventListener("click", () => {
      recupDataMedia.sort((a, b) => {
        if (a.title > b.title) return 1;
        if (a.title < b.title) return -1;
        return 0;
      });
      const ctnMedia = document.querySelector(".mediaContainer");
      ////Suppression de l'ancien mediacontainer
      while (ctnMedia.firstChild) {
        ctnMedia.removeChild(ctnMedia.firstChild);
      }

      media(recupDataMedia, photographe);
    });

    //Tri de la gallerie selon les dates dans l'ordre croissant
    buttonDD3.addEventListener("click", () => {
      recupDataMedia.sort((a, b) => {
        if (a.date > b.date) return 1;
        if (a.date < b.date) return -1;
        return 0;
      });
      const ctnMedia = document.querySelector(".mediaContainer");
      ////Suppression de l'ancien mediacontainer
      while (ctnMedia.firstChild) {
        ctnMedia.removeChild(ctnMedia.firstChild);
      }

      media(recupDataMedia, photographe);
    });

    banneer(photographe, recupDataMedia);
    modal(photographe, recupDataMedia);
    media(recupDataMedia, photographe);
    LB(recupDataMedia, photographe);
    containerComplementary(recupDataMedia, photographe);
  });

function media(data, photographe) {
  // console.log(data);
  for (let cur of data) {
    let instanceMedia = new MediaFactory(photographe[0], cur);
    document.querySelector(".mediaContainer").appendChild(instanceMedia.draw());
  }
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

function LB(data, photographe) {
  // console.log(data);
  let instanceLB = new LightBox(data, photographe[0]);
  console.log(instanceLB);
  document.body.appendChild(instanceLB.draw());
  console.log(instanceLB.draw);
}

function containerComplementary(data, photographe) {
  // console.log(data);
  let instanceB = new MediaFactory(photographe[0], data);
  console.log(instanceB);
  document
    .querySelector("#complementary")
    .appendChild(instanceB.CompteurNbrLikesPrice());
  console.log(instanceB.CompteurNbrLikesPrice);
}

// function dropDown(photographers, listDataPhotographer) {
//   // console.log(listDataPhotographer);
//   let instanceB = new Photographers(photographers[0], listDataPhotographer);
//   console.log(instanceB);
//   document
//     .querySelector(".dropDownContainer")
//     .appendChild(instanceB.dropDown());
//   console.log(instanceB.dropDown);
// }

// const recupDataMediaPop = data.media
//   .filter((element) => element.photographerId === parseInt(id))
//   .sort(function (a, b) {
//     return a.likes - b.likes;
//   });
// console.log(recupDataMediaPop);

// const recupDataMediaTitile = data.media
//   .filter((element) => element.photographerId === parseInt(id))
//   .sort(function (a, b) {
//     if (a.title > b.title) return 1;
//     if (a.title < b.title) return -1;
//     return 0;
//   });
// console.log(recupDataMediaTitile);
