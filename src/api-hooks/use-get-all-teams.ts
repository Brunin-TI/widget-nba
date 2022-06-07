import { useQuery } from "react-query";
import GetAllTeamsService from "../services/get-all-teams-service";

const QUERY_KEY = "/teams";

const useGetAllTeams = () => {
  const { data, error, isLoading, refetch } = useQuery(
    [QUERY_KEY],
    () => GetAllTeamsService(),
    {
      onSuccess: () => console.log("Successfully fetched all teams"),
      onError: () => console.log("Error fetching all teams"),
    }
  );
  return { data, error, isLoading, refetch };
};

export default useGetAllTeams;
