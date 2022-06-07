import React from "react";
import { TeamType } from "../../types/team-type";

export interface LeaderBoardProps {
  teams: TeamType[];
}
const LeaderBoard: React.FC<LeaderBoardProps> = ({ teams }) => {
  return (
    <>
      <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 ">
        <table className="min-w-full divide-y divide-gray-300 ">
          <thead>
            <th
              scope="col"
              className="py-3.5  pr-3 text-left text-xs font-light text-50 w-full "
            >
              Equipe
            </th>
            <th
              scope="col"
              className="py-3.5  text-center text-xs font-light text-50 "
            >
              V
            </th>
            <th
              scope="col"
              className="py-3.5  text-center text-xs font-light text-50 flex flex-row justify-center "
            >
              D
            </th>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {teams.map((team) => (
              <>
                <tr key={team.id}>
                  <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-[#3c4043] space-x-6 flex flex-row  ">
                    <span className="text-100 text-sm font-light">
                      {team.id}
                    </span>
                    <span className="text-100 text-sm font-light">
                      {team.name}
                    </span>
                  </td>
                  <td className="text-100 text-sm font-light px-2">12</td>
                  <td className="text-100 text-sm font-light px-2">12</td>
                </tr>
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default LeaderBoard;
