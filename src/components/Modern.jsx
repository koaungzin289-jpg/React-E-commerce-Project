import grid1 from "../assets/images/img-grid-1.jpg";
import grid2 from "../assets/images/img-grid-2.jpg";
import grid3 from "../assets/images/img-grid-3.jpg";
import product1 from "../assets/images/product-1.png";
import product2 from "../assets/images/product-2.png";
import product3 from "../assets/images/product-3.png";
function Modern() {
  return (
    <section className="modern bg-backgroundColor">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-7 mb-5 mb-lg-0">
            <div className="imgs-grid">
              <div className="grid grid-1">
                <img src={grid1} alt="grid1" />
              </div>
              <div className="grid grid-2">
                <img src={grid2} alt="grid1" />
              </div>
              <div className="grid grid-3">
                <img src={grid3} alt="grid1" />
              </div>
            </div>
          </div>
          <div className="col-lg-5 ps-lg-5">
            <div className="modern-content">
              <h3 className="h-3">We Help You Make Modern Interior Design</h3>
              <p className="text-black-50">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada
              </p>
              <ul>
                <li className="text-black-50">
                  Donec vitae odio quis nisl dapibus malesuada
                </li>
                <li className="text-black-50">
                  Donec vitae odio quis nisl dapibus malesuada
                </li>
                <li className="text-black-50">
                  Donec vitae odio quis nisl dapibus malesuada
                </li>
                <li className="text-black-50">
                  Donec vitae odio quis nisl dapibus malesuada
                </li>
              </ul>
              <button className="btn btn-dark mt-5">Explore</button>
            </div>
          </div>
        </div>
        <div className="row justify-content-between mt-5  my-lg-5">
          <div className="col-md-6 col-lg-4 image-card">
            <div className="card-img">
              <img src={product1} alt="product1" />
            </div>
            <div className="card-content">
              <strong>Nordic Chair</strong>
              <p className="text-black-50">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <a href="#" className="text-black-75">
                Read more
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 image-card">
            <div className="card-img">
              <img src={product2} alt="product2" />
            </div>
            <div className="card-content">
              <strong>Kruzo Aero Chair</strong>
              <p className="text-black-50">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <a href="#" className="text-black-75">
                Read more
              </a>
            </div>
          </div>
          <div className="col-md-6 col-lg-4 image-card">
            <div className="card-img">
              <img src={product3} alt="product3" />
            </div>
            <div className="card-content">
              <strong>Ergonomic Chair</strong>
              <p className="text-black-50">
                Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
              </p>
              <a href="#" className="text-black-75">
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Modern;
