import React, { Component } from "react";
import "./EmailBox.css"



const EmailBox = props => {

    const emails = props.volunteers.map(volunteer => volunteer.email);
    
    return (
    <div className="emailBox">

        <form className="singleVolunteersBox" method="post" action={`mailto:${props.singleEmail}`}>
     
            <div className="form-group">
                <label >Select a Specific {props.singularTitle} to Email</label>
                <select className="form-control" id="exampleFormControlSelect1" placeholder="Email Addresses" value={props.singleEmail} onChange={props.handleEmail}> >
                <option defaultValue>Choose...</option>
                {props.volunteers.map(volunteer => (
                <option key={volunteer._id} name="email">{volunteer.email}</option>
                ))}  
                </select>
            </div>
            
            <button type="submit" className="btn btn-primary emailBtn">Email</button>
        </form>
       
        <form className="allVolunteersBox" method="post" action={`mailto:${emails}`}>
         
            <div>
            <label >Email All {props.title}</label>
            </div>
            <button type="submit" className="btn btn-primary emailBtn">Email</button>
        </form>
   
    </div>

    );
 }



export default EmailBox;