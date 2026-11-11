import Hero from "../components/Hero";
import Team from "../components/Team";
import Testimonials from "../components/Testimonials"
import Whychoose from "../components/Whychoose";
import Footer from '../components/Footer'
const heading = "About Us";
const para =
  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
function About() {
  return (
    <>
      <Hero heading={heading} para={para} />
      <div className="bg-backgroundColor py-5">
        <div className="container py-5">
          <Whychoose />
          <Team />
          <Testimonials/>
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default About;
