import { Link } from "react-router-dom";

export default function (props) {
  const scrollFilter = () => {
    window.scrollTo(0, 0);
  };
  const {
    fieldCategoryActive,
    fieldBrandActive,
    fieldColorActive,
    fieldSizeActive,
    handleFieldClick,
    setColorProduct,
    setFieldColorActive,
    setSizeProduct,
    setFieldSizeActive,
    setBrandProduct,
    setFieldBrandActive,
  } = props;
  return (
    <>
      <div className="filter filter-categories">
        <div className="title">Categories</div>
        <ul className="list-filter list-categories">
          <li
            className={`filter-item ${
              fieldCategoryActive === "shop" ? "active" : ""
            }`}
          >
            <Link className="item" to="/shop-fashion/shop">
              <h3 className="item-title">All</h3>
            </Link>
          </li>
          <li
            className={`filter-item ${
              fieldCategoryActive === "for-women" ? "active" : ""
            }`}
          >
            <Link className=" item" to="/shop-fashion/for-women">
              <h3 className="item-title">For women</h3>
            </Link>
          </li>
          <li
            className={`filter-item ${
              fieldCategoryActive === "for-man" ? "active" : ""
            }`}
          >
            <Link className=" item" to="/shop-fashion/for-man">
              <h3 className="item-title">For man</h3>
            </Link>
          </li>
          <li
            className={`filter-item ${
              fieldCategoryActive === "hoodies" ? "active" : ""
            }`}
          >
            <Link className=" item" to="/shop-fashion/hoodies">
              <h3 className="item-title">Hoodies</h3>
            </Link>
          </li>
          <li
            className={`filter-item ${
              fieldCategoryActive === "bag" ? "active" : ""
            }`}
          >
            <Link className=" item" to="/shop-fashion/bag">
              <h3 className="item-title">Bags</h3>
            </Link>
          </li>
          <li
            className={`filter-item ${
              fieldCategoryActive === "t-shirt" ? "active" : ""
            }`}
          >
            <Link className=" item" to="/shop-fashion/t-shirt">
              <h3 className="item-title">T-Shirt</h3>
            </Link>
          </li>
          <li
            className={`filter-item ${
              fieldCategoryActive === "sneaker" ? "active" : ""
            }`}
          >
            <Link className=" item" to="/shop-fashion/sneaker">
              <h3 className="item-title">Sneakers</h3>
            </Link>
          </li>
        </ul>
      </div>

      <div className="filter filter-color">
        <div className="title">Filter by Color</div>
        <ul className="list-filter list-color">
          <li
            className={`filter-item ${
              fieldColorActive === "black" ? "active" : ""
            }`}
            onClick={() => {
              scrollFilter();
              handleFieldClick(setColorProduct, setFieldColorActive, "black");
            }}
          >
            <div className="item">
              <span className="color black"></span>
              <h3 className="item-title">Black</h3>
            </div>
          </li>
          <li
            className={`filter-item ${
              fieldColorActive === "blue" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setColorProduct, setFieldColorActive, "blue")
            }
          >
            <div className="item">
              <span className="color blue"></span>
              <h3 className="item-title">Blue</h3>
            </div>
          </li>
          <li
            className={`filter-item ${
              fieldColorActive === "brown" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setColorProduct, setFieldColorActive, "brown")
            }
          >
            <div className="item">
              <span className="color brown"></span>
              <h3 className="item-title">Brown</h3>
            </div>
          </li>
          <li
            className={`filter-item ${
              fieldColorActive === "green" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setColorProduct, setFieldColorActive, "green")
            }
          >
            <div className="item">
              <span className="color green"></span>
              <h3 className="item-title">Green</h3>
            </div>
          </li>
          <li
            className={`filter-item ${
              fieldColorActive === "grey" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setColorProduct, setFieldColorActive, "grey")
            }
          >
            <div className="item">
              <span className="color grey"></span>
              <h3 className="item-title">Grey</h3>
            </div>
          </li>
          <li
            className={`filter-item ${
              fieldColorActive === "red" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setColorProduct, setFieldColorActive, "red")
            }
          >
            <div className="item">
              <span className="color red"></span>
              <h3 className="item-title">Red</h3>
            </div>
          </li>
          <li
            className={`filter-item ${
              fieldColorActive === "yellow" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setColorProduct, setFieldColorActive, "yellow")
            }
          >
            <div className="item">
              <span className="color yellow"></span>
              <h3 className="item-title">Yellow</h3>
            </div>
          </li>
        </ul>
      </div>

      <div className="filter filter-size">
        <div className="title">Filter by size</div>
        <ul className="list-filter list-size">
          <li
            className={` filter-item ${
              fieldSizeActive === 3.5 ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setSizeProduct, setFieldSizeActive, 3.5)
            }
          >
            <h3 className="item-title">3.5</h3>
          </li>
          <li
            className={` filter-item ${fieldSizeActive === 4 ? "active" : ""}`}
            onClick={() =>
              handleFieldClick(setSizeProduct, setFieldSizeActive, 4)
            }
          >
            <h3 className="item-title">4</h3>
          </li>
          <li
            className={` filter-item ${
              fieldSizeActive === 4.5 ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setSizeProduct, setFieldSizeActive, 4.5)
            }
          >
            <h3 className="item-title">4.5</h3>
          </li>
          <li
            className={` filter-item ${fieldSizeActive === 5 ? "active" : ""}`}
            onClick={() =>
              handleFieldClick(setSizeProduct, setFieldSizeActive, 5)
            }
          >
            <h3 className="item-title">5</h3>
          </li>
          <li
            className={` filter-item ${
              fieldSizeActive === 5.5 ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setSizeProduct, setFieldSizeActive, 5.5)
            }
          >
            <h3 className="item-title">5.5</h3>
          </li>
          <li
            className={` filter-item ${fieldSizeActive === 6 ? "active" : ""}`}
            onClick={() =>
              handleFieldClick(setSizeProduct, setFieldSizeActive, 6)
            }
          >
            <h3 className="item-title">6</h3>
          </li>
        </ul>
      </div>

      <div className="filter filter-brand">
        <div className="title">Filter by brand</div>
        <ul className="list-filter list-brand">
          <li
            className={` filter-item ${
              fieldBrandActive === "ZARA" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setBrandProduct, setFieldBrandActive, "ZARA")
            }
          >
            <h3 className="item-title">ZARA</h3>
          </li>
          <li
            className={` filter-item ${
              fieldBrandActive === "D&G" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setBrandProduct, setFieldBrandActive, "D&G")
            }
          >
            <h3 className="item-title">D&G</h3>
          </li>
          <li
            className={` filter-item ${
              fieldBrandActive === "ESPRIT" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setBrandProduct, setFieldBrandActive, "ESPRIT")
            }
          >
            <h3 className="item-title">ESPRIT</h3>
          </li>
          <li
            className={` filter-item ${
              fieldBrandActive === "H&M" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setBrandProduct, setFieldBrandActive, "H&M")
            }
          >
            <h3 className="item-title">H&M</h3>
          </li>
          <li
            className={` filter-item ${
              fieldBrandActive === "PUMA" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setBrandProduct, setFieldBrandActive, "PUMA")
            }
          >
            <h3 className="item-title">PUMA</h3>
          </li>
          <li
            className={` filter-item ${
              fieldBrandActive === "BOSS" ? "active" : ""
            }`}
            onClick={() =>
              handleFieldClick(setBrandProduct, setFieldBrandActive, "BOSS")
            }
          >
            <h3 className="item-title">BOSS</h3>
          </li>
        </ul>
      </div>
    </>
  );
}
