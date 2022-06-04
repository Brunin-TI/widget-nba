import React, { PropsWithChildren } from "react";
import { classNameBuilder } from "../../helpers/class-name-builder";
import Row from "../atoms/row";

export interface TabsProps {
  children: PropsWithChildren<React.ReactNode>[];
  titles: { title: string }[];
}
export const Tabs: React.FC<TabsProps> = ({ children, titles }) => {
  const [activeTab, setActiveTab] = React.useState(titles[0].title);
  const handleTabChange = (title: string) => {
    setActiveTab(title);
  };
  return (
    <div>
      <Row className=" border-b  shadow-lg bg-primary">
        {titles.map((tab, t) => (
          <nav
            className={classNameBuilder(
              activeTab === tab.title
                ? "border-white border-b text-white"
                : "border-transparent text-white opacity-70 ",
              "w-1/4 py-4 px-1 text-center border-b-2 font-normal text-xs cursor-pointer hover:bg-[#04508E] uppercase"
            )}
            key={t}
            onClick={() => handleTabChange(tab.title)}
          >
            {tab.title}
          </nav>
        ))}
      </Row>
      {children.map((child, i) => {
        if (activeTab === titles[i].title) return <div key={i}>{child}</div>;
      })}
    </div>
  );
};
