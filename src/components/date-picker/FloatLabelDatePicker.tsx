import { SelectProps } from 'antd';
import { Moment } from 'moment';
import { useState } from 'react';

import DatePickerInput from './DatePickerInput';

interface IProps extends SelectProps {
  label: string;
  disabledDate?: (currentDate: Moment) => boolean;
}

const FloatLabelDatePicker = ({ label, disabledDate, ...rest }: IProps) => {
  const [focus, setFocus] = useState(false);

  const isFloatedLabel = focus || (rest.value && rest.value.length !== 0);
  const labelClass = `FloatLabel__label ${isFloatedLabel ? 'floated' : ''}`;

  return (
    <div className="FloatLabel">
      <DatePickerInput
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        className="FloatLabel__input"
        disabledDate={disabledDate}
        {...rest}
      />
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabelDatePicker;
