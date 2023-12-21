import { Dropdown as DropdownAnt, DropdownProps } from 'antd';

interface IDropdownProps extends DropdownProps {
  children: React.ReactNode;
}

const Dropdown = ({ children, ...rest }: IDropdownProps) => {
  return <DropdownAnt {...rest}>{children}</DropdownAnt>;
};

export default Dropdown;
