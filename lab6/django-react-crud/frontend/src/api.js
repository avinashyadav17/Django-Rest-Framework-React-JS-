import axios from "axios";

const API = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const getStudents = () => API.get("students/");
export const createStudent = (data) => API.post("students/", data);
export const updateStudent = (id, data) => API.put(`students/${id}/`, data);
export const deleteStudent = (id) => API.delete(`students/${id}/`);