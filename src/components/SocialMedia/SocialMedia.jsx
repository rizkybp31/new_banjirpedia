import { Instagram, Globe, Telephone } from "react-bootstrap-icons";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function SocialMedia() {
  return (
    <Container className="py-4 mb-lg-5 bg-white rounded-4 shadow-lg">
      <Row className="d-flex justify-content-center col-lg-6 gap-4 gap-lg-0 mx-auto">
        <Col
          lg={4}
          className="d-flex justify-content-center align-items-center"
        >
          <a
            href="https://www.instagram.com/kelurahancabean?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            className="d-flex flex-row align-items-center text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={40} className="text-primary" />
            <span className="fs-6 fs-lg-5 text-primary mx-2">Instagram</span>
          </a>
        </Col>
        <Col
          lg={4}
          className="d-flex justify-content-center align-items-center"
        >
          <a
            href="https://cabean.semarangkota.go.id"
            className="d-flex flex-row align-items-center text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <Globe size={40} className="text-primary" />
            <span className="fs-6 fs-lg-5 mx-2 text-primary">
              Kelurahan Cabean
            </span>
          </a>
        </Col>
        <Col
          lg={4}
          className="d-flex justify-content-center align-items-center"
        >
          <a
            href={`tel:0247620930`}
            className="d-flex flex-row align-items-center text-decoration-none"
            target="_blank"
            rel="noreferrer"
          >
            <Telephone size={40} className="text-primary" />
            <span className="fs-6 fs-lg-5 mx-2 text-primary">024-7620930</span>
          </a>
        </Col>
      </Row>
    </Container>
  );
}
