class Photographers {
  constructor(data) {
    this.name = data.name;
    this.id = data.id;
    this.city = data.city;
    this.country = data.country;
    this.tagline = data.tagline;
    this.price = data.price;
    this.portrait = data.portrait;
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
    img.src = "../assets/photographers/" + this.portrait;
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

    headerModalImg.src = "../assets/icons/close.svg";

    divModal.classList.add("modal");
    formModalBtn.classList.add("contact_button", "submit_modal");

    // Fermeture de la modale
    headerModalImg.addEventListener("click", (event) => {
      event.preventDefault();
      this.closeModal();
    });

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

  //Fonction qui permet d'ouvrir la modale
  displayModal() {
    const modal = document.querySelector("#contact_modal");
    modal.style.display = "block";
  }
  //Fonction qui permet de fermer la modale
  closeModal() {
    const modal = document.querySelector("#contact_modal");
    modal.style.display = "none";
  }
}
