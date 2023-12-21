import { Tooltip, Tabs as TabsAnt } from 'antd';
import { ReactNode, useState } from 'react';

import './Tab.scss';

const { TabPane } = TabsAnt;

interface ITab {
  name: string;
  component: ReactNode;
  key?: string;
}
interface IProps {
  tabs?: ITab[];
  visibleTooltip?: boolean;
  defaultTab?: string;
  onChange?: (selectedTab: string) => void;
  hasScroll?: boolean;
  onScrollEnd?: () => void;
}

const Tabs = ({ tabs, onChange, defaultTab, hasScroll, visibleTooltip = false, onScrollEnd }: IProps) => {
  return (
    <div className="Tabs">
      <TabsAnt
        defaultActiveKey={defaultTab}
        onChange={(activeKey) => {
          onChange?.(activeKey);
        }}
        type="card"
        className={`Tabs__panel-header ${hasScroll && 'scoll-tab'}`}
      >
        {tabs?.map((tab: ITab, key) => (
          <TabPane
            tab={
              visibleTooltip ? (
                <Tooltip arrowPointAtCenter={true} title={tab.name}>
                  {tab.name}
                </Tooltip>
              ) : (
                tab.name
              )
            }
            key={tab?.key || key}
          >
            {tab.component}
          </TabPane>
        ))}
      </TabsAnt>
    </div>
  );
};

export default Tabs;
