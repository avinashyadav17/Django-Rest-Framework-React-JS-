import React, { useState } from "react";
import { createStudent } from "../api";

function StudentForm() {

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [age,setAge] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createStudent({name,email,age});

    setName("");
    setEmail("");
    setAge("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add Student</h2>

      <input
        placeholder="Name"
        value={name}
        onChange={e => setName(e.target.value)}
      />

      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />

      <input
        placeholder="Age"
        value={age}
        onChange={e => setAge(e.target.value)}
      />

      <button type="submit">Add</button>
    </form>
  );
}

export default StudentForm;