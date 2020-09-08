import React from "react";

const TeamMembers = props => {
    console.log(props);
  return (
    <div className="team-member-list">
      <h1>Team Roster</h1>
      {props.teamMembers.map(teamMembers => (
        <div className="teamMamber" key={teamMembers.name}>
          <h2>{teamMembers.name}</h2>
          <h3>{teamMembers.role}</h3>
          <p>{teamMembers.email}</p>

          <p>{teamMembers.info}</p>
        </div>
      ))}
    </div>
  );
};

export default TeamMembers;

