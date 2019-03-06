import React from "react";
import "./EmailBox.css"

const EmailBox = props => {

    const emails = props.volunteers.map(volunteer => volunteer.email);
    console.log("emails: ", emails);

    return (
    <div className="emailBox">
   
     <form method="post" action={`mailto:${emails}`}>
     
            <div className="form-group">
                <label for="exampleFormControlSelect1">Select a Specifit Email Address</label>
                <select className="form-control" id="exampleFormControlSelect1" placeholder="Email Addresses">
                {props.volunteers.map(volunteer => (
                <option>{volunteer.email}</option>
                ))}  
                </select>
            </div>
            
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Email: </label>
                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Write your email here..."></textarea>
            </div>
            <button type="submit" claclassNamess="btn btn-primary">Submit</button>
        </form>
        
    </div>
    );
};

export default EmailBox;