import React, { useState } from "react";
import TeamMembers from "./TeamMembers";

const TeamMemberForm = (props) => {
  // console.log("this is our props",props);
  console.log("Team member form props :", props);
  const [teamMember, setTeamMember] = useState({
    name: "",
    title: "",
    role: "",
    body: ""
  });

  const changeHandler = (e) => {
    console.log(e.target.value);
    console.log("team member ", teamMember);

    // spread operator
    // e,target
    setTeamMember({
      ...teamMember,
      [e.target.name]: e.target.value
    });
  };

  const submitForm = (e) => {
    e.preventDefault();
    props.addTeamMember(teamMember);
  };
  
  return (
    <form onSubmit={submitForm}>
      <label htmlFor="Nane">Name</label>
      <input
        type="text"
        name="name"
        value={teamMember.name}
        onChange={changeHandler}
      />
      <label htmlFor="Role">Role</label>
      <input
        type="text"
        name="role"
        value={teamMember.role}
        onChange={changeHandler}
      />
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        name="email"
        value={teamMember.email}
        onChange={changeHandler}
      />

      <label htmlFor="body">Body</label>
      <input
        type="textarea"
        name="body"
        value={teamMember.body}
        onChange={changeHandler}
      />

      <button type="submit">Add New Team Member</button>
    </form>
  );
};

export default TeamMemberForm;
