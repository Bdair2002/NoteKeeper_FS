import { useState } from "react";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const NoteCard = ({ note, onDelete }) => {
  const [mouseHovered, setmouseHovered] = useState(false);
  return (
    <div
      className="note-card"
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
        {new Date(note.createdAt).toLocaleString(undefined, {
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </p>
      {mouseHovered && (
        <span className="delete material-symbols-outlined">delete</span>
      )}
    </div>
  );
};

export default NoteCard;
