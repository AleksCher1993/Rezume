import getDate from "./getDate";
import renderGoods from "./renderGoods";
import {
  searchFilter,
  catalogFilter,
  priceFilter,
  hotSaleFilter,
} from "./filter";
const search = () => {
  let searchWrapperInput = document.querySelector(".search-wrapper_input");
  let catalog = document.querySelector(".catalog");
  let catalogList = catalog.querySelector("ul");
  let min = document.querySelector("#min");
  let max = document.querySelector("#max");
  const discountCheckbox = document.querySelector("#discount-checkbox");
  const filterCheckCheckmark = document.querySelector(
    ".filter-check_checkmark"
  );
  searchWrapperInput.addEventListener("input", (event) => {
    const value = event.target.value;
    getDate().then((date) =>
      renderGoods(
        searchFilter(hotSaleFilter(date, discountCheckbox.checked), value)
      )
    );
  });

  catalogList.addEventListener("click", (e) => {
    let value = e.target;
    if (value.closest("li")) {
      getDate().then((date) =>
        renderGoods(
          catalogFilter(
            hotSaleFilter(date, discountCheckbox.checked),
            value.innerHTML
          )
        )
      );
    }
  });

  min.addEventListener("input", () => {
    getDate().then((data) =>
      renderGoods(
        priceFilter(
          hotSaleFilter(data, discountCheckbox.checked),
          +min.value,
          +max.value
        )
      )
    );
  });
  max.addEventListener("input", () => {
    getDate().then((data) =>
      renderGoods(
        priceFilter(
          hotSaleFilter(data, discountCheckbox.checked),
          +min.value,
          +max.value
        )
      )
    );
  });
  discountCheckbox.addEventListener("change", () => {
    if (discountCheckbox.checked) {
      filterCheckCheckmark.classList.add("checked");
    } else {
      filterCheckCheckmark.classList.remove("checked");
    }
    getDate().then((data) =>
      renderGoods(
        priceFilter(
          hotSaleFilter(data, discountCheckbox.checked),
          +min.value,
          +max.value
        )
      )
    );
  });
};
export default search;
