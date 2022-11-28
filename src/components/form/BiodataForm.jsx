import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import InputField from "./InputField";

export default function BiodataForm({ orderData, setOrderData }) {
  return (
    <React.Fragment>
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          textAlign: "center",
          fontSize: "32px",
          fontWeight: "700",
        }}
      >
        Data Diri
      </Typography>
      <Grid
        container
        spacing={3}
        sx={{
          padding: "32px 40px",
        }}
        component="form"
      >
        <Grid item xs={12}>
          <InputField
            type="text"
            disabled={false}
            id="name"
            label="Nama"
            value={orderData.name}
            handle={(event) =>
              setOrderData({ ...orderData, name: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12}>
          <InputField
            type="text"
            disabled={false}
            id="address"
            label="Alamat"
            value={orderData.address}
            handle={(event) =>
              setOrderData({ ...orderData, address: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="email"
            disabled={false}
            id="email"
            label="Email"
            value={orderData.email}
            handle={(event) =>
              setOrderData({ ...orderData, email: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="text"
            disabled={false}
            id="phoneNumber"
            label="No.Telepon"
            value={orderData.phoneNumber}
            handle={(event) =>
              setOrderData({ ...orderData, phoneNumber: event.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <InputField
            type="email"
            disabled={false}
            id="cardNumber"
            label="No.Rekening"
            value={orderData.cardNumber}
            handle={(event) =>
              setOrderData({ ...orderData, cardNumber: event.target.value })
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
