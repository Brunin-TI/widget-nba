import { useQuery } from "react-query";
import GetAllPlayersService from "../services/get-all-players-service";

const QUERY_KEY = "/players";

const useGetAllPlayers = () => {
  const { data, error, isLoading, refetch } = useQuery(
    [QUERY_KEY],
    () => GetAllPlayersService(),
    {
      onSuccess: () => console.log("Successfully fetched all players"),
      onError: () => console.log("Error fetching all players"),
    }
  );
  return { data, error, isLoading, refetch };
};

export default useGetAllPlayers;
