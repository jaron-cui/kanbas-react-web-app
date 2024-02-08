import React, { useState } from "react";
import "./index.css";
import { modules } from "../../Database";
import { FaEllipsisV, FaCheckCircle, FaPlusCircle } from "react-icons/fa";
import { useParams } from "react-router";
function ModuleList() {
  const { courseId } = useParams();
  const modulesList = modules.filter((module) => module.course === courseId);
  const [selectedModule, setSelectedModule] = useState(modulesList[0]);
  return (
    <div className="w-100 h-100">
      <div>
        <button>Collapse All</button>
        <button>View Progress</button>
        <select id="select-publish">
          <option value="PUBLISHALL" selected>Publish All</option>
          <option value="PUBLISHNONE">Publish None</option>
        </select>
        <button style={{backgroundColor: "red", color: "white"}}><i className="fa fa-plus ms-2"></i> Module</button>
      </div>
      <hr/>
      <ul className="list-group wd-modules w-100">
        {modulesList.map((module) => (
          <li 
            className="list-group-item w-100"
            onClick={() => setSelectedModule(module)}>
            <div>
              <FaEllipsisV className="me-2" />
              {module.name}
              <span className="float-end">
                <FaCheckCircle className="text-success" />
                <FaPlusCircle className="ms-2" />
                <FaEllipsisV className="ms-2" />
              </span>
            </div>
            {selectedModule._id === module._id && (
              <ul className="list-group">
                {module.lessons?.map((lesson) => (
                  <li className="list-group-item">
                    <FaEllipsisV className="me-2" />
                    {lesson.name}
                    <span className="float-end">
                      <FaCheckCircle className="text-success" />
                      <FaEllipsisV className="ms-2" />
                    </span>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default ModuleList;