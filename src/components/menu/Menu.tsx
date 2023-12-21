import { Menu as MenuAnt, MenuProps } from 'antd';
import { TMenuItem, TOnClickMenuItem } from './menu-type';

interface IProps {
  className?: string;
  selectedKeys?: string;
  items: TMenuItem[];
  mode?: 'inline' | 'horizontal' | 'vertical';
  onClick?: TOnClickMenuItem;
}

const Menu = ({ className, items, mode = 'inline', selectedKeys, onClick }: IProps) => {
  const handleClickItem: MenuProps['onClick'] = (e) => {
    onClick?.(e);
  };

  return (
    <MenuAnt
      mode={mode}
      className={`Menu ${className ?? ''}`}
      onClick={handleClickItem}
      selectedKeys={[selectedKeys || '']}
      items={items}
    />
  );
};

export default Menu;
