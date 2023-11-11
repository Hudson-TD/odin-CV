import { useState } from "react";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import TemplatedCV from "./TemplatedCV";
import SectionControl from "./SectionControl";

function FormsList({ activeForm, onSave }) {
  const [generalData, setGeneralData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const [educationData, setEducationData] = useState({});

  const [experienceData, setExperienceData] = useState({
    companyName: "",
    position: "",
    startDate: "",
    endDate: "",
    highlights: [],
  });

  function handleGeneralChange(e) {
    const value = e.target.value;
    setGeneralData({
      ...generalData,
      [e.target.name]: value,
    });
  }

  function handleEducationChange(e) {
    const value = e.target.value;
    setEducationData({
      ...educationData,
      [e.target.name]: value,
    });
  }

  function handleExperienceChange(e) {
    const value = e.target.value;
    setExperienceData({
      ...experienceData,
      [e.target.name]: value,
    });
  }

  if (activeForm === "General Information") {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <GeneralForm formData={generalData} onChange={handleGeneralChange} />
        <SectionControl onSave={onSave} nextSection="Education" />
      </div>
    );
  } else if (activeForm === "Education") {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <EducationForm
          formData={educationData}
          onChange={handleEducationChange}
        />
        <SectionControl onSave={onSave} nextSection="Work Experience" />
      </div>
    );
  } else if (activeForm === "Work Experience") {
    return (
      <div className="d-flex flex-column justify-content-center align-items-center">
        <ExperienceForm
          formData={experienceData}
          onChange={handleExperienceChange}
        />
        <SectionControl onSave={onSave} nextSection="Review & Download" />
      </div>
    );
  } else if (activeForm === "Review & Download") {
    return (
      <>
        <TemplatedCV />
      </>
    );
  }
}

export default FormsList;
