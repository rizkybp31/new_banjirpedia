import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

function EmergencyCall() {
  const numbers = [
    {
      id: "1",
      nama: "Panggilan Darurat",
      nomor: "112",
      deskripsi:
        "Nomor ini digunakan untuk menghubungi layanan darurat umum yang mencakup berbagai situasi seperti kecelakaan, kebakaran, atau kejadian darurat lainnya.",
    },
    {
      id: "2",
      nama: "Ambulans",
      nomor: "119",
      deskripsi:
        "Nomor ini khusus untuk layanan ambulans dan situasi medis darurat.",
    },
    {
      id: "3",
      nama: "Ambulans Hebat",
      nomor: "1500-132",
      deskripsi:
        "Nomor ini untuk layanan ambulans khusus yang mungkin menyediakan fasilitas atau layanan tambahan dibandingkan dengan ambulans biasa.",
    },
    {
      id: "4",
      nama: "Pemadam Kebakaran",
      nomor: "113",
      deskripsi:
        "Nomor ini digunakan untuk menghubungi pemadam kebakaran dalam kasus kebakaran atau situasi darurat yang memerlukan intervensi dari pemadam kebakaran.",
    },
    {
      id: "5",
      nama: "Polisi",
      nomor: "110",
      deskripsi:
        "Nomor ini untuk menghubungi polisi dalam kasus kriminal, kecelakaan, atau situasi darurat lainnya yang memerlukan penegakan hukum.",
    },
    {
      id: "6",
      nama: "BASARNAS",
      nomor: "115",
      deskripsi:
        "Nomor ini digunakan untuk menghubungi Badan Nasional Pencarian dan Pertolongan (SAR) dalam situasi darurat yang memerlukan pencarian dan penyelamatan, seperti bencana alam atau kecelakaan di laut.",
    },
    {
      id: "7",
      nama: "Posko Bencana Alam",
      nomor: "129",
      deskripsi:
        "Nomor ini khusus untuk menghubungi posko penanganan bencana alam, di mana masyarakat dapat meminta bantuan atau informasi terkait penanganan bencana.",
    },
    {
      id: "8",
      nama: "PLN",
      nomor: "123",
      deskripsi:
        "Nomor ini digunakan untuk menghubungi Perusahaan Listrik Negara (PLN) terkait dengan gangguan listrik atau keadaan darurat yang berkaitan dengan listrik.",
    },
    {
      id: "9",
      nama: "PUPR",
      nomor: "158",
      deskripsi:
        "Nomor ini untuk menghubungi Kementerian Pekerjaan Umum dan Perumahan Rakyat dalam situasi darurat yang berhubungan dengan infrastruktur seperti jalan, jembatan, atau bangunan publik.",
    },
    {
      id: "10",
      nama: "Pertamina",
      nomor: "135",
      deskripsi:
        "Nomor ini digunakan untuk menghubungi Pertamina terkait dengan situasi darurat yang berkaitan dengan bahan bakar minyak dan gas, seperti kebocoran gas atau tumpahan bahan bakar.",
    },
  ];

  return (
    <Container className="my-5">
      <h1 className="text-white fw-bold text-center my-5">Emergency Call</h1>
      <div className="d-flex flex-wrap justify-content-center gap-3">
        {numbers.map((number) => (
          <Card
            className="col-12 col-lg-4 bg-secondary rounded-4"
            key={number.id}
          >
            <Card.Body className="d-flex flex-column align-items-center">
              <Card.Title>{number.nama}</Card.Title>
              <Card.Text className="fs-1 fw-bold text-danger">
                {number.nomor}
              </Card.Text>
              <Card.Text className="text-center text-white">
                {number.deskripsi}
              </Card.Text>
              <a href={`tel://${number.nomor}`}>
                <Button variant="danger">Panggil</Button>
              </a>
            </Card.Body>
          </Card>
        ))}
      </div>
    </Container>
  );
}

export default EmergencyCall;
