import { PlayerType } from "./player-type";

export type StatisticType = {
  id: string;
  player: PlayerType;
  ppg?: number;
  rpg?: number;
};
