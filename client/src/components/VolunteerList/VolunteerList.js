import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col} from 'reactstrap';
import { List, ListItem } from "../../components/List";
import EmailBox from "../../components/EmailBox";
import "./VolunteerList.css"

class VolunteerList extends Component {
 state = {
   email: "",
   volunteers: [],
   singleEmail: ""
 }

 deleteVolunteer = id => {
  API.deleteVolunteer(id)
    .then(res => {
      console.log("Which btn: " + this.props.whichBtn)
      this.discern()
    })
    .catch(err => console.log(err));
};

discern = () => {
  if(this.props.whichBtn === "volunteers"){
    this.props.getVolunteers("volunteers")
  }
  if(this.props.whichBtn === "Coach"){
    this.props.getVolunteers("Coach")
  }
  if(this.props.whichBtn === "Gameday_Volunteer"){
    this.props.getVolunteers("Gameday_Volunteer")
  }
  if(this.props.whichBtn === "Field_Maintenance"){
    this.props.getVolunteers("Field_Maintenance")
  }
  if(this.props.whichBtn === "Umpire"){
    this.props.getVolunteers("Umpire")
  }
  if(this.props.whichBtn === "Team_Parent"){
    this.props.getVolunteers("Team_Parent")
  }
  if(this.props.whichBtn === "Mentor"){
    this.props.getVolunteers("Mentor")
  }
  if(this.props.whichBtn === "Benefit_Volunteer"){
    this.props.getVolunteers("Benefit_Volunteer")
  }
  if(this.props.whichBtn === "Staff"){
    this.props.getVolunteers("Staff")
  } 
}

 // Original
  // deleteVolunteer = id => {
  //   API.deleteVolunteer(id)
  //     .then(res => {
  //       console.log("Which btn: " + this.props.whichBtn)
  //       this.discern()
  //     })
  //     .catch(err => console.log(err));
  // };

  // discern = () => {
  //   if(this.props.whichBtn === "allVolunteers"){
  //     this.props.renderAll()
  //   }
  //   if(this.props.whichBtn === "coaches"){
  //     this.props.renderCoaches()
  //   }
  //   if(this.props.whichBtn === "gameday"){
  //     this.props.renderGameday()
  //   }
  //   if(this.props.whichBtn === "fieldm"){
  //     this.props.renderFieldm()
  //   }
  //   if(this.props.whichBtn === "umpires"){
  //     this.props.renderUmpires()
  //   }
  //   if(this.props.whichBtn === "teamp"){
  //     this.props.renderTeamp()
  //   }
  //   if(this.props.whichBtn === "mentors"){
  //     this.props.renderMentors()
  //   }
  //   if(this.props.whichBtn === "benefit"){
  //     this.props.renderBenefit()
  //   }
  //   if(this.props.whichBtn === "staff"){
  //     this.props.renderStaff()
  //   } 
  // }

  handleEmail = e => {

    this.setState({ singleEmail: e.target.value})
  }

  render() {
    return (
      <Container className="volunteerListContainer" fluid>
      <Row>
        <Col>

        {/* ---------------------------------------------------------------------------------------------------------------------
        Work In Progress */}
            {/* <EmailBox 
              volunteers={this.props.volunteers} volunteerEmails={this.props.volunteerEmails}singleEmail={this.state.singleEmail}
              handleEmail={this.handleEmail}
            />

              <div className="card" >
                <div className="card-header">
                  Volunteers
                </div>
                {this.props.volunteers.map(volunteer => (
                <nav className="navbarBtns navbar-expand-lg navbar-light bg-light">
                <ul key={volunteer._id} className="list-group list-group-flush">
    
                <div className="collapse navbar-collapse" id="navbarNav">
                  <ul className="navbar-nav">
                  <li className="nav-item active">
                  <Link to={"/manager/volunteer/" + volunteer._id} id={volunteer._id}>
                    <div key={volunteer._id} className="list-group-item volName">{volunteer.firstName} {volunteer.lastName}</div>
                  </Link>
                  </li>
                    <li className="nav-item active">
                      <button type="submit" className="btn btn-primary volBtn">Edit</button>
                    </li>
                    <li className="nav-item">
                      <button type="submit" className="btn btn-primary volBtn">Email</button>
                    </li>
                    <li className="nav-item">
                      <button type="submit" className="btn btn-primary volBtn">Delete</button>
                    </li>
                    
                  </ul>
                </div>
              
            
            </ul>
            </nav>
            ))}
          </div> */}

          {/* ----------------------------------------------------------------------------------------------------------------- */}
  
            <EmailBox 
            volunteers={this.props.volunteers} 
            volunteerEmails={this.props.volunteerEmails}
            singleEmail={this.state.singleEmail}
            handleEmail={this.handleEmail}
            title={this.props.title}
            singularTitle={this.props.singularTitle}
            />
          </Col>
        </Row>
          
          <Row>
            <Col>
              <label >Click Volunteer's Name to <b>View and Edit Info</b></label>
            </Col>
            <Col>
              <label className="x">Click the <span className="xColor">✗</span> to delete volunteer</label>
            </Col>
          
          </Row>
          <Row>
          <Col>
          <div className="volunteerListBox">
              <List className="listItemsBox">
                {this.props.volunteers.map(volunteer => (
                  <ListItem key={volunteer._id}>
                    <Link to={"/manager/volunteer/" + volunteer._id} id={volunteer._id}>
                      <strong>
                        {volunteer.firstName} {volunteer.lastName}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteVolunteer(volunteer._id)} />
                  </ListItem>
                ))}
              </List>
            </div>
          </Col>
          </Row>
      </Container> 
    );
  }
}

export default VolunteerList;


