import { useState } from 'react';
import { InputProps } from 'antd';

import Input from './Input';
import './Input.scss';

interface IFloatLabelInput extends InputProps {
  label: string;
  value?: string;
}

const FloatLabelInput = ({ label, ...rest }: IFloatLabelInput) => {
  const [focus, setFocus] = useState<boolean>(false);

  const isFloatedLabel = focus || (rest.value && rest.value.length !== 0);
  const labelClass = `FloatLabel__label ${isFloatedLabel ? 'floated' : ''}`;

  return (
    <div className="FloatLabel">
      <Input className="FloatLabel__input" onBlur={() => setFocus(false)} onFocus={() => setFocus(true)} {...rest} />
      <label className={labelClass}>{label}</label>
    </div>
  );
};

export default FloatLabelInput;
