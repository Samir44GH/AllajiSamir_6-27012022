function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    article.classList.add("photographer_card");
    const img = document.createElement("img");
    img.classList.add("photographer_img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    const h2 = document.createElement("h2");
    h2.textContent = name;
    h2.classList.add("photographer_name");
    const div1 = document.createElement("div");
    div1.classList.add("photographer_description");
    const h4 = document.createElement("h4");
    h4.textContent = city + "," + " " + country;
    h4.classList.add("city");
    const p1 = document.createElement("p");
    p1.textContent = tagline;
    p1.classList.add("tagline");
    const p2 = document.createElement("p");
    p2.textContent = price + "€/jour";
    p2.classList.add("price");

    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(div1);
    div1.appendChild(h4);
    div1.appendChild(p1);
    div1.appendChild(p2);
    return article;
  }
  return { name, picture, getUserCardDOM };
}
