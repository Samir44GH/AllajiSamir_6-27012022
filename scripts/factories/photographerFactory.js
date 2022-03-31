function photographerFactory(data) {
  const { name, id, city, country, tagline, price, portrait } = data;

  const picture = `assets/photographers/${portrait}`;

  function getUserCardDOM() {
    const PhotoLink = document.createElement("a");
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const div1 = document.createElement("div");
    const h4 = document.createElement("h4");
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    PhotoLink.setAttribute("href", "media.html?id=" + id); //||media.html
    article.classList.add("photographer_card");
    img.classList.add("photographer_img");
    img.setAttribute("src", picture);
    img.setAttribute("alt", name);
    h2.textContent = name;
    h2.classList.add("photographer_name");
    div1.classList.add("photographer_description");
    h4.textContent = city + ", " + country;
    h4.classList.add("city");
    p1.textContent = tagline;
    p1.classList.add("tagline");
    p2.textContent = price + "€/jour";
    p2.classList.add("price");
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(div1);
    div1.appendChild(h4);
    div1.appendChild(p1);
    div1.appendChild(p2);
    // return article;
    PhotoLink.appendChild(article);
    return PhotoLink;
  }
  // function getUserBannerDOM() {
  //   const article = document.createElement("article");
  //   const img = document.createElement("img");
  //   const h2 = document.createElement("h2");
  //   const div1 = document.createElement("div");
  //   const h4 = document.createElement("h4");
  //   const p1 = document.createElement("p");
  //   const p2 = document.createElement("p");
  //   article.classList.add("photographer_card");
  //   img.classList.add("photographer_img");
  //   img.setAttribute("src", picture);
  //   img.setAttribute("alt", name);
  //   h2.textContent = name;
  //   h2.classList.add("photographer_name");
  //   div1.classList.add("photographer_description");
  //   h4.textContent = city + ", " + country;
  //   h4.classList.add("city");
  //   p1.textContent = tagline;
  //   p1.classList.add("tagline");
  //   p2.textContent = price + "€/jour";
  //   p2.classList.add("price");
  //   article.appendChild(img);
  //   article.appendChild(h2);
  //   article.appendChild(div1);
  //   div1.appendChild(h4);
  //   div1.appendChild(p1);
  //   div1.appendChild(p2);
  //   return article;
  // }
  return { name, picture, getUserCardDOM /*getUserBannerDOM*/ };
}
