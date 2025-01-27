import { useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";

function NavigationBar() {
  const navbarToggleRef = useRef(null);

  const handleLinkClick = useCallback(() => {
    if (navbarToggleRef.current && window.innerWidth < 992) {
      navbarToggleRef.current.click();
    }
  }, []);

  return (
    <Navbar bg="dark" expand="lg" className="bg-body-tertiary" sticky="top">
      <Container className="py-2 px-4">
        <Navbar.Brand className="fw-bold">
          <Link to="/" className="text-primary text-decoration-none">
            Banjir<span className="text-danger">Pedia</span>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-secondary"
          aria-controls="basic-navbar-nav"
          ref={navbarToggleRef}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link
              to="/"
              className="nav-link text-white"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="nav-link text-white"
              onClick={handleLinkClick}
            >
              Blog
            </Link>
            <Link
              to="/about"
              className="nav-link text-white"
              x
              onClick={handleLinkClick}
            >
              About
            </Link>
          </Nav>
          <Button variant="danger">
            <Link to="/lapor" className="nav-link" onClick={handleLinkClick}>
              Lapor
            </Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
