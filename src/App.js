import React from 'react';
import { ResumeProvider } from './context/ResumeContext';
import Form from './components/Form';
// import ResumePreview from './components/ResumePreview';

import ExportButton from "./components/ExportButton"
import ThemeToggle from './components/ThemeToggle';
import './styles/App.css';
import './styles/light.css';
import './styles/dark.css';

const App = () => {
  return (
    <ResumeProvider>
      <div className="app">
        <header>
          <h1>Resume Builder</h1>
          <ThemeToggle />
        </header>
        <div className='contentAndPreview'>
          <div className="content">
          <Form />
        </div>
          <div className='preview'>
        <ExportButton />
        </div>
          </div>
      </div>
    </ResumeProvider>
  );
};

export default App;
