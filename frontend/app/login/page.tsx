import React from "react";
import LoginForm from "@/app/components/Login/LoginForm";
import SignupLink from "@/app/components/Login/SignupLink";

const page = () => {
  return (
    <div>
      <LoginForm />
      <SignupLink />
    </div>
  );
};

export default page;
