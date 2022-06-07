import React from "react";
import { PlayerType } from "../../types/player-type";
import PlayerCard from "../atoms/player-card";

export interface PlayersGridProps {
  players: PlayerType[];
}
const PlayersGrid: React.FC<PlayersGridProps> = ({ players }) => {
  return (
    <div className="  grid grid-cols-5 gap-2 gap-y-1">
      {players.map((player) => (
        <PlayerCard key={player.id} player={player} />
      ))}
    </div>
  );
};

export default PlayersGrid;
