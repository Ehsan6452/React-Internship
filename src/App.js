import React, { useState } from 'react';
import './App.css';

import Form from './Components/FormValidation/Form';
import Quiz from './Components/QuizApp/QuizApp';
import Ticket from './Components/Ticket/Ticket';
import Library from './Components/Library/Library';

const App = () => {
  const [projectIsSelected, setProjectIsSelected] = useState(false);
  const [selectedProject, setSelectedProject] = useState('');

  const home = () => {
    setProjectIsSelected(false);
    setSelectedProject('');
  };

  const showProject = (event) => {
    event.preventDefault();
    setSelectedProject(event.currentTarget.id);
    setProjectIsSelected(true);
  };

  return (
    <section id="App">
      <div className="header">
        <i className="fas fa-home" onClick={home}></i>
      </div>
      {!projectIsSelected && (
        <div className="body">
          <h1>Choose Your Project:</h1>
          <div className="projects">
            <div id="FormValidation" className="project" onClick={showProject}>
              <h2>Form Validation</h2>
            </div>
            <div id="QuizApp" className="project" onClick={showProject}>
              <h2>Quiz App</h2>
            </div>
            <div id="Ticket" className="project" onClick={showProject}>
              <h2>Ticket</h2>
            </div>
            <div id="Library" className="project" onClick={showProject}>
              <h2>Library</h2>
            </div>
          </div>
        </div>
      )}
      {projectIsSelected && selectedProject === "FormValidation" && <Form />}
      {projectIsSelected && selectedProject === "QuizApp" && <Quiz />}
      {projectIsSelected && selectedProject === "Ticket" && <Ticket />}
      {projectIsSelected && selectedProject === "Library" && <Library />}
    </section>
  );
};

export default App;