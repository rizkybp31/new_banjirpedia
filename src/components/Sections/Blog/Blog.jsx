import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import NotFound from "../../NotFound/NotFound";
import Spinner from "react-bootstrap/Spinner";

function BlogList() {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    fetch(
      "https://script.google.com/macros/s/AKfycbzJp9U7nIIoiu38x8kOj5wsypXVKlV7_AAGHKvhM4koyEnWQyrrDq36AP_seMO2HNqW/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log("Fetched data:", data);
        if (
          data &&
          Array.isArray(data) &&
          data.some((item) => item.id !== null)
        ) {
          setData(data);
        } else {
          setHasError(true);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setHasError(true);
      })
      .finally(() => setIsPending(false));
  }, []);

  if (isPending) {
    return (
      <div className="text-center my-5 py-5 d-flex justify-content-center align-items-center gap-2 vh-100">
        <Spinner
          animation="border"
          role="status"
          className="text-white"
        ></Spinner>
        <span className="fs-5 text-white">Loading...</span>
      </div>
    );
  }

  if (hasError || !data) {
    console.log("Rendering NotFound component");
    return <NotFound />;
  }

  return (
    <Container className="my-5">
      <h1 className="text-white fw-bold text-center my-5">Berita Terbaru</h1>
      <div className="d-flex gap-lg-5 flex-wrap justify-content-center">
        {data.map((item) => (
          <Card className="my-3 col-lg-3 p-3 bg-light rounded-4" key={item.id}>
            <Card.Img
              variant="top"
              src={item.gambar}
              alt={item.judul}
              rounded
            />
            <Card.Body>
              <Card.Title>{item.judul}</Card.Title>
              <Card.Text>{item.teks.slice(0, 200)}...</Card.Text>
              <Link to={`/blogdetail/${item.id}`}>
                <Button variant="primary">Baca Selengkapnya</Button>
              </Link>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default BlogList;
