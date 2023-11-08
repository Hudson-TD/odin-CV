function ProgressBar() {
  return (
    <div>
      <div
        className="progress m-3"
        role="progressbar"
        aria-label="Basic example"
        aria-valuenow="75"
        aria-valuemin="0"
        aria-valuemax="100"
      >
        <div className="progress-bar w-0"></div>
      </div>
    </div>
  );
}

export default ProgressBar;
