document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button");

  const getImages = (url) => {
    return fetch(url)
      .then((response) => {
        return response.json();
      })
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  };

  btn.addEventListener("click", async () => {
    const imgCont = document.querySelector(".imagesCont");
    const pageNum = document.querySelector(".first").value;
    const limit = document.querySelector(".second").value;
    if (
      (isNaN(pageNum) || parseInt(pageNum) < 1 || parseInt(pageNum) > 10) &&
      (isNaN(limit) || parseInt(limit) < 1 || parseInt(limit) > 10)
    ) {
      imgCont.innerText = "Номер страницы и лимит вне диапазона от 1 до 10";
    } else if (
      isNaN(pageNum) ||
      parseInt(pageNum) < 1 ||
      parseInt(pageNum) > 10
    ) {
      imgCont.innerText = "Номер страницы вне диапазона от 1 до 10";
      console.log("Номер страницы вне диапазона от 1 до 10");
    } else if (isNaN(limit) || limit < 1 || limit > 10) {
      imgCont.innerText = "лимит вне диапазона от 1 до 10";
      console.log("лимит вне диапазона от 1 до 10");
    } else {
      const urlImage = `https://jsonplaceholder.typicode.com/photos?_page=${pageNum}&_limit=${limit}`;
      const img = await getImages(urlImage);

      let cards = "";
      img.forEach((item) => {
        const block = `<img src="${item.url}"/>`;
        cards += block;
      });
      imgCont.innerHTML = cards;

      console.log(img);

      localStorage.setItem("lastImages", JSON.stringify(img));
      console.log(localStorage.getItem("lastImages"));
      console.log(JSON.parse(localStorage.getItem("lastImages")));
    }
  });

  const imgCont = document.querySelector(".imagesCont");
  const lastImage = localStorage.getItem("lastImages");
  const storedImages = JSON.parse(lastImage);
  if (storedImages) {
    let cards = "";
    storedImages.forEach((item) => {
      const block = `<img src="${item.url}"/>`;
      cards += block;
    });
    imgCont.innerHTML = cards;
  }
});
