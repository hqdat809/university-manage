import { useState } from 'react';
import { SelectProps } from 'antd';

import Select from './Select';
import './FloatLabelSelect.scss';
import { CaretDownOutlined } from '@ant-design/icons';

interface IProps extends SelectProps {
  label: string;
}

const FloatLabelSelect = ({ label, ...rest }: IProps) => {
  const [focus, setFocus] = useState(false);
  const isFloatedLabel = focus || (rest.value && rest.value.length !== 0);
  const labelClass = `FloatLabel__label ${isFloatedLabel ? 'floated' : ''}`;

  return (
    <div className="FloatLabel">
      <Select
        showSearch
        onBlur={() => setFocus(false)}
        onFocus={() => setFocus(true)}
        className="FloatLabel__input"
        optionFilterProp="label"
        suffixIcon={<CaretDownOutlined className="ant-select-suffix" />}
        {...rest}
      />
      {label && <div className={`FloatLabel__label ${labelClass ?? ''}`}>{label}</div>}
    </div>
  );
};

export default FloatLabelSelect;
