import Hero from "../components/Hero";
import Product from "../components/Product";
import truck from "../assets/images/truck.svg";
import bagIcon from "../assets/images/bag.svg";
import support from "../assets/images/support.svg";
import returnIcon from "../assets/images/return.svg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
const iconList = [
  { icon: truck, content: "Fast & Free Shipping" },
  { icon: bagIcon, content: "Easy to Shop" },
  { icon: support, content: "24/7 Support" },
  { icon: returnIcon, content: "Hassle Free Returns" },
  { icon: truck, content: "Fast & Free Shipping" },
  { icon: bagIcon, content: "Easy to Shop" },
  { icon: support, content: "24/7 Support" },
  { icon: returnIcon, content: "Hassle Free Returns" },
];
function ServiceIcons({ data }) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="col-6 col-lg-3 pt-5" key={index}>
            <div className="img-wrap">
              <img src={item.icon} alt={item.content} />
            </div>
            <span>{item.content}</span>
            <p className="text-black-50">
              Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet
              velit. Aliquam vulputate.
            </p>
          </div>
        );
      })}
    </>
  );
}
const heading = "Service";
const para =
  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
function Service() {
  return (
    <>
      <Hero heading={heading} para={para} />
      <div className="bg-backgroundColor py-5">
        <div className="container pb-5">
          <div className="row py-5">
            <ServiceIcons data={iconList} />
          </div>
          <Product />
          <Testimonials />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Service;
