import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  checkElementActive,
  handleActiveElement,
  handleOpen,
} from "../../Service/utils";
import "./Header.scss";
import { myAxios } from "../../Service/axios";
import Loading from "../Loading/Loading";
import { useSelector } from "react-redux";
import Product from "../Product/Product";
import { myContext } from "../Context/Context";
import uuid from "react-uuid";

export default function () {
  const Context = useContext(myContext);
  const [searchText, setSearchText] = useState([]);
  const [listSearch, setListSearch] = useState([]);
  const [searchOpen, setSearchOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [openMenuMobile, setOpenMenumobile] = useState(false);
  const [listMenuActive, setListMenuActive] = useState([]);

  const cartState = useSelector((state) => state.cart.cart);
  const totalState = useSelector((state) => state.cart.subTotal);

  const handleSearchDataAPI = async () => {
    try {
      if (searchText.length !== 0) {
        setLoading(true);

        const queryParams = {
          search: searchText,
        };
        const dataValue = await myAxios.get("/products", {
          params: queryParams,
        });
        setListSearch(dataValue.data);
        setLoading(false);

        return;
      }
      setListSearch([]);
    } catch (error) {}
  };

  useEffect(() => {
    const timeCallAPI = setTimeout(handleSearchDataAPI, 500);
    return () => {
      clearTimeout(timeCallAPI);
    };
  }, [searchText]);
  return (
    <>
      <div id="header" className={`${searchOpen ? "fixed" : ""}`}>
        <div className="header-wraper">
          <div className="header-left">
            <div className="header-logo">
              <NavLink to={"/"} end>
                <img src="https://i.postimg.cc/0yk7sMmJ/logo.png" alt="" />
              </NavLink>
            </div>
            <div className="header-menu">
              <div
                onClick={() => {
                  handleOpen(openMenuMobile, setOpenMenumobile);
                }}
                className="icon"
              >
                <i className="fa-solid fa-bars"></i>
              </div>
              <div className={`menu-mobile ${openMenuMobile ? "active" : ""}`}>
                <div className="overlay"></div>
                <div className="menu-inner">
                  <div
                    onClick={() => {
                      setOpenMenumobile(false);
                    }}
                    className="close-button"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <ul className="menu-list">
                    <li>
                      <div className="item-inner active">
                        <Link to={"/"} end>
                          Home
                        </Link>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`item-inner ${
                          checkElementActive(listMenuActive, "1")
                            ? "active"
                            : ""
                        }`}
                      >
                        <Link to={"/shop-fashion/shop"}>Products Page</Link>
                      </div>
                      <div
                        className={`sub-list-menu ${
                          checkElementActive(listMenuActive, "1")
                            ? "active"
                            : ""
                        }`}
                      ></div>
                    </li>
                    <li>
                      <div
                        className={`item-inner ${
                          checkElementActive(listMenuActive, "2")
                            ? "active"
                            : ""
                        }`}
                      >
                        <span>Categories</span>
                        <i
                          id="2"
                          onClick={(e) => {
                            handleActiveElement(
                              listMenuActive,
                              setListMenuActive,
                              e.target.id
                            );
                          }}
                          className={`fa-solid fa-angle-right ${
                            checkElementActive(listMenuActive, "2")
                              ? "active"
                              : ""
                          } `}
                        ></i>
                      </div>

                      <div
                        className={`sub-list-menu ${
                          checkElementActive(listMenuActive, "2")
                            ? "active"
                            : ""
                        }`}
                      >
                        <li>
                          <Link to={"/shop-fashion/hoodies"} end>
                            Hoodies
                          </Link>
                        </li>
                        <li>
                          <Link to={"/shop-fashion/sneaker"} end>
                            Sneakers
                          </Link>
                        </li>
                        <li>
                          <Link to={"/shop-fashion/t-shirt"} end>
                            T-Shirt
                          </Link>
                        </li>
                        <li>
                          <Link to={"/shop-fashion/bag"} end>
                            Bags
                          </Link>
                        </li>
                      </div>
                    </li>
                    <li>
                      <div
                        className={`item-inner ${
                          checkElementActive(listMenuActive, "3")
                            ? "active"
                            : ""
                        }`}
                      >
                        <span>Blog</span>
                        <i
                          id="3"
                          onClick={(e) => {
                            handleActiveElement(
                              listMenuActive,
                              setListMenuActive,
                              e.target.id
                            );
                          }}
                          className={`fa-solid fa-angle-right ${
                            checkElementActive(listMenuActive, "3")
                              ? "active"
                              : ""
                          } `}
                        ></i>
                      </div>

                      <div
                        className={`sub-list-menu ${
                          checkElementActive(listMenuActive, "3")
                            ? "active"
                            : ""
                        }`}
                      >
                        <li>
                          <a href="">Our Blog</a>
                        </li>
                        <li>
                          <a href="">Blog Post</a>
                        </li>
                        <li>
                          <a href="">More Layouts</a>
                        </li>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="header-right">
            <ul className="header-list">
              <li className="list-item">
                <NavLink className="list-link" to={"/"} end>
                  Home
                </NavLink>
                <ul className="sub-list"></ul>
              </li>
              <li className="list-item">
                <NavLink to={"/shop-fashion/shop"} className="list-link" end>
                  Products Page
                </NavLink>
                <ul className="sub-list"></ul>
              </li>
              <li className="list-item categories">
                <p className="list-link ">Categories</p>
                <div className="nav-category">
                  <div className="container">
                    <div className="row h-100">
                      <div className="category-wraper h-100">
                        <div className="col col-lg-3">
                          <div className="category-inner">
                            <div className="title">Popular Products</div>
                            <div className="content popular">
                              <div className="content-wraper">
                                {Context.popularProduct.map((element) => {
                                  return (
                                    <Product key={uuid()} product={element} />
                                  );
                                })}
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col col-lg-3">
                          <div className="category-inner">
                            <div className="title">Style for Everybody</div>
                            <div className="content style">
                              <div className="content-wraper">
                                <div className="content-element">
                                  <img
                                    src="https://i.postimg.cc/fy1RSptM/mega-menu-2.jpg"
                                    alt=""
                                  />
                                  <Link
                                    className="element-link"
                                    to={"/shop-fashion/for-man"}
                                    end
                                  >
                                    For Man
                                  </Link>
                                </div>
                                <div className="content-element">
                                  <img
                                    src="https://i.postimg.cc/Y99rnMQp/mega-menu-3.jpg"
                                    alt=""
                                  />
                                  <Link
                                    className="element-link"
                                    to={"/shop-fashion/for-women"}
                                  >
                                    For Woman
                                  </Link>
                                </div>
                                <div className="content-element">
                                  <img
                                    src="https://i.postimg.cc/zfDHNmTQ/mega-menu-1.jpg"
                                    alt=""
                                  />
                                  <Link
                                    className="element-link"
                                    to={"/shop-fashion/shop"}
                                  >
                                    All Products
                                  </Link>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col col-lg-3">
                          <div className="category-inner">
                            <div className="title">Top Brands</div>
                            <div className="content brands">
                              <div className="row">
                                <div className="content-wraper">
                                  <div className="col-lg-4">
                                    <div className="content-element">
                                      <img
                                        src="https://codex-themes.com/thegem/sites/shop-creative-fashion/wp-content/uploads/2022/07/1.svg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="content-element">
                                      <img
                                        src="https://codex-themes.com/thegem/sites/shop-creative-fashion/wp-content/uploads/2022/06/3.svg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                  <div className="col-lg-4">
                                    <div className="content-element">
                                      <img
                                        src="https://codex-themes.com/thegem/sites/shop-creative-fashion/wp-content/uploads/2022/06/5.svg"
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="row">
                                <div className="content-wraper">
                                  <div className="col-lg-4">
                                    <img
                                      src="https://codex-themes.com/thegem/sites/shop-creative-fashion/wp-content/uploads/2022/06/6.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-lg-4">
                                    <img
                                      src="https://codex-themes.com/thegem/sites/shop-creative-fashion/wp-content/uploads/2022/06/7.svg"
                                      alt=""
                                    />
                                  </div>
                                  <div className="col-lg-4">
                                    <img
                                      src="https://codex-themes.com/thegem/sites/shop-creative-fashion/wp-content/uploads/2022/06/8.svg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col col-lg-3">
                          <div className="category-inner">
                            <div className="title">On Sale</div>
                            <div className="content sale">
                              <div className="content-wraper">
                                {Context.popularProduct.map((element) => {
                                  return (
                                    <Product key={uuid()} product={element} />
                                  );
                                })}
                              </div>
                              <Link
                                className="sale-link"
                                to="/shop-fashion/shop"
                              >
                                All Sale Products
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li className="list-item">
                <a href="" className="list-link">
                  Blog
                </a>
                <ul className="sub-list"></ul>
              </li>
            </ul>
            <div className="header-end">
              <div className="header-search">
                <i
                  onClick={() => {
                    handleOpen(searchOpen, setSearchOpen);
                  }}
                  className={`fa-solid fa-magnifying-glass ${
                    searchOpen ? "unactive" : ""
                  }`}
                ></i>
                <div className={`search-content ${searchOpen ? "active" : ""}`}>
                  <input
                    value={searchText}
                    onChange={(e) => {
                      setLoading(true);
                      setSearchText(e.target.value);
                    }}
                    type="text"
                    placeholder="Start typing to Search..."
                  />
                  <div
                    onClick={() => {
                      setSearchText([]);
                      setListSearch([]);
                      setSearchOpen(false);
                    }}
                    className="search-close"
                  >
                    <i className="fa-solid fa-xmark"></i>
                  </div>
                  <div className="top-search">
                    <p>Top Searchs:</p>
                    <ul>
                      <li
                        onClick={() => {
                          setLoading(true);
                          setSearchText("Hoodies");
                        }}
                      >
                        Hoodies
                      </li>
                      <li
                        onClick={() => {
                          setLoading(true);
                          setSearchText("T-Shirt");
                        }}
                      >
                        T-Shirt
                      </li>
                      <li
                        onClick={() => {
                          setLoading(true);
                          setSearchText("Sneakers");
                        }}
                      >
                        Sneakers
                      </li>
                    </ul>
                  </div>
                  <div className="search-reasul">
                    {searchText == 0 ? (
                      ""
                    ) : loading ? (
                      <Loading />
                    ) : listSearch.length === 0 ? (
                      <img src="https://i.postimg.cc/CMZZ5P6q/empty-state.webp" />
                    ) : (
                      <div className="result-wraper">
                        {listSearch.map((element) => {
                          return (
                            <>
                              <div
                                key={uuid()}
                                className="col-lg-2 col-md-3 col-6"
                              >
                                <Product product={element} />;
                              </div>
                            </>
                          );
                        })}
                        <div className="search-end">NOTHING ELSE</div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              <div className="header-cart">
                <i className="fa-solid fa-cart-shopping"></i>
                <div className="cart-wraper">
                  <div className="cart-inner">
                    {cartState.length ? (
                      cartState.map((element) => {
                        return <Product key={uuid()} product={element} />;
                      })
                    ) : (
                      <img
                        src="https://i.postimg.cc/CMZZ5P6q/empty-state.webp"
                        alt=""
                      />
                    )}
                  </div>
                  <div className="cart-total">
                    <p>Subtotal: </p>
                    <span>
                      $<span>{totalState}</span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
