import { useState } from "react";

function GeneralInfo() {
  const [generalInfo, setGeneralInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
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
      <>
        <h1>
          General Information<button onClick={handleEditToggle}>Save</button>
        </h1>
        <div className="info-container">
          <div className="user-input-container">
            <label className="info-label">First Name:</label>
            <input
              className="user-input"
              name="firstName"
              type="text"
              required
              placeholder="John"
              value={generalInfo.firstName}
              onChange={handleChange}
            />
          </div>
          <div className="user-input-container">
            <label className="info-label">Last Name:</label>
            <input
              className="user-input"
              name="lastName"
              type="text"
              required
              placeholder="Doe"
              value={generalInfo.lastName}
              onChange={handleChange}
            />
          </div>
          <div className="user-input-container">
            <label className="info-label">Email Address:</label>
            <input
              className="user-input"
              name="email"
              type="email"
              required
              placeholder="jdoe@gmail.com"
              value={generalInfo.email}
              onChange={handleChange}
            />
          </div>
          <div className="user-input-container">
            <label className="info-label">Phone Number:</label>
            <input
              className="user-input"
              name="phone"
              type="phone"
              required
              placeholder="555-123-4567"
              value={generalInfo.phone}
              onChange={handleChange}
            />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <h1>
          General Information <button onClick={handleEditToggle}>Edit</button>
        </h1>
        <p>
          {generalInfo.firstName} {generalInfo.lastName}
        </p>
        <p>{generalInfo.email}</p>
        <p>{generalInfo.phone}</p>
      </>
    );
  }
}

export default GeneralInfo;