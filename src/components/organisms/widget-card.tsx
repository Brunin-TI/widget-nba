import React from "react";
import { classNameBuilder } from "../../helpers/class-name-builder";
import WidgetFooter from "../molecules/widget-footer";
import WidgetHeader from "../molecules/widget-header";

export interface WidgetCardProps {
  className?: string;
  children: React.ReactNode;
}
const WidgetCard: React.FC<WidgetCardProps> = ({ children }) => {
  return (
    <div
      className={classNameBuilder(
        "relative w-[652px] h-[800px] bg-white border border-[#dadce0] rounded-lg mt-20 ml-10 flex flex-col "
      )}
    >
      <WidgetHeader />
      <div className="overflow-hidden">{children}</div>

      <div className="flex flex-col justify-end absolute bottom-0 w-full z-3">
        <WidgetFooter />
      </div>
    </div>
  );
};

export default WidgetCard;
