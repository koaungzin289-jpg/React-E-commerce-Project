import couch from "../assets/images/couch.png";

function Hero({ heading, para }) {
  return (
    <section className="hero bg-primary">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-lg-5">
            <div className="intro-excerpt">
              <h1 className="text-white pt-5">{heading}</h1>
              <p className="text-white-50">{para}</p>
              <button className="btn btn-shop me-3">Shop Now</button>
              <button className="btn btn-explore">Explore</button>
            </div>
          </div>
          <div className="col-lg-7">
            <div className="hero-img-wrap">
              <img src={couch} alt="Sofa" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Hero;
