import getDate from "./getDate";
import renderGoods from "./renderGoods";

const load = () => {
  getDate().then((res) => {
    return renderGoods(res);
  });
};
export default load;
