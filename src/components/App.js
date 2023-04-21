import React from "react";
import './../styles/App.css';
import EditableTable from "./EditableTable";

const App = () => {
  return (
    <div>
      <h1>Track edited cells to log updates for future</h1>
      <EditableTable />
    </div>
  );
};

export default App;
