import React, { useState, useRef } from "react";

const EditableTable = () => {
  const [data, setData] = useState([
    { id: 1, name: "Ram", age: 25 },
    { id: 2, name: "Shyam", age: 30 },
    { id: 3, name: "Ali", age: 35 },
    { id: 4, name: "Shaw", age: 20 },
    { id: 5, name: "Tavneet", age: 50 },
    { id: 6, name: "Lakshmi", age: 40 }
  ]);

  const editedRows = useRef(new Set());

  const handleCellChange = (event, id, field) => {
    const newData = data.map((row) =>
      row.id === id ? { ...row, [field]: event.target.value } : row
    );
    setData(newData);
    editedRows.current.add(id);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Edited rows:", Array.from(editedRows.current));
    // save changes to server
    editedRows.current.clear();
  };

  return (
    <form onSubmit={handleSubmit}>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr key={row.id}>
              <td>{row.id}</td>
              <td>
                <input
                  type="text"
                  value={row.name}
                  onChange={(event) => handleCellChange(event, row.id, "name")}
                />
              </td>
              <td>
                <input
                  type="number"
                  value={row.age}
                  onChange={(event) => handleCellChange(event, row.id, "age")}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="submit">Save changes</button>
    </form>
  );
};

export default EditableTable;
