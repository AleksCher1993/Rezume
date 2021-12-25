const nav = () => {
  let navBurgerBtn = document.getElementById("nav__burder__button");
  let navLink = document.getElementById("nav__link");
  let isNavOpen = false;

  navLink.addEventListener("click", (e) => {
    let t = e.target;
    let a = navLink.querySelectorAll("a");

    if (t.closest("a")) {
      a.forEach((elem) => {
        elem.classList.remove("active");
      });
      t.classList.add("active");
    }
  });

  navBurgerBtn.addEventListener("click", () => {
    isNavOpen ? (isNavOpen = false) : (isNavOpen = true);

    if (isNavOpen) {
      navLink.style.display = "flex";
      // navLink.classList.remove("animate__up__navbar");
      // navLink.classList.add("animate__down__navbar");
      navLink.classList.remove("pullUp");
      navLink.classList.add("pullDown");
    } else {
      //   navLink.classList.remove("animate__down__navbar");
      //   navLink.classList.add("animate__up__navbar");
      navLink.classList.remove("pullDown");
      navLink.classList.add("pullUp");
      setTimeout(() => {
        navLink.style.display = "";
      }, 450);
    }
  });
};
nav();
