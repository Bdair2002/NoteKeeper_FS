import { useState, useEffect } from "react";

const EditNoteModal = ({ selectedNote, handleEdit, editRef, closeDialog }) => {
  const [note, setNote] = useState(selectedNote);
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);

  useEffect(() => {
    setNote(selectedNote);
    setTitle(selectedNote.title);
    setContent(selectedNote.content);
  }, [selectedNote]);

  return (
    <dialog className="edit_modal" ref={editRef}>
      <form method="dialog">
        <p className="dialog__title">Edit Note</p>
        <input
          onChange={(e) => setTitle(e.target.value)}
          className="edit_title"
          type="text"
          name=""
          id=""
          value={title}
        />
        <input
          onChange={(e) => setContent(e.target.value)}
          className="edit_content"
          type="text"
          name=""
          id=""
          value={content}
        />
        <div className="btns">
          <button
            onClick={() => {
              const note = {
                title,
                content,
              };
              handleEdit(selectedNote._id, note);
            }}
            className="btn confirm"
          >
            Save
          </button>
          <button
            onClick={() => {
              closeDialog("edit");
            }}
            className="btn cancel"
          >
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default EditNoteModal;
