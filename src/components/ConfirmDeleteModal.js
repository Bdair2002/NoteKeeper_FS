const ConfirmDeleteModal = ({ handleDelete, dialogRef, closeDialog }) => {
  return (
    <dialog ref={dialogRef}>
      <form method="dialog">
        <p className="dialog__title">This note will be deleted</p>
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
