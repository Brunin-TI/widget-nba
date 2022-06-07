import { ChevronDownIcon } from "@heroicons/react/outline";
import React from "react";
import Column from "../atoms/column";
import Row from "../atoms/row";

export interface WidgetFooterProps {}
const WidgetFooter: React.FC<WidgetFooterProps> = () => {
  return (
    <Column
      className="relative h-[55px] w-full items-center justify-center bg-[#f8f9fa] border-t border-solid border-[#dadce0]  cursor-pointer  "
      onClick={() => {}}
    >
      <Row className="absolute w-[42px] h-[42px] -mt-12 items-center justify-center rounded-full  bg-primary z-3">
        <ChevronDownIcon className="text-white font-normal w-5 h-5" />
      </Row>
      <Row className="w-full items-center justify-center mt-4">
        <span className="text-sm font-normal text-[#202124]">Ver mais</span>
      </Row>
    </Column>
  );
};

export default WidgetFooter;
