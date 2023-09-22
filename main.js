document.addEventListener("DOMContentLoaded", function () {
  fetch(
    "https://raw.githubusercontent.com/vuhuycto/personal-website/main/basic.json"
  )
    .then((data) => data.json())
    .then((json) => {
      document.querySelector(".profile__bio").textContent = json["bio"];
    })
    .catch(() => {});
});
