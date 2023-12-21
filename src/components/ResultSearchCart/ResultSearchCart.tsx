import { Avatar } from 'components/image';
import { LocationIcon } from 'assets/icons';
import './ResultSearchCart.scss';

interface IProps {
  data: any;
  onClick?: () => void;
}
const ResultSearchCart = ({ data, onClick }: IProps) => {
  return (
    <div onClick={onClick} className="ResultSearchCart">
      <Avatar className="ResultSearchCart__avatar" src={data?.avatar} size={36} />
      <div className="ResultSearchCart__info">
        <span className="ResultSearchCart__info-name">{data?.name || ''}</span>
        <span className="ResultSearchCart__info-address">
          <LocationIcon style={{ marginRight: '3px' }} />
          {`${data?.city?.name},${data?.country?.name}`}
        </span>
      </div>
    </div>
  );
};

export default ResultSearchCart;
