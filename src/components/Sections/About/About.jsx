import Container from "react-bootstrap/Container";
import SocialMedia from "../../SocialMedia/SocialMedia";

function About() {
  return (
    <Container className="my-5 vh-75 d-flex flex-column justify-content-center">
      <h1 className="text-white fw-bold text-center my-5">
        Tentang <span className="text-primary">Banjir</span>
        <span className="text-danger">Pedia</span>
      </h1>
      <p className="fs-6 text-white text-center mx-auto my-5 col-lg-9">
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
