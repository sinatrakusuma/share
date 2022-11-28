import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import MenuItem from "@mui/material/MenuItem";
import trashTypeSelect from "../../data/trashTypeSelect";
import InputField from "./InputField";
import { TextField } from "@mui/material";

export default function TrashExchangeForm({ orderData, setOrderData }) {
  const handleTrashType = (event) => {
    if (event.target.value === "Plastik") {
      setOrderData({
        ...orderData,
        trashType: event.target.value,
        price: 1000,
        total: 1000,
      });
    } else if (event.target.value === "Kertas") {
      setOrderData({
        ...orderData,
        trashType: event.target.value,
        price: 2000,
        total: 2000,
      });
    } else if (event.target.value === "Botol") {
      setOrderData({
        ...orderData,
        trashType: event.target.value,
        price: 3500,
        total: 3500,
      });
    } else if (event.target.value === "Karet") {
      setOrderData({
        ...orderData,
        trashType: event.target.value,
        price: 6000,
        total: 6000,
      });
    }
  };

  function handleTrashQty(event) {
    setOrderData({
      ...orderData,
      trashQty: event.target.value,
      total: orderData.price * event.target.value,
    });
  }

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
        Data Sampah
      </Typography>
      <Grid
        container
        spacing={3}
        component="form"
        sx={{
          padding: "32px 40px",
        }}
      >
        <Grid item xs={12} md={6}>
          <TextField
            id="trashType"
            select={true}
            fullWidth
            color="success"
            variant="standard"
            disabled={false}
            label="Jenis Sampah"
            value={orderData.trashType}
            onChange={handleTrashType}
          >
            {trashTypeSelect.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.value}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            id="price"
            label="Harga Per Kilo"
            value={`Rp. ${orderData.price}`}
            disabled={true}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            id="trashQty"
            label="Jumlah Sampah (Kg)"
            type="number"
            disabled={false}
            value={orderData.trashQty}
            handle={handleTrashQty}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <InputField
            type="text"
            id="total"
            label="Kalukasi Harga"
            value={`Rp. ${orderData.total}`}
            disabled={true}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <FormControlLabel
            sx={{
              width: "100%",
            }}
            control={
              <Checkbox
                name="saveAddress"
                value="yes"
                sx={{
                  color: "#2E582C",
                  "&.Mui-checked": {
                    color: "#2E582C",
                  },
                }}
              />
            }
            label={
              <Typography variant="body2" color="black">
                Data sudah benar
              </Typography>
            }
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
