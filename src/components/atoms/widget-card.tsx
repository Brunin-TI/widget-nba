import React from "react";
import { classNameBuilder } from "../../helpers/class-name-builder";

export interface WidgetCardProps {
  className?: string;
  children: React.ReactNode;
}
const WidgetCard: React.FC<WidgetCardProps> = ({ children }) => {
  return (
    <div
      className={classNameBuilder(
        "relative w-[652px] h-[735px] bg-white border border-[#dadce0] rounded-lg mt-20 ml-10"
      )}
    >
      {children}
    </div>
  );
};

export default WidgetCard;
