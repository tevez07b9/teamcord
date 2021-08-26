import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  type: PropTypes.oneOf(["button", "submit", "reset", undefined]),
  text: PropTypes.string.isRequired,
};

type ButtonProps = PropTypes.InferProps<typeof propTypes>;

const Button: React.FC<ButtonProps> = ({ type, text }) => {
  return (
    <button
      className="text-white font-semibold rounded-[3px] h-[44px] text-16 bg-blue-light hover:bg-blue-dark mb-[8px] w-full py-[2px] px-[16px]"
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
};
