import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { showStudents } from "../Actions/StudentAction";
import StudOperations from "../StudentData/StudentIntf";
import './Student.css';

export  const ShowStudent = ()=>{

    let studAr = useSelector((store)=>store.StudentReducer)
   let dispatch = useDispatch();

   useEffect(()=>{
    dispatch(showStudents());
   });
    return(
        <div className="myTable">
            <table className="table table-bordered border-primary">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Department</th>
                        <th>Year</th>
                        <th>Action</th>
                    </tr>
                </thead>
                {
                studAr.map((student)=>{
                    
                    return(
                        
                        <tbody >
                        <tr key={student.id}>
                            <td>{student.id}</td>
                            <td>{student.name}</td>
                            <td>{student.department}</td>
                            <td>{student.year}</td>
                            <td>
                            <NavLink to={`/students/delete/${student.id}`}><button className="btn btn-danger">Delete</button></NavLink>&nbsp;&nbsp;
                            <NavLink to={`/student/update/${student.id}`}><button className="btn btn-warning">Update</button></NavLink>
                            </td>
                        </tr>
                        </tbody>
                    );
                })
            }
            </table>
        </div>
    )
}
