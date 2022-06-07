import React from "react";
import useGetAllPlayers from "../api-hooks/use-get-all-players";
import useGetAllTeams from "../api-hooks/use-get-all-teams";
import NewsCard from "../components/atoms/news-card";
import Row from "../components/atoms/row";
import LeaderBoard from "../components/molecules/leaderboard";
import PlayersGrid from "../components/molecules/players-grid";
import { StatisticsTable } from "../components/molecules/statistics-table";
import { WidgetTabs } from "../components/molecules/widget-tabs";
import WidgetCard from "../components/organisms/widget-card";

export interface HomeScreenProps {}
const HomeScreen: React.FC<HomeScreenProps> = () => {
  const { data } = useGetAllPlayers();
  const { data: getAllTeams } = useGetAllTeams();
  const players = data || [];
  const teams = getAllTeams || [];
  return (
    <WidgetCard>
      <WidgetTabs
        titles={[
          { title: "Jogos" },
          { title: "Notícias" },
          { title: "Classificação" },
          { title: "Estatísticas" },
          { title: "Jogadores" },
        ]}
      >
        <Row></Row>
        {/* <NewsList news={[]}/> */}
        <NewsCard />
        <LeaderBoard teams={teams} />
        <StatisticsTable tables={statisticsData} />
        <PlayersGrid players={players} />
      </WidgetTabs>
    </WidgetCard>
  );
};

export default HomeScreen;

//Mocks
export const statisticsData = [
  {
    title: "Pontos por jogo",
    tableHeadTitle: ["Jogador", "PPG"],
    statistics: [
      {
        id: "1",
        player: {
          id: "1",
          first_name: "Joel Embiid",
          team: {
            id: "1",
            name: "76ers",
          },
        },
        ppg: 30.6,
      },
      {
        id: "2",
        player: {
          id: "2",
          first_name: "Giannis Antetokounmpo",
          team: {
            id: "1",
            name: "Bucks",
          },
        },
        ppg: 29.9,
      },
      {
        id: "3",
        player: {
          id: "3",
          first_name: "Luka Dončić",
          team: {
            id: "3",
            name: "Mavericks",
          },
        },
        ppg: 28.4,
      },
    ],
  },
  {
    title: "Rebotes por jogo",
    tableHeadTitle: ["Jogador", "RPG"],
    statistics: [
      {
        id: "1",
        player: {
          id: "1",
          first_name: "Rudy Gobert",
          team: {
            id: "1",
            name: "Jazz",
          },
        },
        rpg: 14.7,
      },
      {
        id: "2",
        player: {
          id: "2",
          first_name: "Nikola Jokic",
          team: {
            id: "2",
            name: "Nuggets",
          },
        },
        rpg: 13.8,
      },
      {
        id: "3",
        player: {
          id: "3",
          first_name: "Domantas Sabonis",
          team: {
            id: "3",
            name: "Kings",
          },
        },
        rpg: 12.1,
      },
    ],
  },
];
