import React, { useState } from "react";
import ReactDOM from "react-dom";
import TeamMembers from "./components/TeamMembers";
import NewTeamMember from "./components/NewTeamMember";
import TeamMemberForm from "./components/NewTeamMember";
// import NoteForm from "./components/NoteForm";


// add a new note
// -- create a function
// -- hold the data somewhere
// -- push the data onto the state

// create a form to make a new note
// -- inputs for the data
// -- button for submit
// onSubmit function to hook up to the state

// update/delete notes


function App() {
  const [teamMembers, setTeamMembers] = useState([
    {
      name: "Mark Rogowsky",
      email: "mark-rogowsky@lambdastudents.com",
      role: "Student",
      body:
      "Mark joined the team at the start. He is one of the team."    },
      {
        name: "Chelsea Wetzel",
        email: "chelsea-wetzel@lambdastudents.com",
        role: "Section Lead",
        body:
        "Chelsea is a first time section lead at Lambda. She's a star."    }
  ]);

  const addTeamMember = (formData) => {
    // 
    const newTeamMember = {
      // this is the newNote setup
      name: formData.name,
      email: formData.email,
      role: formData.role,
      body: formData.body
      };
      // now we have to add it
      setTeamMembers([...teamMembers, newTeamMember]);
    



  };

  return (
    <div className="App">
      <h1>My Notes</h1>
      <TeamMemberForm addTeamMember={addTeamMember}/>
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;