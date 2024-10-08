import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import useNotes from "./hooks/useNotes";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { useRef, useState } from "react";
function App() {
  const [selectedNote, setselectedNote] = useState(null);
  const dialogRef = useRef(null);
  const openDialog = (note) => {
    setselectedNote(note);
    dialogRef.current.showModal();
  };
  const closeDialog = () => {
    dialogRef.current.close();
  };
  const handleDelete = () => {
    removeNote(selectedNote._id);
    closeDialog();
  };

  const handleSearch = (query) => {
    searchNotesQuery(query);
  };

  const {
    notes,
    loading,
    createNote,
    removeNote,
    fetched,
    searchNotesQuery,
    found,
  } = useNotes();
  return (
    <div className="app">
      <h1 className="title">Note Keeping App</h1>
      <SearchBar onSearch={handleSearch} />
      <AddNote onAdd={createNote} />
      {fetched ? (
        loading ? (
          <p>Loading...</p>
        ) : found ? (
          <NoteList
            openDialog={openDialog}
            notes={notes}
            onDelete={handleDelete}
          />
        ) : (
          <p>No Notes Found</p>
        )
      ) : (
        <p> Failed to fetch data</p>
      )}

      <ConfirmDeleteModal
        closeDialog={closeDialog}
        handleDelete={handleDelete}
        dialogRef={dialogRef}
      />
    </div>
  );
}

export default App;
