import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Modern from "../components/Modern";
import Post from "../components/Post";
import Product from "../components/Product";
import Whychoose from "../components/Whychoose";
import Testimonials from "../components/Testimonials";
const heading = "Modern Interior Design Studio";
const para =
  " Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
function Home() {
  return (
    <>
      <Hero heading={heading} para={para} />
      <Product />
      <Whychoose />
      <Modern />
      <Testimonials />
      <Post />
      <Footer />
    </>
  );
}

export default Home;
