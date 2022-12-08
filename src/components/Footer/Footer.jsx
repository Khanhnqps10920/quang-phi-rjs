import "./Footer.scss";
export default function () {
  return (
    <>
      <div id="footer">
        <div className="footer-wraper">
          <div className="container">
            <div className="main-footer">
              <div className="footer-heading">
                <div className="row">
                  <div className="col-lg-6 col-md-6">
                    <p>Sign up now & get 10% OFF:</p>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="col-right-wraper">
                      <input type="Email" placeholder="Enter your email..." />
                      <button>
                        <a href="">Subcribe</a>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="footer-content">
                <div className="row">
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="content-inner">
                      <div className="footer-title">Store</div>
                      <ul className="footer-list">
                        <li>
                          {" "}
                          <a href="">About Us</a>
                        </li>
                        <li>
                          <a href="">Contact</a>
                        </li>
                        <li>
                          <a href="">Store Location</a>
                        </li>
                        <li>
                          <a href="">Careers</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="content-inner">
                      <div className="footer-title">Service</div>
                      <ul className="footer-list">
                        <li>
                          {" "}
                          <a href="">Order tracking</a>
                        </li>
                        <li>
                          <a href="">FAQ’s</a>
                        </li>
                        <li>
                          <a href="">Privacy policy</a>
                        </li>
                        <li>
                          <a href="">Terms & conditions</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="content-inner">
                      <div className="footer-title">Category</div>
                      <ul className="footer-list">
                        <li>
                          {" "}
                          <a href="">Sales product</a>
                        </li>
                        <li>
                          <a href="">Clothes for men</a>
                        </li>
                        <li>
                          <a href="">Clothes for women</a>
                        </li>
                        <li>
                          <a href="">Shoes</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-3 col-md-6 col-6">
                    <div className="content-inner">
                      <div className="footer-title">Contact us</div>
                      <ul className="footer-list">
                        <li>
                          {" "}
                          <a href="">TPHCM</a>
                        </li>
                        <li>
                          <a href="">18/03/02 BT</a>
                        </li>
                        <li>
                          <a href="">+84 964 298 523</a>
                        </li>
                        <li>
                          <a href="">xx.quangphi.2.9@gmail.com</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-author">
            <div className="author-wraper">
              <div className="left-author">
                
              </div>
              <div className="author">
                <p>Made By ****</p>
                <ul className="author-social">
                  <li><a href=""><i className="fa-brands fa-instagram"></i></a></li>
                  <li><a href=""><i className="fa-brands fa-square-twitter"></i></a></li>
                  <li><a href=""><i className="fa-brands fa-facebook"></i></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
