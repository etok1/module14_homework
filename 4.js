document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button");

  const initImage = (url) => {
    return fetch(url)
      .then((response) => {
        return response;
      })
      .then((json) => {
        return json;
      })
      .catch((error) => {
        console.error("Error fetching image:", error);
      });
  };

  btn.addEventListener("click", async () => {
    const width = document.querySelector(".first").value;
    const height = document.querySelector(".second").value;
    if (!isNaN(width) && !isNaN(height)) {
      if (width <= 300 && width >= 100 && height <= 300 && height >= 100) {
        const urlImage = `https://dummyimage.com/${width}x${height}/`;
        const img = await initImage(urlImage);
        const imgCont = document.querySelector(".images");
        imgCont.innerHTML = `<img src="${img.url}" />`;
      } else {
        console.log("its not");
      }
    }
  });
});
