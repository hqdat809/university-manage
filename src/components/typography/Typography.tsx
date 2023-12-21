import { Typography } from 'antd';
import { EllipsisConfig } from 'antd/lib/typography/Base';

import './Typography.scss';

interface IProps {
  className?: string;
  children: React.ReactNode;
}

interface ITitle extends IProps {
  level?: 1 | 2 | 3 | 4 | 5;
  weight?: 'medium' | 'bold';
}

interface IParagraph extends IProps {
  ellipsis?: boolean | EllipsisConfig;
}

const { Title: TitleAnt, Text: TextAnt, Paragraph: ParagraphAnt } = Typography;

const Title = ({ children, className, weight, ...rest }: ITitle) => {
  return (
    <TitleAnt className={`Title ${className} ${weight} `} {...rest}>
      {children}
    </TitleAnt>
  );
};

const Text = ({ className, children }: IProps) => {
  return <TextAnt className={`Text ${className}`}>{children}</TextAnt>;
};

const Paragraph = ({ className, children, ...rest }: IParagraph) => {
  return (
    <ParagraphAnt {...rest} className={`${className}`}>
      {children}
    </ParagraphAnt>
  );
};

export { Title, Text, Paragraph };
