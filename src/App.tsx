import React from 'react';
import ClickCounter from './components/ClickCounter';
import reactLogo from './assets/react.svg';
import webpackLogo from './assets/webpack.svg';
import './App.scss';

const App: React.FC<{ title: string }> = ({ title }) => {
  return (
    <>
      <div>
        <a href="https://webpack.js.org/" target="_blank" rel="noreferrer">
          <img src={webpackLogo} className="logo" alt="Webpack logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{title}</h1>

      <ClickCounter />

      <p className="read-the-docs">
        This project template was created by{' '}
        <a
          href="https://a-samatov.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Azizbek Samatov
        </a>
      </p>
    </>
  );
};

export default App;
