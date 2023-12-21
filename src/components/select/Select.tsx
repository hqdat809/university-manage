import { Select as SelectAnt, SelectProps } from 'antd';
interface IProps extends SelectProps {
  className?: string;
}

const Select = ({ className, ...rest }: IProps) => {
  return <SelectAnt allowClear className={`SelectInput ${className ?? ''}`} {...rest}></SelectAnt>;
};

export default Select;
