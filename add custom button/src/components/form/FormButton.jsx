import React from "react";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

export default function FormButton({
  steps,
  activeStep,
  handleBack,
  handleNext,
  handleOrderSubmit,
}) {
  return (
    <Grid
      item
      sx={{
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      {activeStep !== 0 && (
        <Button
          onClick={handleBack}
          sx={{
            mt: 3,
            ml: 1,
            color: "#4B6F49",
            minWidth: "120px",
            minHeight: "44px",
            borderRadius: "12px",
            textTransform: "Capitalize",
          }}
        >
          Kembali
        </Button>
      )}
      <Button
        variant="contained"
        color="success"
        id="nextButton"
        type="submit"
        onClick={
          activeStep === steps.length - 1 ? handleOrderSubmit : handleNext
        }
        sx={{
          mt: 3,
          ml: 1,
          minWidth: "120px",
          minHeight: "44px",
          borderRadius: "12px",
          textTransform: "Capitalize",
        }}
      >
        {activeStep === steps.length - 1 ? "Tukarkan Sampah" : "Selanjutnya"}
      </Button>
    </Grid>
  );
}
