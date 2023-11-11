function ControlButton({ children, onSave, nextSection }) {
  return (
    <button
      type="button"
      data-next={nextSection}
      className="btn btn-primary px-5"
      onClick={onSave}
    >
      {children}
    </button>
  );
}

export default ControlButton;
