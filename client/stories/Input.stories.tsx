import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Input from "../components/common/Input";

export default {
  title: "UI/Input",
  component: Input,
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  label: "Username",
  name: "username",
  classNames: "mb-[20px]",
};

export const Password = Template.bind({});
Password.args = {
  label: "Password",
  name: "password",
  type: "password",
};
