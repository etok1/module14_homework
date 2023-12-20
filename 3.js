const value = document.querySelector("input").value;

function useRequest(url, callback) {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);
  xhr.onload = function () {
    if (xhr.status != 200) {
      console.log("Статус ответа: ", xhr.status);
    } else {
      const result = JSON.parse(xhr.response);
      if (callback) {
        callback(result);
      }
    }
  };

  xhr.onerror = function () {
    console.log("Ошибка! Статус ответа: ", xhr.status);
  };
  xhr.send();
}

const result = document.querySelector(".cards");

function displayCards(apiData) {
  let cards = "";

  apiData.forEach((item) => {
    const card = `
    <div class="card">
        <img
          src="${item.url}"
          class="card-image"
        />
        <p>${item.title}</p>
    </div>
    `;
    cards = cards + card;
  });

  result.innerHTML = cards;
}
if (value < 1 || value > 10) {
  console.log("число вне диапазона от 1 до 10");
} else {
  const btn = document.querySelector("button");
  btn.addEventListener("click", () => {
    useRequest(
      `https://jsonplaceholder.typicode.com/photos?_limit=${value}`,
      displayCards
    );
  });
}
