import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset", undefined]),
  text: PropTypes.string.isRequired,
  variant: PropTypes.oneOf(["brand"]),
};

type ButtonProps = PropTypes.InferProps<typeof propTypes>;

const Button: React.FC<ButtonProps> = ({ type, text, variant }) => {
  return (
    <button
      className={`${
        variant === "brand" && "bg-brand-bright hover:bg-brand-dark"
      } text-white rounded-3 font-medium h-[44px] text-16 mb-[8px] py-[2px] px-[16px]
       w-full transition-colors`}
      type={type as any}
    >
      {text}
    </button>
  );
};

export default Button;

Button.propTypes = propTypes;

Button.defaultProps = {
  type: "button",
  variant: "brand",
};
