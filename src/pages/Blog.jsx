import Hero from "../components/Hero";
import { Postcard } from "../components/Post";
import photo1 from "../assets/images/post-1.jpg";
import photo2 from "../assets/images/post-2.jpg";
import photo3 from "../assets/images/post-3.jpg";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
const heading = "Blog";
const para =
  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
const postList = [
  {
    image: photo1,
    content: "First Time Home Owner Ideas",
    owner: " Kristin Watson ",
    date: "Dec 19, 2021",
  },
  {
    image: photo2,
    content: "How To Keep Your Furniture Clean",
    owner: " Robert Fox ",
    date: " Dec 15, 2021",
  },
  {
    image: photo3,
    content: "Small Space Furniture Apartment Ideas",
    owner: " Kristin Watson ",
    date: "Dec 12, 2021",
  },
  {
    image: photo1,
    content: "First Time Home Owner Ideas",
    owner: " Kristin Watson ",
    date: "Dec 19, 2021",
  },
  {
    image: photo2,
    content: "How To Keep Your Furniture Clean",
    owner: " Robert Fox ",
    date: " Dec 15, 2021",
  },
  {
    image: photo3,
    content: "Small Space Furniture Apartment Ideas",
    owner: " Kristin Watson ",
    date: "Dec 12, 2021",
  },
  {
    image: photo1,
    content: "First Time Home Owner Ideas",
    owner: " Kristin Watson ",
    date: "Dec 19, 2021",
  },
  {
    image: photo2,
    content: "How To Keep Your Furniture Clean",
    owner: " Robert Fox ",
    date: " Dec 15, 2021",
  },
  {
    image: photo3,
    content: "Small Space Furniture Apartment Ideas",
    owner: " Kristin Watson ",
    date: "Dec 12, 2021",
  },
];
function Blog() {
  return (
    <>
      <Hero heading={heading} para={para} />
      <div className="bg-backgroundColor pb-5">
        <div className="container py-5">
          <div className="row py-5 mb-5">
            <Postcard posts={postList} />
          </div>
          <Testimonials />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Blog;
