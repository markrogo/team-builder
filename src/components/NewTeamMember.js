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
      <label htmlFor="role">Role
        <select
        value={teamMember.role}
        name="role"
        onChange={changeHandler}>
       <option value ="">Select from the dropdown</option>
                <option value="Product Manager">Product Manager</option>
                <option value="Frontend Engineer">Frontend Engineer</option>
                <option value="Backend Engineer">Backend Engineer</option>
                <option value="UX Designer">UX Designer</option>
                </select>
                

      </label>
      <label htmlFor="Email">Email</label>
      <input
        type="email"
        name="email"
        value={teamMember.email}
        onChange={changeHandler}
      />

      <label htmlFor="info">Info</label>
      <input
        type="textarea"
        name="info"
        value={teamMember.info}
        onChange={changeHandler}
      />

      <button type="submit">Add New Team Member</button>
    </form>
  );
};

export default TeamMemberForm;
