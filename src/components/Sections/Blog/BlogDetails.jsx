import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";

function BlogDetails() {
  const { id } = useParams();
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    setIsPending(true);
    fetch(
      "https://script.google.com/macros/s/AKfycbzJp9U7nIIoiu38x8kOj5wsypXVKlV7_AAGHKvhM4koyEnWQyrrDq36AP_seMO2HNqW/exec"
    )
      .then((response) => response.json())
      .then((allData) => {
        const selectedData = allData.find((item) => item.id === parseInt(id));

        if (selectedData) {
          setData(selectedData);
        } else {
          setData(null);
        }
        setIsPending(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsPending(false);
      });
  }, [id]);

  if (isPending) {
    return (
      <div className="text-center my-5 py-5 d-flex justify-content-center align-items-center gap-2">
        <div className="spinner-border" role="status" aria-hidden="true"></div>
        <span aria-label="Loading">Loading...</span>
      </div>
    );
  }

  if (!data) {
    return <div>No data found</div>;
  }

  return (
    <Container className="my-lg-5">
      <Card className="my-3 col-lg-10 mx-auto border">
        <Card.Title className="fs-1 fw-bold my-5 text-center">
          {data.judul}
        </Card.Title>
        <Card.Img
          src={data.gambar}
          alt={data.judul}
          className="mx-auto"
          style={{ maxWidth: "50vh", height: "auto" }}
        />
        <Card.Body className="px-lg-5">
          <Card.Text style={{ textAlign: "justify" }}>{data.teks}</Card.Text>
          <Card.Text
            className="text-secondary"
            style={{ textAlign: "justify" }}
          >
            {data.waktu.slice(0, 10)}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}

export default BlogDetails;
