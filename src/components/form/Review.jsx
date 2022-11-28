import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";

import { Box } from "@mui/system";

export default function Review({ orderData }) {
  return (
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Review Order
      </Typography>
      <List disablePadding>
        <ListItem
          sx={{
            py: 1,
            px: 0,
          }}
        >
          <ListItemText
            primary="Jenis Sampah"
            secondary={orderData.trashType}
          />
          <ListItemText
            primary="Jumlah"
            secondary={`${orderData.trashQty} Kg`}
          />
          <Typography>{`Rp. ${orderData.price}/Kg`}</Typography>
        </ListItem>

        <ListItem sx={{ py: 1, px: 0 }}>
          <ListItemText primary="Total" />
          <Typography variant="subtitle1" sx={{ fontWeight: 700 }}>
            Rp. {orderData.total}
          </Typography>
        </ListItem>
      </List>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
            Alamat Pengiriman
          </Typography>
          <Box>
            <Typography
              gutterBottom
              sx={{
                fontSize: "16px",
                fontWeight: "600",
              }}
            >
              {orderData.name}
            </Typography>
            <Typography gutterBottom>{orderData.email}</Typography>
            <Typography gutterBottom>{orderData.phoneNumber}</Typography>
            <Typography gutterBottom>{orderData.address}</Typography>
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
              sx={{
                display: "flex",
              }}
            >
              <Grid item xs={6}>
                <Typography gutterBottom>Transfer</Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography gutterBottom>{orderData.name}</Typography>
                <Typography
                  gutterBottom
                  sx={{
                    fontWeight: "600",
                  }}
                >
                  {orderData.cardNumber}
                </Typography>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
