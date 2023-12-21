import { Drawer as DrawerAnt } from "antd";

const Drawer = ({ ...rest }) => {
  return (
    <DrawerAnt
      width={520}
      {...rest}
    >
    </DrawerAnt>
  )
}

export default Drawer;