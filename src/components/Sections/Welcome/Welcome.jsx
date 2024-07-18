import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Banjir from "../../../../public/images/flood.png";
import Emergency from "../../../../public/images/emergency_call.png";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

function Welcome() {
  return (
    <Container className="p-5 rounded-5 my-5 bg-light shadow-xl">
      <Row className="py-3 d-flex flex-column align-items-center flex-lg-row">
        <Col>
          <Image src={Banjir} className="img-fluid" />
        </Col>
        <Col className="d-flex flex-column align-items-center align-items-lg-start">
          <h2 className="text-center text-lg-start fw-bold fs-1">
            <span className="text-primary">Banjir</span> dan{" "}
            <span className="text-success">Lingkungan Sehat</span>
          </h2>
          <p className="col-lg-9 text-center text-lg-start">
            Apa itu banjir? Apa yang nenyebabkan Banjir? Apa yang harus
            dilakukan? Dan upaya menjaga lingkungan
          </p>
          <Link to="/banjir">
            <Button variant="primary" className="shadow-lg">
              Baca Selengkapnya...
            </Button>
          </Link>
        </Col>
      </Row>
      <Row className="py-3 d-flex flex-column align-items-center flex-lg-row flex-lg-row-reverse">
        <Col>
          <Image src={Emergency} className="img-fluid" />
        </Col>
        <Col className="d-flex flex-column align-items-center align-items-lg-end">
          <h2 className="text-center text-lg-end fw-bold fs-1">
            <span className="text-danger">Nomor Darurat</span> Kebencanaan
          </h2>
          <p className="text-center text-lg-end col-lg-9">
            Apa saja nomor darurat yang dapat dihubungi apabila terjadi bencana?
          </p>
          <Link to="/call">
            <Button variant="primary" className="shadow-lg">
              Baca Selengkapnya...
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
}

export default Welcome;
