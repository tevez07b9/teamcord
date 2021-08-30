import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
// import DropDownDatepicker from "../components/common/Datepickers/DropDownDatepicker";
import Select from "../components/common/Select";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

export default {
  title: "UI/Select",
  component: Select,
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  options,
  onChange: () => {},
};

// export default {
//   title: "UI/DropDownDatepicker",
//   component: DropDownDatepicker,
// } as ComponentMeta<typeof DropDownDatepicker>;

// const Template: ComponentStory<typeof DropDownDatepicker> = (args) => (
//   <DropDownDatepicker {...args} />
// );

// export const Primary = Template.bind({});
// Primary.args = {
//   // options,
//   onChange: () => {},
// };
