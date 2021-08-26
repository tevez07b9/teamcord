import { withUrqlClient } from "next-urql";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import LoginForm from "../components/Forms/LoginForm";
import Layout from "../components/Layout";
import { LoginMutationVariables, useLoginMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Login = () => {
  const { handleSubmit, control } = useForm();
  const [_, login] = useLoginMutation();

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-blue-light">
      <LoginForm />
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
