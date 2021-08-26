import React from "react";
import Button from "../common/Button";
import Input from "../common/Input";
import Link from "next/link";

const RegisterForm = () => {
  return (
    <div className=" bg-gray-dark rounded-md p-[32px] min-w-[420px] text-center">
      <h1 className="font-bold text-header-primary text-24 mb-[8px]">
        Create an account
      </h1>

      <form className="mt-[20px]">
        <Input label="Email" name="email" />
        <Input label="Username" name="username" />
        <Input label="Password" type="password" name="password" />
        <Button type="submit" text="Continue" />
        <div className="flex mt-[4px]">
          {/* <span className="text-14 text-text-disabled ">Need an account?</span> */}
          <Link href="/login">
            <button className="text-blue-light text-14 ml-[4px]">
              Already have an account?
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default RegisterForm;
