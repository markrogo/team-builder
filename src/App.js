import React, { useState } from "react";
import ReactDOM from "react-dom";
import TeamMembers from "./components/TeamMembers";
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
      title: "President",
      body:
      "Mark joined the team at the start. He is in charge of the team."    },
      {
        name: "Chelsea Wetzel",
        title: "Section Lead",
        body:
        "Chelsea is a first time section lead at Lambda. She's a star."    }
  ]);

  const addTeamMember = (formData) => {
    // 
    const newTeamMember = {
      // this is the newNote setup
      name: formData.name,
      title: formData.title,
      body: formData.body
      };
      // now we have to add it
      setTeamMembers([...teamMembers, newTeamMember]);
    



  };

  return (
    <div className="App">
      <h1>My Notes</h1>
      {/* {/* <NoteForm addNewNote={addNewNote}/> */}
      <TeamMembers teamMembers={teamMembers} />
    </div>
  );
}

export default App;