import React from "react";
import TeamDetails from "./TeamDetails";
import { getMatchResult } from "../utils/utilsFrontend";
const MatchDetails = ({
  showDetails,
  participants,
  championNames: { participants: championNames },
  teams,
  server,
}) => {
  const redTeam = participants.filter(
    (participant) => participant.team === "RED"
  );
  const blueTeam = participants.filter(
    (participant) => participant.team === "BLUE"
  );
  const blueTeamResult = getMatchResult("BLUE", teams[0]);
  const redTeamResult = getMatchResult("RED", teams[0]);
  return (
    <div
      className={`card shadow-xl overflow-x-scroll md:overflow-auto backdrop-blur-sm bg-opacity-50 bg-base-200 mb-3 w-full ${
        showDetails ? "flex" : "hidden"
      }`}
    >
      <TeamDetails
        team={blueTeam}
        matchResult={blueTeamResult}
        championNames={championNames}
        server={server}
      />
      <TeamDetails
        team={redTeam}
        matchResult={redTeamResult}
        championNames={championNames.slice(5)}
        server={server}
      />
    </div>
  );
};
//42height
export default MatchDetails;
