class Photographers {
  constructor(photographers, recupDataMedia) {
    console.log(photographers);
    console.log(recupDataMedia);
    this.name = photographers.name;

    this.id = photographers.id;
    this.city = photographers.city;
    this.country = photographers.country;
    this.tagline = photographers.tagline;
    this.price = photographers.price;
    this.portrait = "/assets/photographers/" + photographers.portrait;
  }

  modalPhotographer() {
    const divModal = document.createElement("div");
    const headerModal = document.createElement("header");
    const headerModalH2 = document.createElement("h2");
    const headerModalImg = document.createElement("img");
    const formModal = document.createElement("form");
    const formModalDivPrenom = document.createElement("div");
    const formModalDivNom = document.createElement("div");
    const formModalDivAdresse = document.createElement("div");
    const formModalDivMessage = document.createElement("div");
    const mDivLabelPrenom = document.createElement("label");
    const mDivLabelNom = document.createElement("label");
    const mDivLabelAdresse = document.createElement("label");
    const mDivLabelMessage = document.createElement("label");
    const mDivInputPrenom = document.createElement("input");
    const mDivInputNom = document.createElement("input");
    const mDivInputAdresse = document.createElement("input");
    const mDivInputMessage = document.createElement("input");
    const formModalBtn = document.createElement("button");

    headerModalH2.innerHTML = "Contactez-moi" + "</br>" + this.name;
    mDivLabelPrenom.textContent = "Prénom";
    mDivLabelNom.textContent = "Nom";
    mDivLabelAdresse.textContent = "E-mail";
    mDivLabelMessage.textContent = "Votre message";
    formModalBtn.textContent = "Envoyer";

    mDivLabelPrenom.setAttribute("for", "first");
    mDivLabelNom.setAttribute("for", "last");
    mDivLabelAdresse.setAttribute("for", "email");
    mDivLabelMessage.setAttribute("for", "message");

    Object.assign(mDivInputPrenom, {
      class: "text-control",
      type: "text",
      id: "first",
      name: "first",
      minlength: "2",
      placeholder: "Jean",
    });

    Object.assign(mDivInputNom, {
      class: "text-control",
      type: "text",
      id: "last",
      name: "last",
      minlength: "2",
      placeholder: "Dupont",
    });

    Object.assign(mDivInputAdresse, {
      class: "text-control",
      type: "email",
      id: "email",
      name: "email",
      placeholder: "JeanDupont@gmail.com",
      pattern: "[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+.[a-zA-Z.]{2,15}",
    });

    Object.assign(mDivInputMessage, {
      class: "text-control",
      type: "message",
      id: "message",
      name: "message",
      placeholder: "Minuimum 10 caractères",
      minlength: "10",
      // maxlength: "100",
    });

    headerModalImg.src = "../assets/icons/close.svg";

    divModal.classList.add("modal");
    formModalBtn.classList.add("contact_button", "submit_modal");
    formModalDivMessage.classList.add("divMessage");
    mDivInputMessage.classList.add("inputMessage");

    //Validation elements
    const validate = (e) => {
      e.preventDefault();
      console.log(e.target.first.value);
      console.log(e.target.last.value);
      console.log(e.target.email.value);
      console.log(e.target.message.value);
    };

    // Fermeture de la modale
    headerModalImg.addEventListener("click", (event) => {
      event.preventDefault();
      this.closeModal();
    });

    // Submit form
    formModal.onsubmit = (e) => validate(e);
    //Enfant de header
    headerModal.appendChild(headerModalH2);
    headerModal.appendChild(headerModalImg);
    //Enfant de form
    formModalDivPrenom.appendChild(mDivLabelPrenom);
    formModalDivPrenom.appendChild(mDivInputPrenom);
    formModalDivNom.appendChild(mDivLabelNom);
    formModalDivNom.appendChild(mDivInputNom);
    formModalDivAdresse.appendChild(mDivLabelAdresse);
    formModalDivAdresse.appendChild(mDivInputAdresse);
    formModalDivMessage.appendChild(mDivLabelMessage);
    formModalDivMessage.appendChild(mDivInputMessage);
    formModal.appendChild(formModalDivPrenom);
    formModal.appendChild(formModalDivNom);
    formModal.appendChild(formModalDivAdresse);
    formModal.appendChild(formModalDivMessage);
    formModal.appendChild(formModalBtn);
    //Enfant de la modale
    divModal.appendChild(headerModal);
    divModal.appendChild(formModal);

    return divModal;
  }

  //Fonction qui permet de fermer la modale
  closeModal() {
    const modal = document.querySelector("#contact_modal");
    modal.style.display = "none";
  }

  getUserBannerDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const div1 = document.createElement("div");
    const h4 = document.createElement("h4");
    const btn = document.createElement("button");
    const p1 = document.createElement("p");

