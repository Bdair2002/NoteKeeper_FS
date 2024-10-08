import { useState, useEffect } from "react";
import {
  fetchNotes,
  addNote,
  updateNote,
  deleteNote,
  searchNotes,
} from "../api";

const useNotes = () => {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fetched, setFetched] = useState(true);
  const [found, setFound] = useState(true);

  useEffect(() => {
    const loadNotes = async () => {
      try {
        const fetchedNotes = await fetchNotes();
        setNotes(fetchedNotes);
        setLoading(false);
        setFetched(true);
      } catch (error) {
        setFetched(false);
      }
    };
    loadNotes();
  }, []);

  const createNote = async (note) => {
    try {
      const newNote = await addNote(note);
      setNotes([...notes, newNote]);
    } catch (error) {
      console.log(error);
    }
  };

  const editNote = async (id, updatedNote) => {
    const note = await updateNote(id, updatedNote);
    setNotes(notes.map((n) => (n._id === id ? note : n)));
  };

  const removeNote = async (id) => {
    await deleteNote(id);
    setNotes(notes.filter((n) => n._id !== id));
  };
  const searchNotesQuery = async (query) => {
    const notes = await searchNotes(query);
    notes.length === 0 ? setFound(false) : setFound(true);
    setNotes(notes);
  };
  return {
    notes,
    loading,
    createNote,
    editNote,
    removeNote,
    fetched,
    searchNotesQuery,
    found,
  };
};

export default useNotes;
