const animation = () => {
  const sectionSkills = document.querySelector(".section__skills");
  const sectionWorks = document.querySelector("#section_works");

  window.addEventListener("scroll", function () {
    if (this.window.outerWidth < 576) {
      sectionSkills.style.display = "block";
      sectionWorks.style.display = "block";
    } else {
      if (this.scrollY >= 180) {
        sectionSkills.style.display = "block";
      }
      if (this.scrollY >= 400) {
        console.log(this.pageYOffset);
        sectionWorks.style.display = "block";
      }
    }
  });
};
animation();
