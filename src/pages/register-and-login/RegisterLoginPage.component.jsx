import React from "react";
import SignIn from "../../components/sign-in/SignIn.component";
import SignUp from "../../components/sign-up/SignUp.component";
import { SignInAndSignUpPageContainer } from "./RegisterLoginPage.styles";

const RegisterLoginPage = () => (
  <SignInAndSignUpPageContainer>
    <SignIn />
    <SignUp />
  </SignInAndSignUpPageContainer>
);

export default RegisterLoginPage;
