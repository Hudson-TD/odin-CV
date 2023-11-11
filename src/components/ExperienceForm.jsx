function ExperienceForm({ formData, onChange }) {
  return (
    <>
      <form className="mw-50">
        <div className="form-group">
          <label htmlFor="companyNameInput">Employer Name *</label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            className="form-control"
            id="companyNameInput"
            onChange={onChange}
            placeholder="NASA"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="positionInput">Position *</label>
          <input
            type="text"
            name="position"
            value={formData.position}
            className="form-control"
            id="positionInput"
            onChange={onChange}
            placeholder="Astronaut"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="startDateInput">Start Date *</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            className="form-control"
            id="startDateInput"
            onChange={onChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="endDateInput">End Date *</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            className="form-control"
            id="endDateInput"
            onChange={onChange}
            required
          />
        </div>
      </form>
    </>
  );
}

export default ExperienceForm;
