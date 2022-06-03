/* eslint-disable react/display-name */
import React from "react";
export interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

const Row: React.FC<RowProps> = React.forwardRef<HTMLInputElement, RowProps>(
  ({ className = "", children, ...props }, ref) => {
    return (
      <div ref={ref} className={`flex flex-row ${className} }`} {...props}>
        {children}
      </div>
    );
  }
);

export default Row;
