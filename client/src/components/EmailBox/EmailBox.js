import React, { Component } from "react";
import "./EmailBox.css"



const EmailBox = props => {

    const emails = props.volunteers.map(volunteer => volunteer.email);
    console.log("emails: ", emails);
    console.log("emails: ", emails);
  


    return (
    <div className="emailBox">

        {/* <form className="singleVolunteersBox" method="post" action={`mailto:${emails}`}>
     
            <div className="form-group">
                <label >Select a Specifit Email Address</label>
                <select className="form-control" id="exampleFormControlSelect1" placeholder="Email Addresses" >
                {props.volunteers.map(volunteer => (
                <option key={volunteer._id} name="email">{volunteer.email}</option>
                ))}  
                </select>
            </div>
            
            <button type="submit" className="btn btn-primary">Email</button>
        </form> */}
       
        <form className="allVolunteersBox" method="post" action={`mailto:${emails}`}>
         
            <div>
            <label >Email All Volunteers</label>
            </div>
            <button type="submit" className="btn btn-primary emailBtn">Email</button>
        </form>
   
    </div>

    );
 }



export default EmailBox;