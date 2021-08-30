import React from "react";
import PropTypes from "prop-types";
import Select from "../Select";
import dayjs from "dayjs";

const propTypes = {
  label: PropTypes.string.isRequired,
  ref: PropTypes.oneOf([
    PropTypes.func,
    // PropTypes.shape({ current: PropTypes.instanceOf(Element) }),
  ]),
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

type DropDownDatepickerProps = PropTypes.InferProps<typeof propTypes>;

const DropDownDatepicker: React.FC<DropDownDatepickerProps> = ({
  ref,
  onChange,
  label,
}) => {
  const months = React.useMemo(() => {
    const monthsCount = 12;
    return Array.from(Array(monthsCount), (_, i) => {
      return dayjs().month(i).format("MMMM");
    });
  }, []);

  const years = React.useMemo(() => {
    const yearsDiff = dayjs().diff(dayjs("1950-01-01"), "year");
    return Array.from(Array(yearsDiff), (_, i) => {
      return dayjs()
        .year(1950 + i)
        .format("YYYY");
    });
  }, []);

  const days = React.useMemo(() => {
    // static test
    const currentMonthIndex = 7;
    const daysCount = dayjs().month(currentMonthIndex).daysInMonth();
    return Array.from(Array(daysCount), (_, i) => {
      return i + 1;
    });
  }, []);

  return (
    <div className="mb-[20px] text-left">
      <h5 className="text-12 text-header-secondary font-semibold uppercase mb-[8px]">
        {label}
      </h5>
      <div className="flex justify-between">
        <div className="w-[150px]">
          <Select
            hideSeparator
            ref={ref}
            options={months.map((m, i) => ({ id: i, label: m }))}
            onChange={onChange}
          />
        </div>
        <div className="w-[100px]">
          <Select
            hideSeparator
            ref={ref}
            options={months.map((m, i) => ({ id: i, label: m }))}
            onChange={onChange}
          />
        </div>
        <div className="w-[120px]">
          <Select
            hideSeparator
            ref={ref}
            options={months.map((m, i) => ({ id: i, label: m }))}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default DropDownDatepicker;

DropDownDatepicker.propTypes = propTypes;

DropDownDatepicker.defaultProps = {};
