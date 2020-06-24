import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceInCents = price * 100;
  const publishableKey =
    "pk_test_51GxYbaEBcdqW37LkCwLUh9Pl5mSELxrnpwfbho29uhV3tFyx0XgqtEi9R2E1yIOlnAZm2Yqy7Xh0ygjMOaUn1IJg00ogXrk2pO";

  const onToken = (token) => {
    console.log(token);
    alert("Payment successful");
  };

  return (
    <StripeCheckout
      label="Pay now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceInCents}
      panelLabel="Pay now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
