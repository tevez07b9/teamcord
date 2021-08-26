import { withUrqlClient } from "next-urql";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import RegisterForm from "../components/Forms/RegisterForm";
import Layout from "../components/Layout";
import { LoginMutationVariables, useLoginMutation } from "../generated/graphql";
import { createUrqlClient } from "../utils/createUrqlClient";

const Login = () => {
  const { handleSubmit, control } = useForm();
  const [_, login] = useLoginMutation();

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-blue-light">
      <RegisterForm />
    </div>
  );
};

export default withUrqlClient(createUrqlClient)(Login);
