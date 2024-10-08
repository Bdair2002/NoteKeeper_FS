import { useState } from "react";

const AddNote = ({ onAdd }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const handleAddNote = () => {
    setIsClicked(!isClicked);
  };
  return (
    <div className="add-note">
      <button onClick={handleAddNote} className="btn add_note_btn">
        <span
          className={`material-symbols-outlined ${isClicked ? "rotate" : ""}`}
        >
          keyboard_arrow_down
        </span>
        <span>Add Note</span>
      </button>
      {isClicked && (
        <div className="new_note-control">
          <div className="notes_data">
            <div className="input_field">
              <input
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                required
                id="title"
                type="text"
              />
              <label htmlFor="title">Title</label>
            </div>
            <div className="input_field">
              <input
                onChange={(e) => {
                  setContent(e.target.value);
                }}
                required
                id="content"
                type="text"
              />
              <label htmlFor="content">Content</label>
            </div>
          </div>
          <div className="btns">
            <button
              onClick={() => {
                onAdd({
                  title,
                  content,
                });
                setIsClicked(false);
              }}
              className="btn confirm"
            >
              Confirm
            </button>
            <button
              onClick={() => {
                setIsClicked(false);
              }}
              className="btn cancel"
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddNote;
