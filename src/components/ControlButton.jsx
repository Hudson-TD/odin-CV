function ControlButton({ children }) {
  return (
    <button type="button" className="btn btn-primary px-5">
      {children}
    </button>
  );
}

export default ControlButton;
