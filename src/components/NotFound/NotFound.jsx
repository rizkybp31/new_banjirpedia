import Container from "react-bootstrap/Container";
import NoData from "../../../public/images/no_data.png";
import Image from "react-bootstrap/Image";

function NotFound() {
  return (
    <Container className="d-flex flex-column justify-content-center align-items-center my-5">
      <Image src={NoData} fluid />
      <span className="fs-1 fw-bold">No Data Found</span>
    </Container>
  );
}

export default NotFound;
