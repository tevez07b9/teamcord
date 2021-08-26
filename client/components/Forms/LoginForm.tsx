import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Link from "next/link";

const LoginForm = () => {
  return (
    <div className=" bg-gray-dark rounded-md p-[32px] min-w-[420px]">
      <h1 className="font-bold text-header-primary text-24 mb-[8px]">
        Welcome back!
      </h1>
      <p className="text-16 text-header-secondary">
        We're so excited to see you again!
      </p>
      <form className="mt-[20px]">
        <Input label="Email or Phone Number" name="username" />
        <Input label="Password" type="password" name="password" />
        <p className="mb-[20px] text-blue-light text-14 cursor-pointer">
          Forgot your password?
        </p>
        <Button type="submit" text="Login" />
        <div className="flex mt-[4px]">
          <span className="text-14 text-text-disabled ">Need an account?</span>
          <Link href="/register">
            <button className="text-blue-light text-14 ml-[4px]">
              Register
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
