import { useState, useRef } from "react";
import emailjs from "emailjs-com";
import { Container, Form, Button, Spinner } from "react-bootstrap";
import Image from "react-bootstrap/Image";
import LaporImage from "../../../../public/images/lapor.png";

export default function LaporWithForm() {
  const [isPending, setIsPending] = useState(false);

  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    message: "",
    gambar: null,
  });

  const form = useRef();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageChange = (event) => {
    setFormData((prevData) => ({ ...prevData, gambar: event.target.files[0] }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    let imageUrl = null;
    if (formData.gambar) {
      const formDataImage = new FormData();
      formDataImage.append("file", formData.gambar);
      formDataImage.append("upload_preset", "ml_default");

      try {
        setIsPending(true);
        const response = await fetch(
          "https://api.cloudinary.com/v1_1/dkt10fjtk/image/upload",
          { method: "POST", body: formDataImage }
        );

        if (!response.ok) {
          throw new Error(
            `Gagal mengunggah gambar. Status: ${response.status}`
          );
        }

        const data = await response.json();
        imageUrl = data.secure_url;
      } catch (error) {
        console.error("Error uploading image:", error);
        alert(
          "Gagal mengunggah gambar. Pesan tetap akan dikirim tanpa gambar."
        );
      }
    }

    const templateParams = {
      nama: formData.nama,
      email: formData.email,
      message: formData.message,
      gambar: imageUrl,
    };

    try {
      await emailjs.send(
        "service_2tf24xf",
        "template_6231kl6",
        templateParams,
        "fNaTr2baae3RslbrH"
      );
      alert("Pesan berhasil terkirim!");
      setFormData({ nama: "", email: "", message: "", gambar: null });
      setIsPending(false);
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
      console.error("Error sending email:", error);
      setIsPending(false);
    }
  };

  return (
    <Container className="my-5 pt-5 pb-3 bg-white rounded-5 shadow-lg d-flex flex-column align-items-center flex-lg-row">
      <Image src={LaporImage} className="w-50 mb-3"></Image>
      <div className="form-container col-lg-5">
        <h2 className="text-center fs-1 fw-bold">Lapor</h2>
        <Form
          ref={form}
          className="mx-auto my-5 border p-4 rounded-4 bg-primary bg-opacity-50 bg-gradient shadow-lg"
          onSubmit={handleSubmit}
        >
          <Form.Group className="mb-3">
            <Form.Label htmlFor="nama">Nama</Form.Label>
            <Form.Control
              type="text"
              id="nama"
              name="nama"
              placeholder="Masukkan nama Anda"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="email">Email address</Form.Label>
            <Form.Control
              type="email"
              id="email"
              name="email"
              placeholder="name@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="message">Pesan Anda</Form.Label>
            <Form.Control
              as="textarea"
              id="message"
              name="message"
              rows="3"
              placeholder="Masukkan pesan anda"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label htmlFor="gambar">Gambar (opsional)</Form.Label>
            <Form.Control
              type="file"
              id="gambar"
              onChange={handleImageChange}
            />
          </Form.Group>
          {isPending ? (
            <Button variant="secondary" disabled>
              <Spinner
                as="span"
                animation="border"
                size="sm"
                role="status"
                aria-hidden="true"
              />{" "}
              Loading...
            </Button>
          ) : (
            <Button type="submit" variant="primary">
              Kirim Pesan
            </Button>
          )}
        </Form>
      </div>
    </Container>
  );
}
