import React, { useEffect, useState } from "react";
import { getStudents, deleteStudent } from "../api";

function StudentList() {

  const [students, setStudents] = useState([]);

  useEffect(() => {
    loadStudents();
  }, []);

  const loadStudents = async () => {
    const res = await getStudents();
    setStudents(res.data);
  };

  const handleDelete = async (id) => {
    await deleteStudent(id);
    loadStudents();
  };

  return (
    <div>
      <h2>Student List</h2>
      {students.map(student => (
        <div key={student.id}>
          {student.name} - {student.email}
          <button onClick={() => handleDelete(student.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default StudentList;