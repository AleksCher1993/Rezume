let getYear = () => {
  const getYear = document.querySelector("#getYear");
  getYear.innerHTML = new Date().getFullYear();
};
getYear();