    article.classList.add("photographer_banner_card");
    img.classList.add("photographer_banner_img");
    img.src = /*"../assets/photographers/" +*/ this.portrait;
    img.setAttribute("alt", this.name);
    h2.textContent = this.name;
    h2.classList.add("photographer_banner_name");
    div1.classList.add("photographer_banner_description");
    h4.textContent = this.city + ", " + this.country;
    h4.classList.add("banner_city");
    btn.classList.add("contact_button", "open_modal");
    btn.textContent = "Contactez moi";
    btn.setAttribute("type", "button");

    // Ouverture de la modale
    btn.addEventListener("click", (event) => {
      event.preventDefault();
      this.displayModal();
    });

    p1.textContent = this.tagline;
    p1.classList.add("banner_tagline");

    article.appendChild(div1);
    article.appendChild(btn);
    article.appendChild(img);
    div1.appendChild(h2);
    div1.appendChild(h4);
    div1.appendChild(p1);

    return article;
  }
  dropDown() {
    let dropDown = document.createElement("div");
    let containerTrie = document.createElement("div");
    let containerDropDown = document.createElement("nav");
    let containerBtnDD = document.createElement("div");
    let buttonDD1 = document.createElement("button");
    let buttonDD2 = document.createElement("button");
    let spanDD1 = document.createElement("span");

    containerTrie.classList.add("containerSort");
    dropDown.classList.add("dropDown");
    containerBtnDD.classList.add("containerBtn");
    containerDropDown.classList.add("containerDD");
    buttonDD1.classList.add("buttonDropDown", "contact_button", "buttonDD1");
    buttonDD2.classList.add(
      "buttonDropDown",
      "contact_button",
      "disappear",
      "buttonDD2"
    );
    spanDD1.classList.add("fas", "fa-chevron-down", "btnArrow");

    containerDropDown.setAttribute("role", "naviguation"),
      containerDropDown.setAttribute("aria-expanded", "true");
    buttonDD1.getAttribute("aria-label", "Trier par popularité");
    buttonDD2.getAttribute("aria-label", "Trier par titre");
    spanDD1.setAttribute("aria-hidden", "true");

    containerTrie.textContent = "Trier par";
    buttonDD1.textContent = "Popularité";
    buttonDD2.textContent = "Titre";

    Object.assign(containerDropDown, {
      class: "containerDD",
      id: "containerDD",
    });
    Object.assign(buttonDD1, {
      type: "button",
      id: "buttonDrop1",
      value: "Popularité",
    });
    Object.assign(buttonDD2, {
      type: "button",
      id: "buttonDrop2",
      value: "Titre",
    });
    //Le clic du bouto spannDD1 permet l'apparation du menu en entier, plus la rotation .fas
    spanDD1.addEventListener("click", (event) => {
      event.preventDefault();
      this.buttonDD2Appear();
    });
    //Enfants de containerDropDown
    containerDropDown.appendChild(containerBtnDD);
    //Enfants de containerBtnDD
    containerBtnDD.appendChild(buttonDD1);
    containerBtnDD.appendChild(buttonDD2);
    //Enfants de containerDropDown
    containerDropDown.appendChild(spanDD1);
    //Enfants de dropDown
    dropDown.appendChild(containerTrie);
    dropDown.appendChild(containerDropDown);
    return dropDown;
  }

  //Fonction qui permet d'ouvrir la modale
  displayModal() {
    const modal = document.querySelector("#contact_modal");
    modal.style.display = "block";
  }

  //Apparition du bouton DD2
  buttonDD2Appear() {
    let buttonDD1Id = document.getElementById("buttonDrop1");
    let buttonDD2Id = document.getElementById("buttonDrop2");
    buttonDD1Id.blur;
    //Apparition du menu
    function menuDDVisible(para) {
      document.querySelector("#buttonDrop2").classList.contains("disappear");
      let buttonDD2Id = document.getElementById("buttonDrop2");
      if (para === "appear") {
        buttonDD2Id.classList.remove("disappear");
      } else if (para === "disappear") {
        buttonDD2Id.classList.add("disappear");
      }
    }
    //Apparition du menu lorsque le buttonDRop2 apparait
    if (
      document.querySelector("#buttonDrop2").classList.contains("disappear")
    ) {
      menuDDVisible("appear");
      buttonDD2Id.setAttribute("aria-expanded", "true");
    } else {
      menuDDVisible("disappear");
      buttonDD2Id.setAttribute("aria-expanded", "false");
    }
    // Rotation icon FA chevron: ajout/retrait class rotate
    if (document.querySelector(".fas").classList.contains("rotate")) {
      document.querySelector(".fas").classList.remove("rotate");
      // document.querySelector(".fas").classList.add("rotateIn");
    } else {
      document.querySelector(".fas").classList.add("rotate");
    }
  }
}
