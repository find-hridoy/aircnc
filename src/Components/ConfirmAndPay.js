import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from "react";
import PaymentForm from "./PaymentForm";
// import {CardElement, Elements, useElements, useStripe} from '../../src';
// import "../styles/common.css";

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  "pk_test_51IZ5zcEboupSOizC2UrQLu01xLHBg5UtjehQuTMFYPd0OXRFJYyKHcdrGfXsupcQGq9IRtZHO1vdMycgX6oy4K9q003Vi4L895"
);

function ConfirmAndPay() {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm />
    </Elements>
  );
}

export default ConfirmAndPay;
