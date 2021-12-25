let renderGoods = (data) => {
  localStorage.setItem("goods", JSON.stringify(data));
  let rowNoGuttersGoods = document.querySelector(".goods");
  rowNoGuttersGoods.innerHTML = "";
  data.forEach((element) => {
    rowNoGuttersGoods.insertAdjacentHTML(
      "beforeend",
      `<div class="col-12 col-md-6 col-lg-4 col-xl-3">
      <div class="card" data-key=${element.id}>
        <div class="card-sale">${element.sale ? "🔥Hot Sale🔥" : ""}</div>
        <div class="card-img-wrapper">
          <span
            class="card-img-top"
            style="
              background-image: url('${element.img}');
            "
          ></span>
        </div>
        <div class="card-body justify-content-between">
          <div class="card-price">${element.price} ₽</div>
          <h5 class="card-title">${element.title}</h5>
          <button class="btn btn-primary">В корзину</button>
        </div>
      </div>
    </div>`
    );
  });
};
export default renderGoods;
