import Container from "react-bootstrap/Container";
import Carousel from "react-bootstrap/Carousel";
// import Cover from "../../../../public/images/buku/cover.jpg";
import Halaman1 from "../../../../public/images/buku/halaman1.jpg";
import Halaman2 from "../../../../public/images/buku/halaman2.jpg";
import Halaman3 from "../../../../public/images/buku/halaman3.jpg";
import Halaman4 from "../../../../public/images/buku/halaman4.jpg";
import Halaman5 from "../../../../public/images/buku/halaman5.jpg";
import Halaman6 from "../../../../public/images/buku/halaman6.jpg";
// import Backcover from "../../../../public/images/buku/backcover.jpg";

function Banjir() {
  return (
    <Container className="my-5">
      <h1 className="fw-bold text-white text-center mt-5">Banjir</h1>
      <Carousel
        data-bs-theme="dark"
        interval={null}
        className="col-11 mx-auto mt-5 col-lg-8"
      >
        {/* <Carousel.Item>
          <img className="d-block w-100" src={Cover} alt="First slide" />
        </Carousel.Item> */}
        <Carousel.Item>
          <img className="d-block w-100" src={Halaman1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Halaman2} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Halaman3} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Halaman4} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={Halaman5} alt="Second slide" />
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default Banjir;
