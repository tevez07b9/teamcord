import React from "react";
import PropTypes from "prop-types";

const propTypes = {
  classNames: PropTypes.string,
  label: PropTypes.string.isRequired,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
};

type InputProps = PropTypes.InferProps<typeof propTypes>;

const Input: React.FC<InputProps> = ({ type, label, name, classNames }) => {
  return (
    <div className={`text-left ${classNames}`}>
      <h5 className="text-12 text-grey-light font-semibold uppercase mb-[8px]">
        {label}
      </h5>
      <div className="w-full rounded-3 border border-rgba-borderDark bg-rgba-bgDark ">
        <input
          className="w-full text-grey-light p-3 rounded-3 border-none focus:border-none focus:outline-none focus:ring-1 focus:ring-brand-bright transition h-10 text-16 bg-transparent"
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
