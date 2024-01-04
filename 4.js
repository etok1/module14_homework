document.addEventListener("DOMContentLoaded", function () {
  const btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    const width = document.querySelector(".first").value;
    const height = document.querySelector(".second").value;
    if (!isNaN(width) && !isNaN(height)) {
      if (width <= 300 && width >= 100 && height <= 300 && height >= 100) {
        const urlImage = `https://dummyimage.com/${width}x${height}/`;

        fetch(urlImage)
          .then((response) => {
            console.log("response", response);
            return response.json();
          })
          .then((json) => {
            const imgCont = document.querySelector(".images");
            const img = createElement("img");
            img.src = URl.createObjectURL(json);
            imgCont.innerHTML = "";
            imgCont.append(img);
          })
          .catch((error) => {
            console.error("Error fetching image:", error);
          });
      } else {
        console.log("its not");
      }
    }
  });
});
