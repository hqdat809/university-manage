import { Form, FormItemProps } from 'antd';

interface IFormItemProps extends FormItemProps {
  children: React.ReactNode;
}

const FormItem = ({ children, ...rest }: IFormItemProps) => {
  return (
    <Form.Item className="FormItem" hasFeedback={!!rest.rules} {...rest}>
      {children}
    </Form.Item>
  );
};

export default FormItem;
