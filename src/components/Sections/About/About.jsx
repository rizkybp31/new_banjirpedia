import Container from "react-bootstrap/Container";
import SocialMedia from "../../SocialMedia/SocialMedia";

function About() {
  return (
    <Container className="my-5">
      <h1 className="fw-bold text-center my-5">Tentang Website BanjirPedia</h1>
      <p className="fs-6 text-dark text-center mx-auto my-5 col-9">
        Banjirpedia adalah portal informasi yang didedikasikan untuk memberikan
        edukasi dan informasi penting terkait banjir kepada warga Kelurahan
        Cabean, Semarang Barat, Semarang. Kami bertujuan untuk meningkatkan
        kesadaran dan kesiapsiagaan warga terhadap ancaman banjir melalui
        informasi yang mudah diakses dan dapat diandalkan.Banjirpedia adalah
        portal informasi yang didedikasikan untuk memberikan edukasi dan
        informasi penting terkait banjir kepada warga Kelurahan Cabean, Semarang
        Barat, Semarang. Kami bertujuan untuk meningkatkan kesadaran dan
        kesiapsiagaan warga terhadap ancaman banjir melalui informasi yang mudah
        diakses dan dapat diandalkan.
      </p>
      <SocialMedia />
    </Container>
  );
}

export default About;
