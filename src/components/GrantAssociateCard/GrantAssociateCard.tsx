import { Checkbox } from 'antd';

import { Avatar } from 'components/image';
import { LocationIcon } from 'assets/icons';
import { IGrantAccessSuggestion } from 'interfaces/users-interfaces';

import './GrantAssociateCard.scss';
import { CheckboxValueType } from 'antd/lib/checkbox/Group';

interface IProps {
  educatorAssociateSuggestion: IGrantAccessSuggestion;
  selectedGrantAccess?: CheckboxValueType[];
}

const GrantAssociateCard = ({ educatorAssociateSuggestion, selectedGrantAccess }: IProps) => {
  return (
    <div
      className={`${
        selectedGrantAccess?.includes(educatorAssociateSuggestion?.id) ? 'selected' : ''
      } GrantAssociateCard`}
    >
      <div className="GrantAssociateCard__avatar">
        <Avatar
          src={educatorAssociateSuggestion?.avatar}
          size={64}
          shape="square"
          style={{ border: '1px solid #F2F2F2', borderRadius: '4px' }}
        />
      </div>
      <div className="GrantAssociateCard__content">
        <div className="GrantAssociateCard__content-name">{educatorAssociateSuggestion?.name}</div>
        <div className="GrantAssociateCard__content-type">{educatorAssociateSuggestion?.type}</div>
        <div className="GrantAssociateCard__content-country">
          <LocationIcon className="GrantAssociateCard__icon-country" />{' '}
          {`${educatorAssociateSuggestion?.city?.name} ${educatorAssociateSuggestion?.country?.name}`}
        </div>
      </div>
      <div className="GrantAssociateCard__checkbox">
        <Checkbox value={educatorAssociateSuggestion?.id} />
      </div>
    </div>
  );
};

export default GrantAssociateCard;
