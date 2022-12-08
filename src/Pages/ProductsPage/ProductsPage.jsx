import { useEffect, useState } from "react";
import { Pagination } from "../../components/Pagination/Pagination";
import { useParams } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../../SCSS/ProductsPage.scss";
import { myAxios } from "../../Service/axios";
import Filter from "../../components/Filter/Filter";
import { handleOpen } from "../../Service/utils";

export default function () {
  const params = useParams();
  const [fieldCategoryActive, setFieldCategoryActive] = useState(
    params.category
  );
  const [loading, setLoading] = useState(false);

  const [asideFilterActive, setAsideFilterActive] = useState(false);

  const [colorProduct, setColorProduct] = useState(null);
  const [sizeProduct, setSizeProduct] = useState(null);
  const [brandProduct, setBrandProduct] = useState(null);

  const [fieldColorActive, setFieldColorActive] = useState();
  const [fieldSizeActive, setFieldSizeActive] = useState();
  const [fieldBrandActive, setFieldBrandActive] = useState();

  const handleFieldClick = (setField, setFieldColorActive, key) => {
    setField(key);
    setFieldColorActive(key);
  };


  const handleClearFilter = () => {
    setColorProduct(null);
    setSizeProduct(null);
    setBrandProduct(null);
    setFieldColorActive(null);
    setFieldSizeActive(null);
    setFieldBrandActive(null);
  };

  useEffect(() => {
    handleClearFilter();
    setFieldCategoryActive(params.category);
  }, [params]);
  const [listShow, setListShow] = useState([]);
  const [listToFilter, setListToFilter] = useState([]);

  const handleDataFilterProduct = async () => {
    try {
      setLoading(true);
      const queryParams = {
        search: params.category,
      };
      const dataValue = await myAxios.get(`products`, {
        params: queryParams,
      });
      setLoading(false);
      setListToFilter(dataValue.data);
      if (!colorProduct && !sizeProduct && !brandProduct) {
        setListShow(dataValue.data);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const handleFilter = () => {
    if (colorProduct || sizeProduct || brandProduct) {
      const listFilter = [...listToFilter].filter((element) => {
        if (colorProduct) {
          return brandProduct
            ? sizeProduct
              ? element.color.includes(colorProduct) &&
                element.brand.includes(brandProduct) &&
                element.size.includes(sizeProduct)
              : element.color.includes(colorProduct) &&
                element.brand.includes(brandProduct)
            : sizeProduct
            ? element.color.includes(colorProduct) &&
              element.size.includes(sizeProduct)
            : element.color.includes(colorProduct);
        }
        return brandProduct
          ? sizeProduct
            ? element.brand.includes(brandProduct) &&
              element.size.includes(sizeProduct)
            : element.brand.includes(brandProduct)
          : sizeProduct
          ? element.size.includes(sizeProduct)
          : "";
      });
      setListShow(listFilter);
      return;
    }
    setListShow(listToFilter);
  };
  useEffect(() => {
    handleDataFilterProduct();
    handleFilter();
    setAsideFilterActive(false);
  }, [params, colorProduct, sizeProduct, brandProduct]);
  return (
    <div id="products-page">
      <div className="container-fluit">
        <Header/>
        <div id="banner">
          <div className="banner-inner">
            <h1>{params.category}</h1>
          </div>
        </div>
        <div id="main">
          <div className="row">
            <div className="main-wraper">
              <div className="col-lg-9 col-md-12 col-12">
                <div className="left-wraper">
                  <div className="panel">
                    <div className="panel-wraper">
                      <div className="top-panel">
                        <button
                          className="clear-filter"
                          onClick={handleClearFilter}
                        >
                          Clear Filter
                        </button>
                        <button
                          onClick={() => {
                            handleOpen(asideFilterActive, setAsideFilterActive);
                          }}
                          className="show-filter"
                        >
                          <i className="fa-solid fa-sliders"></i>
                          <span>Show Fillter</span>
                        </button>
                      </div>

                      <div className="curent-filter">
                        <ul className="curren-list">
                          <li
                            className={`current-item ${
                              colorProduct ? "active" : ""
                            }`}
                          >
                            <p>{colorProduct}</p>
                            <div
                              className="remove-filter"
                              onClick={() => {
                                setColorProduct(null);
                                setFieldColorActive(null);
                              }}
                            >
                              <i className="fa-solid fa-x"></i>
                            </div>
                          </li>
                          <li
                            className={`current-item ${
                              sizeProduct ? "active" : ""
                            }`}
                          >
                            <p>{sizeProduct}</p>
                            <div
                              className="remove-filter"
                              onClick={() => {
                                setSizeProduct(null);
                                setFieldSizeActive(null);
                              }}
                            >
                              <i className="fa-solid fa-x"></i>
                            </div>
                          </li>
                          <li
                            className={`current-item ${
                              brandProduct ? "active" : ""
                            }`}
                          >
                            <p>{brandProduct}</p>
                            <div
                              className="remove-filter"
                              onClick={() => {
                                setBrandProduct(null);
                                setFieldBrandActive(null);
                              }}
                            >
                              <i className="fa-solid fa-x"></i>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div
                      className={`filter-aside ${
                        asideFilterActive ? "active" : ""
                      }`}
                    >
                      <div className="overlay"></div>
                      <div className="filter-aside-close"></div>
                      <div className="filter-aside-content">
                        <Filter
                          fieldCategoryActive={fieldCategoryActive}
                          fieldBrandActive={fieldBrandActive}
                          fieldColorActive={fieldColorActive}
                          fieldSizeActive={fieldSizeActive}
                          handleFieldClick={handleFieldClick}
                          setColorProduct={setColorProduct}
                          setFieldColorActive={setFieldColorActive}
                          setSizeProduct={setSizeProduct}
                          setFieldSizeActive={setFieldSizeActive}
                          setBrandProduct={setBrandProduct}
                          setFieldBrandActive={setFieldBrandActive}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="content">
                    <div className="row">
                      <Pagination list={listShow} loading={loading} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-3">
                <div className="right-wraper">
                  <Filter
                    fieldCategoryActive={fieldCategoryActive}
                    fieldBrandActive={fieldBrandActive}
                    fieldColorActive={fieldColorActive}
                    fieldSizeActive={fieldSizeActive}
                    handleFieldClick={handleFieldClick}
                    setColorProduct={setColorProduct}
                    setFieldColorActive={setFieldColorActive}
                    setSizeProduct={setSizeProduct}
                    setFieldSizeActive={setFieldSizeActive}
                    setBrandProduct={setBrandProduct}
                    setFieldBrandActive={setFieldBrandActive}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
