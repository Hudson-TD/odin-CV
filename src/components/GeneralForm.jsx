function GeneralForm({ formData, onChange }) {
  return (
    <>
      <form className="mw-50">
        <div className="form-group">
          <label htmlFor="firstNameInput">First Name *</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            className="form-control"
            id="firstNameInput"
            onChange={onChange}
            placeholder="Jane/John"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastNameInput">Last Name *</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            className="form-control"
            id="lastNameInput"
            onChange={onChange}
            placeholder="Doe"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="emailInput">Email Address *</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            className="form-control"
            id="emailInput"
            onChange={onChange}
            placeholder="example@email.com"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneInput">Phone Number *</label>
          <input
            type="phone"
            name="phone"
            value={formData.phone}
            className="form-control"
            id="phoneInput"
            onChange={onChange}
            placeholder="555-123-9876"
            required
          />
        </div>
      </form>
    </>
  );
}

export default GeneralForm;
