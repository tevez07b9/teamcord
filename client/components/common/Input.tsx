import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

type InputProps = PropTypes.InferProps<typeof propTypes>;

const Input: React.FC<InputProps> = ({ type, label, name }) => {
  return (
    <div className="mb-[20px] text-left">
      <h5 className="text-12 text-header-secondary font-semibold uppercase mb-[8px]">
        {label}
      </h5>
      <div className="w-full bg-input-dark rounded-input border border-input-border">
        <input
          className="w-full text-white p-3 rounded-input border-none focus:border-none focus:outline-none focus:ring-1 focus:ring-blue-light h-10 text-16 bg-transparent"
          type={type as string}
          name={name}
        />
      </div>
    </div>
  );
};

export default Input;

Input.propTypes = propTypes;

Input.defaultProps = {
  type: "text",
};
