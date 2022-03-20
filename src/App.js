import logo from "./logo.svg";
import "./App.css";
import Students from "./components/Students";
import AddStudent from "./components/AddStudent";
import { useState } from "react";

function App() {
  const initialState = [
    {
      id: 1,
      name: "Carla",
      age: 27,
      grade: "B",
    },
    {
      id: 2,
      name: "Juan",
      age: 30,
      grade: "A",
    },
    {
      id: 3,
      name: "Fabian",
      age: 26,
      grade: "A+",
    },
    {
      id: 4,
      name: "Antonio",
      age: 26,
      grade: "F",
    },
  ];

  const [students, setStudents] = useState(initialState);

  const handleNewStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Students students={students} />
        <AddStudent addNewStudent={handleNewStudent} />
      </header>
    </div>
  );
}

export default App;
