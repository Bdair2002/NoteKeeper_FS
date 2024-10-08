import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import useNotes from "./hooks/useNotes";
import ConfirmDeleteModal from "./components/ConfirmDeleteModal";
import { useRef, useState } from "react";
import EditNoteModal from "./components/EditNoteModal";

function App() {
  const [selectedNote, setSelectedNote] = useState(null);
  const deleteRef = useRef(null);
  const editRef = useRef(null);
  const refs = {
    edit: editRef,
    delete: deleteRef,
  };
  const openDialog = (note, action) => {
    setSelectedNote(note);
    refs[action]?.current?.showModal();
  };

  const closeDialog = (action) => {
    setSelectedNote(null);
    refs[action]?.current?.close();
  };
  const handleDelete = () => {
    removeNote(selectedNote._id);
    closeDialog("delete");
  };

  const handleSearch = (query) => {
    searchNotesQuery(query);
  };
  const handleEdit = (id, note) => {
    editNote(id, note);
    closeDialog("delete");
  };

  const {
    notes,
    loading,
    createNote,
    removeNote,
    fetched,
    editNote,
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
        deleteRef={deleteRef}
      />

      <EditNoteModal
        selectedNote={selectedNote ? selectedNote : { title: "", content: "" }}
        editRef={editRef}
        closeDialog={closeDialog}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
