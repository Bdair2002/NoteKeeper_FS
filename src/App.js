import "./styles/App.css";
import SearchBar from "./components/SearchBar";
import AddNote from "./components/AddNote";
import NoteList from "./components/NoteList";
import useNotes from "./hooks/useNotes";
function App() {
  const { notes, loading, createNote, removeNote } = useNotes();
  return (
    <div className="app">
      <h1 className="title">Note Keeping App</h1>
      <SearchBar />
      {/* <AddNote onAdd={createNote} /> */}
      {loading ? (
        <p>Loading...</p>
      ) : (
        <NoteList notes={notes} onDelete={removeNote} />
      )}
    </div>
  );
}

export default App;
