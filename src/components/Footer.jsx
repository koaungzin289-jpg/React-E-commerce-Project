import sofa from "../assets/images/sofa.png";
function Footer() {
  return (
    <section className="footer pt-5">
      <div className="container py-5">
        <img src={sofa} alt="sofa" className="img-fluid" />
        <div className="row">
          <div className="col-lg-8">
            <div className="subscription-form">
              <h5 className="d-flex align-item-center">
                <i className="bi bi-envelope me-2 text-black-50"></i>
                <span className=" text-primary">
                  Subscription to Newsletter
                </span>
              </h5>
              <form action="#" className="row g-3">
                <div className="col-auto">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="col-auto">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="col-auto">
                  <button className="btn btn-primary">
                    <i className="bi bi-send-fill"></i>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="row py-5 mt-5 footer-content">
          <div className="col-lg-4">
            <div className="footer content">
              <h3 className="h-3 text-primary pb-3">Funi.</h3>
              <p className="text-black-50 pb-4">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant
              </p>
              <div className="social-links">
                <a href="#" className="me-2">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-twitter"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="#" className="me-2">
                  <i className="bi bi-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="row justify-content-between pt-5">
              <div className="col-6 col-lg-3">
                <ul>
                  <li>
                    <a href="#">About us</a>
                  </li>
                  <li>
                    <a href="#">Services</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Contact us</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-3">
                <ul>
                  <li>
                    <a href="#">Support</a>
                  </li>
                  <li>
                    <a href="#">Knowledge base</a>
                  </li>
                  <li>
                    <a href="#">Live Chat</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-3">
                <ul>
                  <li>
                    <a href="#">Jobs</a>
                  </li>
                  <li>
                    <a href="#">Our Team</a>
                  </li>
                  <li>
                    <a href="#">Leadership</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-lg-3">
                <ul>
                  <li>
                    <a href="#">Nordic Chair us</a>
                  </li>
                  <li>
                    <a href="#">Kruzo Aero</a>
                  </li>
                  <li>
                    <a href="#">Ergonomic Chair</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright row pt-4">
          <div className="col-lg-6">
            <span className="text-black-50 text-center text-lg-start d-block">
              Copyright &copy;2026. All Rights Reserved. — Designed with love by
              <a href="#">Untree.co</a>
            </span>
          </div>
          <div className="col-lg-6">
            <span className="text-black-50 text-center text-lg-end d-block">
              <a href="#" className="me-3">
                Terms & Conditions
              </a>
              <a href="#"> Privacy Policy</a>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
