import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";
import { KanbasState } from "../../store";
import './index.css';

const COLORS = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
function stupidString(s: string): JSX.Element[] {
  return s.split('').map((l, i) => <span style={{color: COLORS[i % COLORS.length]}}>{l}</span>);
}

function ModuleList() {
  const { courseId } = useParams();
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
            onClick={() => dispatch(addModule({ ...module, course: courseId }))}>
            Add
          </button>
          <button
            onClick={() => dispatch(updateModule(module))}>
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
                onClick={() => dispatch(deleteModule(module._id))}>
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