import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Banjir from "../../../../public/images/flood.jpg";
import Emergency from "../../../../public/images/emergency_call.jpg";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Welcome() {
  return (
    <Container className="p-5">
      <Row className="py-5 d-flex flex-column align-items-center flex-lg-row">
        <Col>
          <Image src={Banjir} className="img-fluid" />
        </Col>
        <Col className="d-flex flex-column align-items-center align-items-lg-start">
          <h2 className="text-center fw-bold fs-1">
            Banjir dan Lingkungan Sehat
          </h2>
          <p className="text-secondary text-center text-lg-start">
            Apa itu banjir? Apa yang nenyebabkan Banjir? Apa yang harus
            dilakukan? Dan upaya menjaga lingkungan
          </p>
          <Link to="/banjir">
            <Button variant="dark" className="">
              Baca Selengkapnya...
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="py-5 d-flex flex-column align-items-center flex-lg-row flex-lg-row-reverse">
        <Col>
          <Image src={Emergency} className="img-fluid" />
        </Col>
        <Col className="d-flex flex-column align-items-center align-items-lg-end">
          <h2 className="text-center fw-bold fs-1">
            Nomor Darurat Kebencanaan
          </h2>
          <p className="text-secondary text-center">
            Apa saja nomor darurat yang dapat dihubungi apabila terjadi bencana?
          </p>
          <Link to="/call">
            <Button variant="dark" className="">
              Baca Selengkapnya...
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
