import { useDispatch, } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart, removeFromCart } from "../../Redux/Reducers/cartSlice";

export default function (props) {
  const { product } = props;

  const dispath = useDispatch();
  const handleAddToCart = (product,quantity) => {
    dispath(addToCart({product,quantity}));
  };
  const handleRemoveCartItem = (product) => {
    dispath(removeFromCart(product));
  };

  const navigate = useNavigate();
  const handleNavigate = (id) => {
    navigate(`/product/${id}`);
  };
  return (
    <>
      <div
        onClick={() => {
          handleNavigate(product.id);
        }}
        className="product"
      >
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleAddToCart(product,1);
          }}
          className="add-to-cart"
        >
          <i className="fa-solid fa-cart-plus"></i>
        </div>
        <div
          onClick={(e) => {
            e.stopPropagation();
            handleRemoveCartItem(product);
          }}
          className="remove-from-cart"
        >
          <i className="fa-solid fa-trash"></i>
        </div>
        <div className="product-img">
          <img src="https://i.postimg.cc/bv7y3M3Q/hoodies-1.jpg" alt="" />
        </div>
        <div className="product-info">
          <div className="product-categories">
            {/* {product.category.map((element) => {
              return (
                <>
                  <span>{element}</span>
                </>
              );
            })} */}
          </div>
          <span className="product-name">{product.productName}</span>
          <div className="product-price">
            <div className="product-quantity">
              {product.quantity}
              <span>x</span>
            </div>
            <div className="old-price">
              <span>$</span>
              {product.productOldPrice}
            </div>
            <div className="price">
              <span>$</span>
              {product.productPrice}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
