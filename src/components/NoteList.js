import NoteCard from "./NoteCard";

const NoteList = ({ notes, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard key={note._id} note={note} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default NoteList;
