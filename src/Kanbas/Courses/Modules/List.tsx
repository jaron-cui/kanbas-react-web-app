import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
  setModules,
} from "./modulesReducer";
import { KanbasState } from "../../store";
import './index.css';
import * as client from "./client";

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
function stupidString(s: string): JSX.Element[] {
  return s.split('').map((l, i) => <span style={{color: COLORS[i % COLORS.length]}}>{l}</span>);
}

function ModuleList() {
  const { courseId } = useParams();
  const handleAddModule = () => {
    if (courseId === undefined) {
      console.error('Undefined course ID');
      return;
    }
    client.createModule(courseId, module).then((module) => {
      dispatch(addModule(module));
    });
  };
  const handleDeleteModule = (moduleId: string) => {
    client.deleteModule(moduleId).then((status) => {
      dispatch(deleteModule(moduleId));
    });
  };
  const handleUpdateModule = async () => {
    const status = await client.updateModule(module);
    dispatch(updateModule(module));
  };

  useEffect(() => {
    if (courseId === undefined) {
      console.error('Undefined course ID');
      return;
    }
    client.findModulesForCourse(courseId)
      .then((modules) =>
        dispatch(setModules(modules))
    );
  }, [courseId]);

  const moduleList = useSelector((state: KanbasState) => 
    state.modulesReducer.modules);
  const module = useSelector((state: KanbasState) => 
    state.modulesReducer.module);
  const dispatch = useDispatch();
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
      <ul className="list-group wd-modules">
        <li className="list-group-item">
          <button
            onClick={handleAddModule}>
            Add
          </button>
          <button
            onClick={handleUpdateModule}>
            Update
          </button>
          <input
            value={module.name}
            onChange={(e) =>
              dispatch(setModule({ ...module, name: e.target.value }))
            }/>
          <textarea
            value={module.description}
            onChange={(e) =>
              dispatch(setModule({ ...module, description: e.target.value }))
            }/>
        </li>
        {moduleList
          .filter((module) => module.course === courseId)
          .map((module, index) => (
            <li key={index} className="list-group-item">
              <button
                onClick={() => dispatch(setModule(module))}>
                Edit
              </button>
              <button
                onClick={() => handleDeleteModule(module._id)}>
                Delete
              </button>
              <h3>{stupidString(module.name)}</h3>
              <p>{stupidString(module.description)}</p>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default ModuleList;