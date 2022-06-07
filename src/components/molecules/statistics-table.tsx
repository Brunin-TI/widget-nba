import React from "react";
import { StatisticType } from "../../types/statistic-type";

/* This example requires Tailwind CSS v2.0+ */
interface StatisticsTableProps {
  tables: TableProps[];
}

export const StatisticsTable: React.FC<StatisticsTableProps> = ({ tables }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-8">
      <div className="mt-8 flex flex-col">
        <div className="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          {tables.map((table, i) => (
            <Table
              statistics={table.statistics}
              title={table.title}
              tableHeadTitle={table.tableHeadTitle}
              key={i}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export interface TableProps {
  statistics: StatisticType[];
  title?: string;
  tableHeadTitle: string[];
}
const Table: React.FC<TableProps> = ({ statistics, title, tableHeadTitle }) => {
  return (
    <>
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 ">
        <span className="text-sm text-100">{title}</span>
        <table className="min-w-full divide-y divide-gray-300 ">
          <thead>
            <th
              scope="col"
              className="py-3.5  pr-3 text-left text-xs font-light text-50 w-full"
            >
              <div>{tableHeadTitle[0]}</div>
            </th>
            <th
              scope="col"
              className="py-3.5 pl-4 pr-3 text-left text-xs font-light text-50 flex items-center justify-center"
            >
              {tableHeadTitle[1]}
            </th>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {statistics.map((statistic) => (
              <tr key={statistic.id}>
                <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#3c4043] space-x-6 flex flex-row ">
                  <span className="text-100 text-sm font-light">
                    {statistic.id}
                  </span>
                  <div className="flex flex-col ">
                    <span className="text-100 text-sm font-light">
                      {statistic.player.first_name}
                    </span>
                    <span className="text-xs text-50 font-light">
                      {statistic.player.team.name}
                    </span>
                  </div>
                </td>
                <td className={`divide-y divide-gray-200`}>
                  <div className="w-full flex items-center justify-center">
                    {tableHeadTitle[1] === "PPG" ? (
                      <span className="text-100 text-base font-light">
                        {statistic?.ppg?.toFixed(1)}
                      </span>
                    ) : (
                      <span className="text-100 text-base font-light">
                        {statistic?.rpg?.toFixed(1)}
                      </span>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Table;
