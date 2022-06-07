import api from "../libs/api";
import { PlayerType } from "../types/player-type";
const GetAllPlayersService = async () => {
  try {
    const req = await api.get("players");
    const res = req;
    return res.data.data as PlayerType[];
  } catch (error) {
    console.log(error, "Error in GetAllPlayersService");
  }
};

export default GetAllPlayersService;
