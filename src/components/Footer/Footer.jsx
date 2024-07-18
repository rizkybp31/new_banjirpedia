import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Container className="mt-3 py-2" fluid>
      <p className="text-center text-white">
        © {new Date().getFullYear()} BanjirPedia
      </p>
    </Container>
  );
}

export default Footer;
