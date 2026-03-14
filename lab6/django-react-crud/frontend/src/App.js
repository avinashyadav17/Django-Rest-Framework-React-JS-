import React from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div>
      <h1>Django React CRUD</h1>
      <StudentForm/>
      <StudentList/>
    </div>
  );
}

export default App;