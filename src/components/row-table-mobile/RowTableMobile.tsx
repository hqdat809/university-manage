import { ReactNode, Fragment } from 'react';
import { PrimarySkeleton } from '../skeleton';

import './RowTableMobile.scss';

interface IDataRow {
  label: string;
  value: string | ReactNode;
  line?: boolean;
}

interface IProps {
  dataRowTable: IDataRow[][];
  componentAction: ReactNode;
  locateComponentAction: 'top' | 'bottom';
  loading?: boolean;
}

const RowTableMobile = ({ dataRowTable, loading, locateComponentAction, componentAction }: IProps) => {
  return (
    <>
      {loading ? (
        <PrimarySkeleton className="RowTableMobile__loading" />
      ) : (
        <div className="RowTableMobile">
          {locateComponentAction === 'top' && (
            <>
              <div className="RowTableMobile__action">{componentAction}</div>
              <span className="RowTableMobile__line"></span>
            </>
          )}
          {dataRowTable?.map((data: IDataRow[], index: number) => {
            if (data.length === 1) {
              return (
                <>
                  <div className="RowTableMobile__item" key={index}>
                    <span className="RowTableMobile__item-label">{data[0].label}</span>
                    <span className="RowTableMobile__item-value">{data[0].value}</span>
                  </div>
                  {data[0].line && <span className="RowTableMobile__line"></span>}
                </>
              );
            } else {
              return (
                <>
                  <div className="RowTableMobile__item RowTableMobile__item-separate">
                    {data.map((data: IDataRow, index: number) => (
                      <Fragment key={index}>
                        <div className="RowTableMobile__item-separate-item">
                          <span className="RowTableMobile__item-label">{data.label}</span>
                          <span className="RowTableMobile__item-value">{data.value}</span>
                        </div>
                      </Fragment>
                    ))}
                  </div>
                  {data[0].line && <span className="RowTableMobile__line"></span>}
                </>
              );
            }
          })}
          {locateComponentAction === 'bottom' && <div className="RowTableMobile__action">{componentAction}</div>}
        </div>
      )}
    </>
  );
};

export default RowTableMobile;
