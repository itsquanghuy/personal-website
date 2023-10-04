const introLayoutElm = document.querySelector(".intro-layout");
const songs = document.getElementById("songs");

function setSongsMarginLeft() {
  const introLayoutElmStyle =
    introLayoutElm.currentStyle || window.getComputedStyle(introLayoutElm);
  const currentMargin = `${
    parseInt(introLayoutElmStyle.marginLeft.replace("px", "")) +
    parseInt(
      introLayoutElmStyle.getPropertyValue("padding-left").replace("px", "")
    )
  }px`;

  songs.style.paddingLeft = currentMargin;
  songs.style.paddingRight = currentMargin;
}

document.addEventListener("DOMContentLoaded", function () {
  setSongsMarginLeft();
});

songs.onscroll = function (evt) {
  document.querySelector(".progress-bar").style.width = `${
    (100 * songs.scrollLeft) / (songs.scrollWidth - songs.clientWidth)
  }%`;
};

window.onresize = function (evt) {
  setSongsMarginLeft();
};
