const ConfirmDeleteModal = ({ handleDelete, deleteRef, closeDialog }) => {
  return (
    <dialog ref={deleteRef}>
      <form method="dialog">
        <p className="dialog__title">Note Deletion</p>
        <p className="dialog__desc">
          This note will be deleted permanently, are you sure?
        </p>
        <div className="btns">
          <button onClick={handleDelete} className="btn confirm">
            Confirm
          </button>
          <button onClick={closeDialog} className="btn cancel">
            Cancel
          </button>
        </div>
      </form>
    </dialog>
  );
};

export default ConfirmDeleteModal;
