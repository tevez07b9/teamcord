import React from "react";
import PropTypes from "prop-types";
import Select from "../Select";
import {
  FocusedInput,
  START_DATE,
  useDatepicker,
  useMonth,
} from "@datepicker-react/hooks";
import dayjs from "dayjs";

const propTypes = {
  ref: PropTypes.oneOf([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

type DropDownDatepickerProps = PropTypes.InferProps<typeof propTypes>;

const DropDownDatepicker: React.FC<DropDownDatepickerProps> = ({
  ref,
  onChange,
}) => {
  const [state, setState] = React.useState({
    startDate: null,
    endDate: null,
    focusedInput: START_DATE,
  });

  console.log("state: ", state);

  const { activeMonths } = useDatepicker({
    startDate: state.startDate,
    endDate: state.endDate,
    focusedInput: state.focusedInput as FocusedInput,
    numberOfMonths: 12,
    onDatesChange: handleDateChange,
  });

  const { days } = useMonth({
    year: 2021,
    month: 7,
  });

  function getDays(days) {
    const result: {
      label: string;
      value: any;
    }[] = [];
    days.forEach((day) => {
      if (day && day.date) {
        const dayString = dayjs(day.date).format("DD");
        result.push({
          label: dayString,
          value: parseInt(dayString),
        });
      }
    });
    return result;
  }

  console.log(getDays(days));

  function getMonths(monthsArr) {
    return monthsArr.map((mth) => ({
      value: mth.month,
      label: dayjs().month(mth.month).format("MMMM"),
    }));
  }

  function handleDateChange(data) {
    if (!data.focusedInput) {
      setState({
        ...data,
        focusedInput: START_DATE,
      });
    } else {
      setState(data);
    }
  }

  return (
    <Select ref={ref} options={getMonths(activeMonths)} onChange={onChange} />
  );
};

export default DropDownDatepicker;

DropDownDatepicker.propTypes = propTypes;

DropDownDatepicker.defaultProps = {};
