import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import { addToCart } from "../../Redux/Reducers/cartSlice";
import "../../SCSS/DetailsPage.scss";
import { myAxios } from "../../Service/axios";
import uuid from "react-uuid";

export default function () {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const dispath = useDispatch();

  const handleFetchData = async () => {
    try {
      const data = await myAxios.get(`products/${params.id}`);
      setProduct(data.data);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    handleFetchData();
  }, [params.id]);

  const handleAddToCart = (product, quantity) => {
    if (quantity) {
      dispath(addToCart({ product, quantity }));
    }
  };

  const [listReviews, setListReviews] = useState([
    {
      date: "1/1/2022",
      name: "ADMIN",
      rate: "*****",
      comment:
        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus perspiciatis recusandae consequuntur rem voluptate architecto fugit eligendi odit iure. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur repellendus perspiciatis recusandae consequuntur rem voluptate architecto fugit eligendi odit iure.",
    },
  ]);
  const [nameReviewer, setNameReviewer] = useState();
  const [rating, setRating] = useState();
  const [comment, setComment] = useState();

  const handleAddReviews = () => {
    if (nameReviewer && comment) {
      const listMiddle = [...listReviews];
      const currDate = new Date();
      console.log(currDate);
      const newReview = {
        date: currDate,
        name: nameReviewer,
        rate: rating,
        comment: comment,
      };
      listMiddle.push(newReview);
      setListReviews(listMiddle);
      setNameReviewer("");
      setRating("");
      setComment("");
      return;
    }
    return;
  };

  console.log("listRV", listReviews);

  return (
    <div id="details-page">
      <div className="container-fluit">
        <Header />
        {product ? (
          <div className="main">
            <div className="container">
              <div className="row">
                <div className="product-details">
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="product-gallery">
                      <Tabs>
                        <TabPanel>
                          <img
                            src="https://i.postimg.cc/bv7y3M3Q/hoodies-1.jpg"
                            alt=""
                          />
                        </TabPanel>
                        <TabPanel>
                          <img
                            src="https://i.postimg.cc/qMw741vT/hoodies-2.jpg"
                            alt=""
                          />
                        </TabPanel>
                        <TabPanel>
                          <img
                            src="https://i.postimg.cc/7ZLZ6S5T/hoodies-2-1.jpg"
                            alt=""
                          />
                        </TabPanel>

                        <TabList>
                          <Tab>
                            <img
                              src="https://i.postimg.cc/bv7y3M3Q/hoodies-1.jpg"
                              alt=""
                            />
                          </Tab>
                          <Tab>
                            <img
                              src="https://i.postimg.cc/qMw741vT/hoodies-2.jpg"
                              alt=""
                            />
                          </Tab>
                          <Tab>
                            <img
                              src="https://i.postimg.cc/7ZLZ6S5T/hoodies-2-1.jpg"
                              alt=""
                            />
                          </Tab>
                        </TabList>
                      </Tabs>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6 col-12">
                    <div className="product-content">
                      <div className="product-info">
                        <div className="title">
                          <h1>{product.productName}</h1>
                        </div>
                        <div className="product-categories">
                          {product.category.map((element) => {
                            return <span key={uuid()}>{element}</span>;
                          })}
                        </div>
                        <div className="product-rating">
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                          <i className="fa-regular fa-star"></i>
                        </div>
                        <div className="product-price">
                          <span>$</span>
                          {product.productPrice}
                        </div>
                        <div className="product-short-description">
                          <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing
                            elit. Dignissimos reprehenderit ipsa sapiente
                            corrupti error magni perferendis quasi assumenda est
                            repellendus?
                          </p>
                        </div>
                      </div>

                      <div className="product-attributes">
                        <div className="product-color">
                          <p>Color:</p>
                          <span
                            style={{ backgroundColor: `${product.color}` }}
                          ></span>
                        </div>
                        <div className="product-size">
                          {product.size.map((element) => {
                            return <span key={uuid()}>{element}</span>;
                          })}
                        </div>
                        <div className="add-to-cart">
                          <div className="product-quantity">
                            <button
                              onClick={() => {
                                setQuantity(quantity > 0 ? quantity - 1 : 0);
                              }}
                              className="minus"
                            >
                              -
                            </button>
                            <span>{quantity > 0 ? quantity : 0}</span>
                            <button
                              onClick={() => {
                                setQuantity(quantity + 1);
                              }}
                              className="plus"
                            >
                              +
                            </button>
                          </div>
                          <button
                            onClick={() => {
                              handleAddToCart(product, quantity);
                            }}
                          >
                            ADD TO CART
                          </button>
                        </div>
                      </div>

                      <div className="product-description">
                        <h1 className="title">Description</h1>
                        <div className="content">
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Consequatur, voluptas iure. Optio cumque, modi
                            necessitatibus recusandae dolor, error quod incidunt
                            exercitationem quidem nam eveniet, odit id
                            consequuntur amet asperiores eaque!
                          </p>
                          <p className="brand">
                            <img
                              src="https://i.postimg.cc/VL9CGj6b/product-page-1-1.jpg"
                              alt=""
                            />
                          </p>
                          <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Rerum harum vitae magni quam odit suscipit
                            possimus expedita. Quia voluptatem velit eaque
                            maxime obcaecati nobis exercitationem animi ullam
                            quidem! Dolor nihil recusandae facilis veritatis
                            earum ipsam nam consectetur distinctio officiis id,
                            quas quo accusamus impedit illo ea beatae repellat
                            minima atque ullam harum? Culpa nam totam maxime,
                            vel maiores exercitationem odit odio delectus
                            deserunt nihil itaque fugiat? Magnam consequatur
                            esse veniam? Soluta, molestias optio mollitia
                            doloribus distinctio corporis voluptas nam amet sit
                            qui ipsa quod repudiandae accusantium, veniam autem
                            voluptatum culpa atque voluptatibus laboriosam
                            perspiciatis aliquam. Quaerat asperiores recusandae
                            dolorum amet.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-reviews">
                  <div className="row">
                    <div className="reviews-wraper">
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="comments-wraper">
                          <div className="title">
                            <span>{listReviews.length}</span>
                            <span>REVIEW FOR</span>
                            <span>{product.productName}</span>
                          </div>
                          <div className="comments-main">
                            {listReviews.map((element) => {
                              return (
                                <div key={uuid()} className="comment-element">
                                  <div className="reviewer">
                                    <img
                                      src="https://i.postimg.cc/HLZw6TXn/th.jpg"
                                      alt=""
                                    />
                                    <div className="info">
                                      <div className="name">{element.name}</div>
                                      <div className="rating">*****</div>
                                    </div>
                                  </div>
                                  <div className="content">
                                    <div className="date"></div>
                                    <div className="comment">
                                      {element.comment}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6 col-12">
                        <div className="form-reviews">
                          <div className="title">
                            <h1> YOUR REVIEW</h1>
                          </div>
                          <div className="form-wraper">
                            <form action="">
                              <div className="form-reviewer">
                                <p>Your name:</p>
                                <input
                                  onChange={(e) => {
                                    setNameReviewer(e.target.value);
                                  }}
                                  value={nameReviewer}
                                  type="text"
                                  placeholder=""
                                />
                              </div>
                              <div className="form-rating">
                                <p>Your rating:</p>
                                <ul className="rating-stars">
                                  <li className="star">
                                    <i className="fa-regular fa-star"></i>
                                  </li>
                                  <li className="star">
                                    <i className="fa-regular fa-star"></i>
                                  </li>
                                  <li className="star">
                                    <i className="fa-regular fa-star"></i>
                                  </li>
                                  <li className="star">
                                    <i className="fa-regular fa-star"></i>
                                  </li>
                                  <li className="star">
                                    <i className="fa-regular fa-star"></i>
                                  </li>
                                </ul>
                              </div>
                              <div className="form-comment">
                                <p>Your comment:</p>
                                <textarea
                                  onChange={(e) => {
                                    setComment(e.target.value);
                                  }}
                                  value={comment}
                                  name=""
                                  id=""
                                  cols="30"
                                  rows="10"
                                ></textarea>
                              </div>
                            </form>
                            <button
                              onClick={() => handleAddReviews()}
                              className="form-submit"
                            >
                              SUBMIT
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <Footer />
      </div>
    </div>
  );
}
