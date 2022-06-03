/* eslint-disable react/display-name */
import React from "react";

export interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Column: React.FC<ColumnProps> = React.forwardRef<
  HTMLInputElement,
  ColumnProps
>(({ className = "", children, ...props }, ref) => {
  return (
    <div ref={ref} className={`flex flex-col ${className}`} {...props}>
      {children}
    </div>
  );
});

export default Column;
