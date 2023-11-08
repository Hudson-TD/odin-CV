import { useState } from "react";
import FormsList from "./components/FormsList";
import Header from "./components/Header";

function App() {
  const [currentSection, setCurrentSection] = useState("General Information");

  function handleSectionChange(e) {
    let newSection = e.target.getAttribute("data-section");
    setCurrentSection(newSection);
  }

  return (
    <div>
      <Header onChange={handleSectionChange} currentSection={currentSection} />
      <FormsList activeForm={currentSection} />
    </div>
  );
}

export default App;
