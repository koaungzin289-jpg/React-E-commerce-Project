import person1 from "../assets/images/person-1.png";
function Testimonials() {
  return (
    <section className="testimonials bg-backgroundColor py-5">
      <div className="container">
        <h3 className="h-3 text-center">Testimonials</h3>
        <div
          id="testimonials"
          className="carousel slide "
          data-bs-ride="carousel"
        >
          <ul className="carousel-indicators pt-5">
            <li
              data-bs-target="#testimonials"
              data-bs-slide-to="0"
              className="active"
            ></li>
            <li data-bs-target="#testimonials" data-bs-slide-to="1"></li>
            <li data-bs-target="#testimonials" data-bs-slide-to="2"></li>
          </ul>
          <div className="carousel-inner pb-5">
            <div className="carousel-item text-center active">
              <p className="text-black-50">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer convallis volutpat dui quis
                scelerisque.”
              </p>
              <img src={person1} alt="person1" />
              <strong className="d-block">Maria Jones</strong>
              <span className="d-block text-black-50">
                CEO, Co-Founder, XYZ Inc.
              </span>
            </div>
            <div className="carousel-item text-center ">
              <p className="text-black-50">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer convallis volutpat dui quis
                scelerisque.”
              </p>
              <img src={person1} alt="person1" />
              <strong className="d-block">Maria Jones</strong>
              <span className="d-block text-black-50">
                CEO, Co-Founder, XYZ Inc.
              </span>
            </div>
            <div className="carousel-item text-center ">
              <p className="text-black-50">
                “Donec facilisis quam ut purus rutrum lobortis. Donec vitae odio
                quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam
                vulputate velit imperdiet dolor tempor tristique. Pellentesque
                habitant morbi tristique senectus et netus et malesuada fames ac
                turpis egestas. Integer convallis volutpat dui quis
                scelerisque.”
              </p>
              <img src={person1} alt="person1" />
              <strong className="d-block">Maria Jones</strong>
              <span className="d-block text-black-50">
                CEO, Co-Founder, XYZ Inc.
              </span>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#testimonials"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon text-black"></span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#testimonials"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon text-black"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
export default Testimonials;
