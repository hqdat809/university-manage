/* eslint-disable @typescript-eslint/no-explicit-any */
import { Mentions, MentionProps, Avatar } from 'antd';

import './Input.scss';
const { Option } = Mentions;

interface IMentionProps extends MentionProps {
  className?: string;
  // options: Array<OptionProps & { name: string; avatar?: string }>;
  options: any;
}

const Mention = ({ className, options, ...rest }: IMentionProps) => {
  return (
    <Mentions className={`Mention ${className ?? ''}`} autoSize {...rest}>
      {options.map(({ login, avatar_url: avatar }: any) => (
        <Option key={login} value={login} className="Mention__option">
          <Avatar src={avatar} alt={login} className="Mention__option-avatar" />
          <span>{login}</span>
        </Option>
      ))}
    </Mentions>
  );
};

export default Mention;
