import ControlButton from "./ControlButton";

function SectionControl() {
  return (
    <div className="d-flex">
      <ControlButton>Previous</ControlButton>
      <ControlButton>Next</ControlButton>
    </div>
  );
}

export default SectionControl;
