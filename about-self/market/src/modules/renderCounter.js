const renderCounter = () => {
  let counter = document.querySelector(".counter");
  const card = localStorage.getItem("card")
    ? JSON.parse(localStorage.getItem("card"))
    : [];
  let length = card.length;
  counter.innerHTML = length;
};
export default renderCounter;
