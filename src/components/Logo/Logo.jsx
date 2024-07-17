import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import University from "../../../public/images/lppm_dan_usm.png";
import Kelurahan from "../../../public/images/logo_kelurahan.png";
import Tematik from "../../../public/images/logo_kkn.png";

function Logo() {
  return (
    <Container className="bg-light border rounded-4 p-5 text-center">
      <div className="d-flex flex-column align-items-center flex-lg-row align-items-lg-center justify-content-lg-center gap-lg-5">
        <Image
          src={University}
          alt="University Logo"
          className="w-75 h-auto my-4 my-lg-0"
          style={{ maxWidth: "300px" }}
        />
        <Image
          src={Kelurahan}
          alt="Kelurahan Logo"
          className="w-75 h-auto my-4 my-lg-0"
          style={{ maxWidth: "300px" }}
        />
        <Image
          src={Tematik}
          alt="Tematik Logo"
          className="w-75 h-auto my-4 my-lg-0"
          style={{ maxWidth: "300px" }}
        />
      </div>
    </Container>
  );
}

export default Logo;
