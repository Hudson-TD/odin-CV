import ControlButton from "./ControlButton";

function SectionControl({ onSave, nextSection }) {
  return (
    <div className="p-5">
      <div className="d-flex">
        <ControlButton onSave={onSave} nextSection={nextSection}>
          Save
        </ControlButton>
      </div>
    </div>
  );
}

export default SectionControl;
