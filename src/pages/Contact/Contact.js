import { Header } from "../../components/Header/Header";
import { ContactSection } from "../../components/ContactSection/ContactSection";
import { Footer } from "../../components/Footer/Footer";
import { Container } from "./Contact.styled";

const Contact = () => {
  return (
    <Container>
      <Header />
      <ContactSection />
      <Footer />
    </Container>
  );
};

export default Contact;
