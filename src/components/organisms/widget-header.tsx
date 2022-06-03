import Image from "next/image";
import React from "react";
import logoNBA from "../../assets/svg/nba.svg";
import Row from "../atoms/row";

export interface WidgetHeaderProps {
  onClick?: () => void;
}
const WidgetHeader: React.FC<WidgetHeaderProps> = ({ onClick }) => {
  return (
    <Row
      className=" w-full h-[64px] bg-primary rounded-t-lg items-center cursor-pointer"
      onClick={onClick}
    >
      <Row className="items-center w-full px-4 space-x-4">
        <Image src={logoNBA} alt="" width={32} height={32} />
        <span className="text-white text-xl">NBA</span>
      </Row>
    </Row>
  );
};

export default WidgetHeader;
