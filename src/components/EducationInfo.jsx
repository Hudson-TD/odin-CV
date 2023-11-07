import { useState } from "react";

function EducationInfo() {
  const [generalInfo, setGeneralInfo] = useState({
    schoolName: "",
    educationLevel: "",
    startDate: "",
    graduationDate: "",
  });

  const [activeStatus, setActiveStatus] = useState(true);

  function handleEditToggle() {
    setActiveStatus(!activeStatus);
  }

  function handleChange(e) {
    const value = e.target.value;
    setGeneralInfo({
      ...generalInfo,
      [e.target.name]: value,
    });
  }

  if (activeStatus === true) {
    return (
      <div className="data-container-active">
        <h1>Education Information</h1>
        <div className="info-container-active">
          <div className="user-input-container">
            <label className="info-label">Institute Name:</label>
            <input
              className="user-input"
              name="schoolName"
              type="text"
              required
              placeholder="University of Michigan"
              value={generalInfo.schoolName}
              onChange={handleChange}
            />
          </div>
          <div className="user-input-container">
            <label className="info-label">Education Level:</label>
            <select
              className="user-input"
              name="educationLevel"
              type="text"
              required
              placeholder="Bachelors"
              value={generalInfo.educationLevel}
              onChange={handleChange}
            >
              <option value="High School Diploma">High School Diploma</option>
              <option value="Associate's">Associate&#39;s</option>
              <option value="Bachelor's">Bachelor&#39;s</option>
              <option value="Master's'">Master&#39;s</option>
              <option value="Doctorate">Doctorate</option>
            </select>
          </div>
          <div className="user-input-container">
            <label className="info-label">Start Date:</label>
            <input
              className="user-input"
              name="startDate"
              type="date"
              required
              value={generalInfo.startDate}
              onChange={handleChange}
            />
          </div>
          <div className="user-input-container">
            <label className="info-label">Graduation Date:</label>
            <input
              className="user-input"
              name="graduationDate"
              type="date"
              required
              value={generalInfo.graduationDate}
              onChange={handleChange}
            />
          </div>
          <button onClick={handleEditToggle}>Save</button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="data-container-inactive">
        <h1 className="heading-button" onClick={handleEditToggle}>
          Add Education +
        </h1>
        <div className="info-container-inactive">
          <p>{generalInfo.schoolName}</p>
          <p> {generalInfo.educationLevel}</p>
          <p>{generalInfo.startDate}</p>
          <p>{generalInfo.graduationDate}</p>
        </div>
      </div>
    );
  }
}

export default EducationInfo;
