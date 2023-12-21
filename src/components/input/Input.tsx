import { Input as InputAnt, InputProps } from "antd";
import { EyeInvisibleOutlined, EyeTwoTone } from "@ant-design/icons";

interface IInputProps extends InputProps {
  className?: string;
}

const Input = ({ className, type, ...rest }: IInputProps) => {
  const inputClassName = `Input ${className ?? ""} `;

  if (type === "password")
    return (
      <InputAnt.Password
        className={inputClassName}
        iconRender={(visible) =>
          visible ? <EyeTwoTone /> : <EyeInvisibleOutlined />
        }
        {...rest}
      />
    );
  return (
    <InputAnt
      className={inputClassName}
      {...rest}
      type={type || "text"}
      placeholder=" "
    />
  );
};

export default Input;
