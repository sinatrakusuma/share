import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Box, styled } from "@mui/system";

function SimpleAccordion() {
  const CustomBox = styled(Box)(({ theme }) => ({
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "85%",
    },
  }));
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        margin: "5rem auto",
      }}
    >
      <div
        style={{
          width: "5%",
          height: "5px",
          backgroundColor: "#2E582C",
          margin: "0 auto",
        }}
      ></div>

      <Typography
        variant="h3"
        sx={{ fontSize: "35px", fontWeight: "bold", color: "#2E582C", my: 3 }}
      >
        ARTIKEL
      </Typography>

      <CustomBox>
        <Typography
          variant="body2"
          sx={{
            fontSize: "16px",
            fontWeight: "500",
            color: "#5A6473",
            textAlign: "center",
            marginBottom: "5rem",
          }}
        >
          Berikut merupakan Beberapa artikel penting terkait sampah dan
          lingkungan
        </Typography>
      </CustomBox>
      <Box
        component="div"
        sx={{
          width: "100%",
          padding: {
            xs: "32px 24px",
            md: "32px 40px",
          },
        }}
      >
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography>Cara mengelola sampah dengan baik</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Mengelola sampah dengan bijak dapat membantu menyelamatkan
              lingkungan kita, <br /> sehingga perlu kita ketahui beberapa tips
              untuk mengelola sampah dengan bijak dan <br /> baik seperti:{" "}
              <br /> 1. Pisahkan tempat sampah untuk organic dan anorganik{" "}
              <br /> 2. Ganti alasa plastic sampah menjadi koran atau kardus{" "}
              <br /> 3. Ubah sampah organic menjadi pupuk kompos <br /> 4.
              Mendaur ulang sampah anorganik kering <br /> 5. Memberikan sisa
              minyak jelantah ke instansi pengolahan minyak <br /> 6. Mengelola
              sampah berbahaya <br /> 7. Meminimalisir konsumsi plastic atau
              sampah lainnya
            </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Cara mendaur ulang sampah </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Untuk bisa mendaur ulang sampah kita bisa melakukan dengan 3
              proses yaitu <br />
              1. Reduce <br />
              Reduce adalah mengurangi pemakaian barang-barang yang bisa
              menimbulkan sampah. <br /> Teknik daur ulang sampah ini adalah
              cara yang paling mudah dilakukan supaya jumlah <br /> sampah nggak
              semakin meningkat. Contohnya, ketika belanja, kita bisa membawa
              tas <br /> belanja sendiri dari rumah sehingga kita tidak perlu
              tas plastik dari toko. <br />
              2. Reuse <br />
              Setelah reduce, kita juga harus melakukan reuse. Seperti namanya,
              reuse adalah <br /> menggunakan kembali barang-barang yang ada di
              sekeliling kita dengan semaksimal <br /> mungkin. Artinya, kalau
              barangnya masih layak pakai, jangan keburu dibuang ya, guys.{" "}
              <br /> Contohnya, saat kita belanja online, biasanya paket kita
              akan dibungkus dengan bubble <br /> wrap dan kardus, kan? Nah,
              bubble wrap dan kardus itu bisa kita simpan untuk <br /> digunakan
              kembali. Jadi, kalau belanja online, bubble wrap dan kardusnya
              jangan <br /> langsung dibuang, ya!
              <br />
              3. Recycle <br />
              Daur ulang atau recycle adalah proses pengolahan limbah menjadi
              barang baru yang <br /> memiliki manfaat dan bisa digunakan
              kembali. Paham, kan? Nah, terus apa saja ya <br /> contoh daur
              ulang itu? Contohnya, kalau kita punya kain perca atau kain-kain
              bekas <br /> yang biasanya berupa potongan dari kain utuh, bisa
              dijahit dengan kain perca lainnya <br /> menjadi gorden. Contoh
              lainnya yaitu plastik bungkus bekas makanan atau deterjen <br />
              bisa dikumpulkan dan dijahit menjadi taplak meja anti air.
              <br />
              <br />
              <p>
                Selain itu, kita juga bisa mengolah botol plastik bekas air
                mineral menjadi vas bunga <br /> atau wadah alat tulis. Bisa
                juga mengolah sedotan plastik dan kertas bekas menjadi <br />{" "}
                hiasan berbentuk bunga.
              </p>
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Cara menjadikan sampah menjadi lebih bermanfaat{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Agar sampah bisa menjadi lebih bermanfaat anda bisa mengelolanya
              langsung <br /> melalui website pengelolaan sampah seperti Dausagi
              karena sampah yang <br /> sudah anda berikan atau kumpulkan selain
              menjadikan lingkungan lebih terjaga <br /> anda juga bisa
              mendapatkan income dari penyerahan sampah tersebut, tidak <br />{" "}
              hanya itu saja anda juga bisa mengolah beberapa jenis sampah
              seperti kardus, <br /> plastic menjadi bahan kerajinan yang bisa
              menghasilkan sebuah karya yang unik <br /> dan bisa dipakai serta
              bisa dijual belikan.
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>Sampah menjadi penyebab bencana </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Banyak sekali dampak yang disebabkan oleh pembuangan sampah
              sembarangan, <br /> seperti dapat mencemari air jika sering
              membuang sampah kesungai, sehingga <br /> dapat menganggu
              ekosistem didalam sungai dan juga bisa menyebabkan air <br />{" "}
              tersebut tercemar, sampah mencemari tanah, banyak sekali jenis
              sampah yang sulit <br /> diuraikan sehingga bisa mencemari tanah
              jika sampah tersebut terlalu bertumpuk
            </Typography>
          </AccordionDetails>
        </Accordion>

        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography>
              Dampak rendahnya kesadaran masyarakatu dalam mengelola sampah{" "}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Untuk meningkatkan kesadaran masyarakat mengenai pentingnya
              kebersihan,
              <br /> menurut Purnawan, perlu diperhatikan faktor-faktor yang
              mempengaruhi higienitas <br /> masyarakat. Faktor yang pertama
              adalah akses sanitasi yang memadai. Akses <br /> sanitasi ini
              tidak hanya meliputi jamban dan fasilitas sanitasi lain yang
              sesuai <br /> dengan standard kesehatan, namun juga tersedianya
              air bersih. Menurut Badan <br /> Pengelolaan Lingkungan Hidup
              Daerah Jakarta, 41 persen sumur yang ada di lingkungan <br />{" "}
              rumah tangga di Jakarta hanya berjarak 10 meter dari septic tank.
              Hal ini menunjukkan <br /> bahwa air yang digunakan masyarakat
              masih belum sesuai dengan standard kesehatan. <br /> Yang kedua
              adalah perilaku dan kebiasaan masyarakat itu sendiri mengenai
              kebersihan. <br /> Hal ini dapat berupa kebiasaan-kebiasaan kecil,
              dari membuang sampah di tempatnya <br /> hingga rajin mencuci
              tangan.
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Box>
    </Box>
  );
}
export default SimpleAccordion;
