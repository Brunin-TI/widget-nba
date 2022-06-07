import api from "../libs/api";
import { TeamType } from "../types/team-type";

const GetAllTeamsService = async () => {
  try {
    const req = await api.get("teams");
    const res = req;
    return res.data.data as TeamType[];
  } catch (error) {
    console.log(error, "Error in GetAllTeamsService");
  }
};

export default GetAllTeamsService;
