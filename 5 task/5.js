document.addEventListener("DOMContentLoaded", function () {
  console.log("hiig");
  const btns = document.querySelectorAll("button");

  const getImages = (url) => {
    return fetch(url)
      .then((response) => {
        return response;
      })
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  btns.forEach((btn) => {
    btn.addEventListener("click", async () => {
      const pageNum = document.querySelector(".first").value;
      const limit = document.querySelector(".second").value;
      if (isNaN(pageNum) || parseInt(pageNum) < 1 || parseInt(pageNum) > 10) {
        console.log("Номер страницы вне диапазона от 1 до 10");
      } else if (isNaN(limit) || limit < 1 || limit > 10) {
        console.log("лимит вне диапазона от 1 до 10");
      } else {
        const urlImage = `https://jsonplaceholder.typicode.com/photos?_page=${pageNum}&_limit=${limit}`;
        const img = await getImages(urlImage);
        const imgCont = document.querySelector(".imagesCont");
        imgCont.innerHTML = `<img src="${img.url}" />`;
        console.log(urlImage);
      }
    });
  });
});
