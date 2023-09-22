document.addEventListener("DOMContentLoaded", function () {
  fetch("/basic.json")
    .then((data) => data.json())
    .then((json) => {
      document.querySelector(".profile__bio").textContent = json["bio"];
    })
    .catch(() => {});
});
