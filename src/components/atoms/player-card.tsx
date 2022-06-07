/* eslint-disable @next/next/no-img-element */
import React from "react";
import { classNameBuilder } from "../../helpers/class-name-builder";
import { PlayerType } from "../../types/player-type";

export interface PlayerCardProps {
  player: PlayerType;
}
const PlayerCard: React.FC<PlayerCardProps> = ({ player }) => {
  return (
    <div
      className={classNameBuilder(
        "relative w-[96px] h-[190px] bg-white border border-[#dadce0] rounded-lg flex flex-col mx-4 my-4"
      )}
    >
      <div className="w-full min-h-[96px] ">
        <img
          className="object-cover w-[96px] h-[96px] rounded-t-lg"
          alt={player.first_name}
          src={`https://nba-players.herokuapp.com/players/${player?.last_name?.toLocaleLowerCase()}/${player?.first_name.toLocaleLowerCase()}`}
          onError={({ currentTarget }) => {
            currentTarget.src =
              "https://portal1.iff.edu.br/desenvolvimento-institucional/imagens/avatar.jpg";
          }}
        />
      </div>
      <div className="flex flex-col px-2 py-2 space-y-1">
        <span className="text-sm font-normal overflow-hidden text-ellipsis  text-100">
          {player.first_name}
          <br />
          {player.last_name}
        </span>
        <span className="text-xs font-normal overflow-hidden text-ellipsis  text-50">
          {player?.position}
        </span>
        <span className="text-xs font-normal overflow-hidden text-ellipsis  text-50">
          {player.team.name}
        </span>
      </div>
    </div>
  );
};

export default PlayerCard;
