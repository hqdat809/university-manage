import { DatePicker } from "antd";

import "components/input/Input.scss";
// import { DatePickerIcon } from "assets/icons";

const DatePickerInput = ({ ...props }: any) => {
  return (
    <DatePicker
      {...props}
      className={`${props.className} Input_antd_custom`}
      format="DD/MM/YYYY"
      // suffixIcon={<DatePickerIcon />}
    />
  );
};

export default DatePickerInput;
