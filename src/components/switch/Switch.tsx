import { SwitchProps, Switch } from "antd";
import "./Switch.scss";

interface ISwitchProps extends SwitchProps {}
const SwitchButton = ({ onChange, defaultChecked, ...rest }: ISwitchProps) => {
  return (
    <Switch
      {...rest}
      className="SwitchPrimary"
      onChange={onChange}
      defaultChecked={defaultChecked}
    ></Switch>
  );
};

export default SwitchButton;
