import truck from "../assets/images/truck.svg";
import bagIcon from "../assets/images/bag.svg";
import support from "../assets/images/support.svg";
import returnIcon from "../assets/images/return.svg";
import whychoose from "../assets/images/why-choose-us-img.jpg";
const iconList = [
  { icon: truck, content: "Fast & Free Shipping" },
  { icon: bagIcon, content: "Easy to Shop" },
  { icon: support, content: "24/7 Support" },
  { icon: returnIcon, content: "Hassle Free Returns" },
];

function Whycontents({ data }) {
  return (
    <>
      {data.map((item, index) => {
        return (
          <div className="col-6" key={index}>
            <div className="img-wrap mb-4">
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
function Whychoose() {
  return (
    <section className="whychoose bg-backgroundColor pb-5">
      <div className="container">
        <div className="row justify-content-between">
          <div className="col-12 col-lg-6">
            <div className="row">
              <div className="col-12">
                <h3 className="h-3">Why Choose Us</h3>
                <p className="text-black-50 pb-4">
                  Donec vitae odio quis nisl dapibus malesuada. Nullam ac
                  aliquet velit. Aliquam vulputate velit imperdiet dolor tempor
                  tristique.
                </p>
              </div>
              <Whycontents data={iconList} />
            </div>
          </div>
          <div className="col-12 col-lg-5">
            <div className="image">
              <img src={whychoose} alt="" className="img-fluid" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default Whychoose;
