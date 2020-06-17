import React from "react";
import "./RegisterLoginPage.styles.scss";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";

const RegisterLoginPage = () => (
  <div className="sign-in-and-sign-up">
    <SignIn />
    <SignUp />
  </div>
);

export default RegisterLoginPage;
