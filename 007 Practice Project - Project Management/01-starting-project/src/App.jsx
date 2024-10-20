import { useState } from "react";

import AddProject from "./components/AddProject.jsx";
import ProjectDetails from "./components/ProjectDetail.jsx";
import ProjectDisplay from "./components/ProjectDisplay.jsx";

function App() {
  const [addProject, setAddProjeect] = useState(false);
  // const [listOfProject, setListOfProject] = useState([]);
  const [projectDetails, setProjectDetails] = useState({
    title: "",
    descprition: "",
    date: "",
  });

  function updateProjectDetails(projectTitle, projectDescription, projectDate) {
    setProjectDetails((prevValues) => {
      return {
        ...prevValues,
        title: projectTitle.current.value,
        descprition: projectDescription.current.value,
        date: projectDate.current.value,
      };
    });
    setAddProjeect(false);
    console.log(projectDetails);
  }

  function handleChange() {
    setAddProjeect(true);
  }
  function handleCancel() {
    setAddProjeect(false);
  }

  return (
    <main className="flex flex-row">
      <AddProject onChange={handleChange} />
      <div className=" w-3/4">
        {addProject ? (
          <ProjectDetails
            updateProject={updateProjectDetails}
            onCancel={handleCancel}
          />
        ) : (
          <ProjectDisplay onChange={handleChange} />
        )}
      </div>
    </main>
  );
}

export default App;
