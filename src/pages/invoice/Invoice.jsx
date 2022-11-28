import React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Box } from "@mui/system";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { Container } from "@mui/material";
import Button from "@mui/material/Button";
import jsPDF from "jspdf";
import { FaArrowDown } from "react-icons/fa";
import { useParams } from "react-router-dom";

export default function Invoice() {
  const [orderDataInvoice, setOrderDataInvoice] = React.useState([]);
  const invoiceTempate = React.useRef(null);
  const { id } = useParams();

  const handleGeneratePdf = () => {
    const doc = new jsPDF({
      orientation: "landscape",
      format: "a4",
      unit: "px",
    });

    // Adding the fonts.
    doc.setFont("Inter-Regular", "normal");

    doc.html(invoiceTempate.current, {
      async callback(doc) {
        await doc.save("invoice");
      },
      html2canvas: { scale: 0.5 },
    });
  };

  React.useEffect(() => {
    const orderData = JSON.parse(localStorage.getItem("DATA_ORDER_STORAGE"));
    console.log(orderData);
    if (orderData) {
      setOrderDataInvoice(orderData);
    }
  }, [orderDataInvoice]);
  return (
    <Container
      className="container"
      sx={{
        width: "80%",
        display: "flex",
        justifyContent: "flex-start",
      }}
    >
      <Box
        ref={invoiceTempate}
        sx={{
          width: "100%",
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
        }}
      >
        <Typography
          variant="h4"
          gutterBottom
          sx={{
            px: 2,
          }}
        >
          Invoice
        </Typography>
        <Typography sx={{ py: 1, px: 2, fontSize: "14px" }}>
          No.Order : {id}
        </Typography>
        <List disablePadding>
          <ListItem
            sx={{
              py: 1,
              px: 2,
            }}
          >
            <ListItemText
              primary="Jenis Sampah"
              secondary={orderDataInvoice.trashType}
            />
            <ListItemText
              primary="Jumlah"
              secondary={`${orderDataInvoice.trashQty} Kg`}
            />
            <Typography
              sx={{
                fontSize: "14px",
              }}
            >{`Rp. ${orderDataInvoice.price}/Kg`}</Typography>
          </ListItem>

          <ListItem sx={{ py: 1, px: 2 }}>
            <ListItemText primary="Total" />
            <Typography
              key={orderDataInvoice.id}
              variant="subtitle1"
              sx={{ fontSize: "14px", fontWeight: 700 }}
            >
              Rp. {orderDataInvoice.total}
            </Typography>
          </ListItem>
        </List>
        <Grid container spacing={2} sx={{ px: 2 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Alamat Pengiriman
            </Typography>
            <Box>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                }}
              >
                {orderDataInvoice.name}
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "14px",
                }}
              >
                {orderDataInvoice.email}
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "14px",
                }}
              >
                {orderDataInvoice.phoneNumber}
              </Typography>
              <Typography
                gutterBottom
                sx={{
                  fontSize: "14px",
                }}
              >
                {orderDataInvoice.address}
              </Typography>
            </Box>
          </Grid>
          <Grid item container direction="column" xs={12} sm={6}>
            <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
              Detail Pembayaran
            </Typography>
            <Grid
              container
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
              }}
            >
              <Box
                key={orderDataInvoice.name}
                sx={{
                  display: "flex",
                }}
              >
                <Grid item xs={6}>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    Transfer
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: "14px",
                    }}
                  >
                    {orderDataInvoice.name}
                  </Typography>
                  <Typography
                    gutterBottom
                    sx={{
                      fontSize: "14px",
                      fontWeight: "600",
                    }}
                  >
                    {orderDataInvoice.cardNumber}
                  </Typography>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Box>
      <Button
        onClick={handleGeneratePdf}
        sx={{
          color: "#4B6F49",
          alignSelf: "self-end",
        }}
        endIcon={<FaArrowDown size={14} />}
      >
        Download PDF
      </Button>
    </Container>
  );
}
