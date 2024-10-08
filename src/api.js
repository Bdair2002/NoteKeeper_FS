import axios from "axios";
const API_URL = "http://localhost:3001/notes";
export const fetchNotes = async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data.notes;
  } catch (error) {
    throw new Error("Failed to fetch data");
  }
};
export const addNote = async (note) => {
  const response = await axios.post(API_URL, note);
  return response.data;
};
export const updateNote = async (id, note) => {
  const response = await axios.put(`${API_URL}/${id}`, note);
  return response.data;
};
export const deleteNote = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
export const searchNotes = async (query) => {
  const url = query !== "" ? `${API_URL}/search?query=${query}` : `${API_URL}`;
  const response = await axios.get(url);
  return response.data.notes;
};
