import React, { useState } from "react";
import { useForm } from "../hooks/useForm";
import useLightMode from "../hooks/useLightMode";
import "../App.css";

// This form should be handled by a "useForm" custom hook
// Build out the logic needed for a form custom hook (see the useForm.js file)
// and replace the necessary stateful logic from CheckoutForm with the hook

const CheckoutForm = (props) => {
  const {
    values,
    showSuccessMessage,
    handleSubmit,
    handleChanges,
    initialValue,
  } = useForm();

  return (
    <>
      <form id="form" onSubmit={handleSubmit}>
        <h2>Checkout Form</h2>
        <label>
          First Name:
          <input
            name="firstName"
            value={values.firstName}
            onChange={handleChanges}
            required
          />
        </label>
        <label>
          Last Name:
          <input
            name="lastName"
            value={values.lastName}
            onChange={handleChanges}
            required
          />
        </label>
        <label>
          Address:
          <input
            name="address"
            value={values.address}
            onChange={handleChanges}
            required
          />
        </label>
        <label>
          City:
          <input
            name="city"
            value={values.city}
            onChange={handleChanges}
            required
          />
        </label>
        <label>
          State:
          <input
            name="state"
            value={values.state}
            onChange={handleChanges}
            required
          />
        </label>
        <label>
          Zip:
          <input
            name="zip"
            value={values.zip}
            onChange={handleChanges}
            required
          />
        </label>
        <button data-testid="checkoutbtn">Checkout</button>
      </form>

      {showSuccessMessage && (
        <div className="success-message" data-testid="successMessage">
          <p>
            You have ordered some plants! Woo-hoo! <span role="img">🎉</span>
          </p>
          <p>Your new green friends will be shipped to:</p>
          <br />
          <br />
          <p>
            {values.firstName} {values.lastName}
          </p>
          <p>{values.address}</p>
          <p>
            {values.city}, {values.state} {values.zip}
          </p>
        </div>
      )}
    </>
  );
};

export default CheckoutForm;
