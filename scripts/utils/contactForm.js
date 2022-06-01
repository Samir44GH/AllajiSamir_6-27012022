class Modal {
  constructor(photographers) {
    this.name = photographers.name;
    this.id = photographers.id;
    this.city = photographers.city;
    this.country = photographers.country;
    this.tagline = photographers.tagline;
    this.price = photographers.price;
    this.portrait = photographers.portrait;
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
}
