import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
const heading = "Contact";
const para =
  "Donec vitae odio quis nisl dapibus malesuada. Nullam ac aliquet velit. Aliquam vulputate velit imperdiet dolor tempor tristique.";
function Contact() {
  return (
    <>
      <Hero heading={heading} para={para} />
      <div className="bg-backgroundColor">
        <div className="container">
          <ContactForm />
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
