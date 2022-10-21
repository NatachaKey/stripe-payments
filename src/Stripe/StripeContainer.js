import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import { CheckoutForm } from "./CheckoutForm";

const PUBLIC_KEY = "pk_test_51LsVkGItLObTNTakWqTFedTdirXR1K0390z85q8HOynXPfJJExTWGEOiWPcTukeikaLjTBq8us4a0h12RjqfCJDD00pgnsW3z7";

const stripeTestPromise = loadStripe(PUBLIC_KEY);

const Stripe = () => {
  return (
    <Elements stripe={stripeTestPromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Stripe;