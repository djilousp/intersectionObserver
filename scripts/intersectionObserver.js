const header = document.querySelector("header");
const mainView = document.querySelector(".main-view");
const options = {
  rootMargin: "-80% 0px 0px 0px",
};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) {
      header.classList.add("nav-scrolled");
    } else {
      header.classList.remove("nav-scrolled");
    }
  });
},
options);

sectionOneObserver.observe(mainView);
