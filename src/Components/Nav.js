import { NavLink } from "react-router-dom"
import { useState } from "react";
import './Nav.css'

export let Nav = () => {

    let [searchId, setUser] = useState();

    const update = (e) => {
        setUser(e.target.value);
        console.log(searchId);
    }



    return (
        <section className="mySection">
        <h2 className="myHead">Student Database</h2>
            <nav className="myNav">
                    <NavLink to="/student/showall"><button className="myBtn" class="btn btn-primary" type="button">Show All</button></NavLink>&nbsp;&nbsp;
                    <NavLink to="/student/add"><button className="myBtn" class="btn btn-primary" type="button">Add</button></NavLink>&nbsp;&nbsp;
                    <NavLink to="/student/update"><button  className="myBtn" class="btn btn-primary" type="button">Update Student</button></NavLink>
                
            </nav>

<div className="Search">
        <div className="d-flex justify-content-center mt-3">
         <input type="number" onChange={update} value={searchId} placeholder="Enter Student ID "></input>&nbsp;
          <NavLink to={`/student/search/${searchId}`}> 
              <button class="btn btn-primary" >Search</button>
         </NavLink>
      </div>
 </div>
        </section>
    )
}