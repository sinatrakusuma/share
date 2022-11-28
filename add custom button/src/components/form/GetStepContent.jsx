import React from "react";
import BiodataForm from "./BiodataForm";
import TrashExchangeForm from "./TrashExchangeFrom";
import Review from "./Review";

export default function getStepContent(orderData, setOrderData, step) {
  switch (step) {
    case 0:
      return <BiodataForm orderData={orderData} setOrderData={setOrderData} />;
    case 1:
      return (
        <TrashExchangeForm orderData={orderData} setOrderData={setOrderData} />
      );
    case 2:
      return <Review orderData={orderData} setOrderData={setOrderData} />;
    default:
      throw new Error("Unknown step");
  }
}
