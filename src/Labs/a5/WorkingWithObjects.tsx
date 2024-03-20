import axios from "axios";
import React, { useEffect, useState } from "react";
function WorkingWithObjects() {
  const [assignment, setAssignment] = useState({
    id: 1, title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10", completed: false, score: 0,
  });
  const [module, setModule] = useState({
    id: "id",
    name: "Module Name",
    description: "boring",
    course: "CS4455"
  });

  const ASSIGNMENT_URL = "http://localhost:4000/a5/assignment";
  const fetchAssignment = async () => {
    const response = await axios.get(`${ASSIGNMENT_URL}`);
    setAssignment(response.data);
  };
  const updateTitle = async () => {
    const response = await axios
      .get(`${ASSIGNMENT_URL}/title/${assignment.title}`);
    setAssignment(response.data);
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div>
      <h3>Working With Objects</h3>
      <h3>Modifying Properties</h3>
      <input onChange={(e) => setAssignment({
            ...assignment, title: e.target.value })}
        value={assignment.title} type="text" />
      <button onClick={updateTitle} >
        Update Title to: {assignment.title}
      </button>
      <button onClick={fetchAssignment} >
        Fetch Assignment
      </button>
      <h4>Retrieving Objects</h4>
      <a href="http://localhost:4000/a5/assignment" className="btn btn-primary">
        Get Assignment
      </a>
      <a href="http://localhost:4000/a5/module" className="btn btn-primary">
        Get Module
      </a>
      <h4>Retrieving Properties</h4>
      <a href="http://localhost:4000/a5/assignment/title" className="btn btn-primary">
        Get Title
      </a>
      <a href="http://localhost:4000/a5/module/name" className="btn btn-primary">
        Get Module Name
      </a>
      <h4>Modifying Properties</h4>
      <a href={`${ASSIGNMENT_URL}/title/${assignment.title}`} className="btn btn-primary">
        Update Title
      </a>
      <a href={`http://localhost:4000/a5/module/name/${module.name}`} className="btn btn-primary">
        Update Module Name
      </a>
      <a href={`http://localhost:4000/a5/assignment/score/${assignment.score}`} className="btn btn-primary">
        Update Assignment Score
      </a>
      <a href={`http://localhost:4000/a5/assignment/completed/${assignment.completed}`} className="btn btn-primary">
        Update Assignment Completed
      </a>
      <input type="text" 
        onChange={(e) => setAssignment({ ...assignment,
            title: e.target.value })}
        value={assignment.title}/>
      <input type="text" 
        onChange={(e) => setModule({ ...module,
            name: e.target.value })}
        value={module.name}/>
      <input type="number" 
        onChange={(e) => setAssignment({ ...assignment,
            score: Number(e.target.value) })}
        value={assignment.score}/>
      <input type="checkbox" 
        onChange={(e) => setAssignment({ ...assignment,
            completed: !!e.target.value })}
        checked={assignment.completed}/>
    </div>
  );
}
export default WorkingWithObjects;