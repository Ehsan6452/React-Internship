import React, { useState } from 'react';
import './App.css';

import Form from './Components/FormValidation/Form';
import Quiz from './Components/QuizApp/QuizApp';
import Ticket from './Components/Ticket/Ticket';
import Library from './Components/Library/Library';
import TodoList from './Components/TodoList/TodoList';
import CurrencyConersion from './Components/CurrencyConersion/CurrencyConersion';
import MoviePlatform from './Components/MoviePlatform/MoviePlatform';

export default function App (){
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
            <div id="TodoList" className="project" onClick={showProject}>
              <h2>TodoList</h2>
            </div>
            <div id="CurrencyConersion" className="project" onClick={showProject}>
              <h2>Currency Conersion</h2>
            </div>
            <div id="MoviePlatform" className="project" onClick={showProject}>
              <h2>Movie Platform</h2>
            </div>
          </div>
        </div>
      )}
      {projectIsSelected && selectedProject === "FormValidation" && <Form />}
      {projectIsSelected && selectedProject === "QuizApp" && <Quiz />}
      {projectIsSelected && selectedProject === "Ticket" && <Ticket />}
      {projectIsSelected && selectedProject === "Library" && <Library />}
      {projectIsSelected && selectedProject === "TodoList" && <TodoList />}
      {projectIsSelected && selectedProject === "CurrencyConersion" && <CurrencyConersion />}
      {projectIsSelected && selectedProject === "MoviePlatform" && <MoviePlatform />}
    </section>
  );
}