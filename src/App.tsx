import "./styles.css";
import { YourSolution } from "./components/YourSolution";
import { Instructions } from "./components/Instructions";
import React from 'react';

export default function App() {
  return (
    <div className="App">
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link
        href="https://fonts.googleapis.com/css2?family=Raleway:wght@500;700&display=swap"
        rel="stylesheet"
      />
      <Instructions />
      <YourSolution />
    </div>
  );
}
