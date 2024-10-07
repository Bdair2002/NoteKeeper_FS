import NoteCard from "./NoteCard";

const NoteList = ({ openDialog, notes, onDelete }) => {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <NoteCard
          openDialog={openDialog}
          key={note._id}
          note={note}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoteList;
