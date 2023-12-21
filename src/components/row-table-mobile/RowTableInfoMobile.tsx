import { ReactNode } from 'react';

import { Avatar } from 'components/image';

import './RowTableMobile.scss';

interface IProps {
  avatar?: string;
  name: string;
  role: string;
  email: string;
  componentAction: ReactNode;
}

const RowTableInfoMobile = ({ role, email, avatar, name, componentAction }: IProps) => {
  return (
    <div className="RowTableInfoMobile">
      <div className="RowTableInfoMobile__content">
        <Avatar size={64} className="RowTableInfoMobile__image" src={avatar} />
        <div className="RowTableInfoMobile__info">
          <span className="RowTableInfoMobile__info-title">{name}</span>
          <span className="RowTableInfoMobile__info-text">{role}</span>
          <span className="RowTableInfoMobile__info-text">{email}</span>
        </div>
      </div>
      <div className="RowTableInfoMobile__action">{componentAction}</div>
    </div>
  );
};

export default RowTableInfoMobile;
