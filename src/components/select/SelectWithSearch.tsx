import { Select, SelectProps, Spin } from 'antd';

import { TSelectOption } from 'interfaces/common-interfaces';
import { Avatar } from 'components/image';
import './SelectWithSearch.scss';

const { Option } = Select;

interface IProps extends Omit<SelectProps, 'options'> {
  className?: string;
  options: TSelectOption[];
  loading?: boolean;
  isShowAvatar?: boolean;
}

const SelectWithSearch = ({ className, options, loading, isShowAvatar, ...rest }: IProps) => {
  return (
    <Select
      className={`SelectWithSearch ${className ?? ''}`}
      optionLabelProp="label"
      placeholder="Enter Profile Name"
      filterOption={false}
      loading={loading}
      dropdownStyle={{ zIndex: '300000' }}
      showSearch={false}
      {...rest}
    >
      {options.map((option) => (
        <Option key={option.value} value={option.value} label={option.label} className="SelectWithSearch__option">
          {option.icon}
          {isShowAvatar && <Avatar src={option.url} className="SelectWithSearch__option-avatar" />}
          {option.label}
        </Option>
      ))}
    </Select>
  );
};

export default SelectWithSearch;
