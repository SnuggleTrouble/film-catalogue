const arrows = document.querySelectorAll(".arrow");
const filmLists = document.querySelectorAll(".film-list");

// Separates each arrow and film list into separate elements to click/scroll through.
arrows.forEach((arrow, i) => {
  const filmListNumber = filmLists[i].querySelectorAll("img").length;
  let clickCounter = 0;
  arrow.addEventListener("click", () => {
    // Calculates the window size and divide it by the item list images
    const screenSizeRatio = Math.floor(window.innerWidth / 300);
    clickCounter++;
    /* Depending on the window size, the number of times one can click/scroll
    through the list changes so that you'll see complete the list before it resets*/
    if (filmListNumber - (4 + clickCounter) + (4 - screenSizeRatio) >= 0) {
      filmLists[i].style.transform = `translateX(${
        filmLists[i].computedStyleMap().get("transform")[0].x.value - 330
      }px)`;
    } else {
      filmLists[i].style.transform = "translateX(0)";
      clickCounter = 0;
    }
  });
});

// Dark Mode Toggle
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(
  ".container, .film-list-title, .navbar-container, .sidebar, .left-menu-icon, .toggle"
);

ball.addEventListener("click", () => {
  items.forEach(item => {
    item.classList.toggle("active");
  });
  ball.classList.toggle("active");
});
