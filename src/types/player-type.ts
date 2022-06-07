import { TeamType } from "./team-type";

export type PlayerType = {
  id: string;
  first_name: string;
  last_name?: string;
  position?: string;
  team: TeamType;
};
