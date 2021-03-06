import React from "react";
import PropTypes from "prop-types";
import ReactSelect from "react-select";

const propTypes = {
  options: PropTypes.array.isRequired,
  hideSeparator: PropTypes.bool,
  ref: PropTypes.oneOf([
    PropTypes.func,
    // PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  onChange: PropTypes.func.isRequired,
};

type SelectProps = PropTypes.InferProps<typeof propTypes>;

const Select: React.FC<SelectProps> = ({
  options,
  ref,
  onChange,
  hideSeparator,
}) => {
  const customStyles = {
    placeholder: (styles) => ({
      ...styles,
      color: "#72767d",
    }),
    indicatorSeparator: (styles) => ({
      ...styles,
      display: hideSeparator ? "none" : "inline-block",
      // backgroundColor: "#b9bbbe",
      // "&:hover": {
      //   backgroundColor: "#b9bbbe",
      // },
    }),
    dropdownIndicator: (styles) => ({
      ...styles,
      color: "#b9bbbe",
      "&:hover": {
        color: "#b9bbbe",
      },
    }),
    input: (styles) => ({
      ...styles,
      width: "100%",
      backgroundColor: "transparent",
      color: "white",
      margin: "0",
      padding: "0",
      height: "2.5rem",
    }),
    valueContainer: (styles) => ({
      ...styles,
      paddingTop: "0",
      paddingBottom: "0",
    }),
    singleValue: (styles) => ({
      ...styles,
      color: "white",
    }),
    container: (styles) => ({
      ...styles,
      width: "100%",
      borderRadius: "3px",
      backgroundColor: "#36393f",
      "&:focus": {
        borderColor: "red",
      },
    }),
    control: (styles, state) => ({
      ...styles,
      marginTop: "0",
      marginBottom: "0",
      boxShadow: "none",
      backgroundColor: "rgba(0,0,0,0.1)",
      borderColor: state.isFocused ? "#5865f2" : "rgba(0,0,0,0.3)",
      borderWidth: "1px",
      borderRadius: "3px",
      "&:hover": {
        borderColor: state.isFocused ? "#5865f2" : "rgba(0,0,0,0.3)",
        borderWidth: "1px",
        borderRadius: "3px",
      },
    }),
    menu: (styles) => ({
      ...styles,
      boxShadow: "none",
      borderColor: "rgba(0,0,0,0.3)",
      borderWidth: "1px",
      borderRadius: "3px",
      backgroundColor: "#36393f",
    }),
    option: (styles, state) => ({
      ...styles,
      backgroundColor: "transparent",
      color: "white",
      "&:hover": {
        backgroundColor: "rgba(0,0,0,0.1)",
      },
    }),
  };
  return (
    <>
      <ReactSelect
        inputRef={ref}
        onChange={(val) => onChange(val.value)}
        styles={customStyles}
        name="color"
        options={options}
      />
    </>
  );
};

export default Select;

Select.propTypes = propTypes;

Select.defaultProps = {};
