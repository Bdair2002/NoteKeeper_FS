import { useState } from "react";

const NoteCard = ({ openDialog, note }) => {
  const [mouseHovered, setmouseHovered] = useState(false);
  return (
    <div
      className="note-card"
      onClick={() => openDialog(note, "edit")}
      onMouseEnter={() => {
        setmouseHovered(true);
      }}
      onMouseLeave={() => {
        setmouseHovered(false);
      }}
    >
      <h2 className="card__title">{note.title}</h2>
      <p className="card__content">{note.content}</p>
      <p className="date">
        {new Date(note.createdAt).toLocaleDateString("en-GB")}
      </p>
      {mouseHovered && (
        <span
          onClick={(e) => {
            e.stopPropagation();
            openDialog(note, "delete");
          }}
          className="delete material-symbols-outlined"
        >
          delete
        </span>
      )}
    </div>
  );
};

export default NoteCard;
