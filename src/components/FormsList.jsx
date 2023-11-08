import { useState } from "react";
import GeneralForm from "./GeneralForm";
import EducationForm from "./EducationForm";
import ExperienceForm from "./ExperienceForm";
import TemplatedCV from "./TemplatedCV";

function FormsList({ activeForm }) {
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
      </div>
    );
  } else if (activeForm === "Education") {
    return (
      <>
        <EducationForm
          formData={educationData}
          onChange={handleEducationChange}
        />
      </>
    );
  } else if (activeForm === "Work Experience") {
    return (
      <>
        <ExperienceForm
          formData={experienceData}
          onChange={handleExperienceChange}
        />
      </>
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
