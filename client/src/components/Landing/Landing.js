import React, { Component } from "react";
import "./Landing.css"



const Landing = props => {

  
    
    return (
    <div className="landingBox">

        <h2>Manage Volunteers</h2>
      <ul>
          <li>
              Add Volunteers to the database using the "Add Volunteer" button.
          </li>
          <li>
              View, email, or edit all Volunteers by choosing the "All Volunteers" button.
          </li> 
          <li>
            View, email, or edit the volunteers <b>in the category of your choice</b> by selecting the different types of volunteer buttons.
          </li>
      </ul>
   
    </div>

    );
 }



export default Landing;