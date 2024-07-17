import Container from "react-bootstrap/Container";

function Footer() {
  return (
    <Container className="border-top mt-3 py-2">
      <p className="text-center">© {new Date().getFullYear()} BanjirPedia</p>
    </Container>
  );
}

export default Footer;
