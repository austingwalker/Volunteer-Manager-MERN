import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
import VolunteerList from "../../components/VolunteerList";
import NewVolunteer from "../../components/NewVolunteer";
import Landing from "../../components/Landing";
import "./Manager.css"

class Manager extends Component {
  state = {
    volunteers: [],
    volunteerEmails: [],
    btnClicked: false,
    addVolunteer: false,
    vols: false,
    whichBtn: "",
    title: "",
    singularTitle: ""
  };

//Add Volunteer Form
componentDidMount(){
   this.resetState()
 }

addVolunteerClicked = event => {
    this.resetState()
    const { name, value } = event.target;
    this.setState({
          [name]: value,
          btnClicked: false
        });
  }

// Button Click Handling
handleBtnClick = event => {
    this.resetState()
    const { name, value } = event.target;
    this.setState({
          [name]: value,
          btnClicked: true
        });
        switch (name) {
          case "allVolunteers":
          //New
          this.setState({
            title: "Volunteers",
            singularTitle: "Volunteer"
          })
          this.getVolunteers("volunteers");
          //original
            // this.renderAllVolunteers();
            break;
          case "coaches":
          //New
          this.setState({
            title: "Coaches",
            singularTitle: "Coach"
          })
          this.getVolunteers("Coach");
          //original
            // this.renderCoaches();
            break; 
          case "gameday":
          //New
          this.setState({
            title: "Gameday Volunteers",
            singularTitle: "Gameday Volunteer"
          })
          this.getVolunteers("Gameday_Volunteer");
          //original
            // this.renderGameday();
            break; 
          case "fieldm":
          //New
          this.setState({
            title: "Field Maintenance Volunteers",
            singularTitle: "Field Maintenance Volunteer"
          })
          this.getVolunteers("Field_Maintenance");
          //original
            // this.renderFieldm();
            break; 
          case "umpires":
           //New
           this.setState({
            title: "Umpires",
            singularTitle: "Umpire"
          })
           this.getVolunteers("Umpire");
           //original
            // this.renderUmpires();
            break; 
          case "teamp":
          //New
          this.setState({
            title: "Team Parents",
            singularTitle: "Team Parent"
          })
          this.getVolunteers("Team_Parent");
          //original
            // this.renderTeamp();
            break; 
          case "mentors":
          //New
          this.setState({
            title: "Mentors",
            singularTitle: "Mentor"
          })
          this.getVolunteers("Mentor");
          //original
            // this.renderMentors();
            break; 
          case "benefit":
          //New
          this.setState({
            title: "Benefit Volunteers",
            singularTitle: "Benefit Volunteer"
          })
          this.getVolunteers("Benefit_Volunteer");
          //original
            // this.renderBenefit();
            break; 
          case "staff":
          //New
          this.setState({
            title: "Staff",
            singularTitle: "Staff Member"
          })
          this.getVolunteers("Staff");
          //original
            // this.renderStaff();
            break; 
          }
  }

//New
getVolunteers = (volType) => {
    API.getVolunteers(volType)
    .then(res => {
      console.log(res)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: volType})
    })
    .catch(err => console.log(err));   
  }


// //All Volunteers
//   renderAllVolunteers = () => {
//     API.getVolunteers()
//     .then(res => {
//       console.log(res)
//       this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "allVolunteers", title: "Volunteers", singularTitle: "Volunteer"})
//     })
//     .catch(err => console.log(err));   
//   }

// //Coaches
//   renderCoaches = () => {
//     API.getCoaches()
//     .then(res => {
//       console.log("Coaches Response " + res.data)
//       this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "coaches", title: "Coaches", singularTitle: "Coach" })
//     })
//     .catch(err => console.log(err));   
//   }

// //All Gameday
//   renderGameday = () => {
//     API.getGameday()
//     .then(res => {
//       console.log("Gameday Response " + res.data)
//       this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "gameday", title: "Gameday Volunteers", singularTitle: "Gameday Volunteer" })
//     })
//     .catch(err => console.log(err));   
//   }

// //Field Maintenance
//   renderFieldm = () => {
//     API.getFieldm()
//     .then(res => {
//       console.log("Fieldm Response " + res.data)
//       this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "fieldm", title: "Field Maintenance Volunteers", singularTitle: "Field Maintenance Volunteer" })
//     })
//     .catch(err => console.log(err));   
//   }

// //Umpires
//   renderUmpires = () => {
//     API.getUmpires()
//     .then(res => {
//       console.log("Umpires Response " + res.data)
//       this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "umpires", title: "Umpires", singularTitle: "Umpire" })
//     })
//     .catch(err => console.log(err));   
//   }

// //Team Parents
//   renderTeamp = () => {
//     API.getTeamp()
//     .then(res => {
//       console.log("Team Parents Response " + res.data)
//       this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "teamp", title: "Team Parents", singularTitle: "Team Parent" })
//     })
//     .catch(err => console.log(err));   
//   }

// //Mentors
//   renderMentors = () => {
//     API.getMentors()
//     .then(res => {
//       console.log("Mentors Response " + res.data)
//       this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "mentors", title: "Mentors", singularTitle: "Mentor" })
//     })
//     .catch(err => console.log(err));   
//   }

// //Benefit
//   renderBenefit = () => {
//     API.getBenefit()
//     .then(res => {
//       console.log("Benefit Response " + res.data)
//       this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "benefit", title: "Benefit Volunteers", singularTitle: "Benefit Volunteer" })
//     })
//     .catch(err => console.log(err));   
//   }

// //Staff
//   renderStaff = () => {
//     API.getStaff()
//     .then(res => {
//       console.log("Staff Response " + res.data)
//       this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "staff", title: "Staff", singularTitle: "Staff Member" })
//     })
//     .catch(err => console.log(err));   
//   }



  // Reset State
  resetState = () => {
    this.setState({
      volunteers: [],
      addVolunteer: false,
      allVolunteers: false,
      coaches: false,
      gameDay: false,
      fieldMaintenance: false,
      umpires: false,
      teamParents: false,
      mentors: false,
      benefits: false,
      staff: false,
    });
  }

  render() {
    return (
      <Container fluid className="containerBox">
        <Row>
          <Col md="2" className="sidebarCol">
            <div className="wrapper wrapperBox">
              <nav  className="sidebarBox">
                <ul className="list-unstyled components">
                  <li className="active">
                    <button type="button" name="addVolunteer" value='true' onClick={this.addVolunteerClicked} className="sidebarBtn btn  " >Add Volunteer</button>
                  </li>
                  <li>
                    <button type="button" name="allVolunteers" value="true" onClick={this.handleBtnClick} className="btn  sidebarBtn" >All Volunteers</button>
                  </li>
                  <li>
                    <button type="button" name="coaches" value="true" onClick={this.handleBtnClick} className="btn  sidebarBtn">Coaches</button>
                  </li>
                  <li>
                    <button type="button" name="gameday" value="true" onClick={this.handleBtnClick} className="btn  sidebarBtn">Gameday</button>
                  </li>
                  <li>
                    <button type="button" name="fieldm" value="true" onClick={this.handleBtnClick} className="btn  sidebarBtn">Field Maintenance</button>
                  </li>
                  <li>
                    <button type="button" name="umpires" value="true" onClick={this.handleBtnClick} className="btn  sidebarBtn">Umpires</button>
                  </li>
                  <li>
                    <button type="button" name="teamp" value="true" onClick={this.handleBtnClick} className="btn  sidebarBtn">Team Parents</button>
                  </li>
                  <li>
                    <button type="button" name="mentors" value="true" onClick={this.handleBtnClick} className="btn  sidebarBtn">Mentors</button>
                  </li>
                  <li>
                    <button type="button" name="benefit" value="true" onClick={this.handleBtnClick} className="btn  sidebarBtn">Benefit</button>
                  </li>
                  <li>
                    <button type="button" name="staff" value="true" onClick={this.handleBtnClick} className="btn  sidebarStaffBtn">Staff</button>
                  </li>
              </ul>
            </nav>
          </div>
        </Col>
        <Col md="10">
          <div className="dynamicBox">
            {this.state.addVolunteer ? null : this.state.btnClicked ? <h2>Manage {this.state.title}</h2> : <Landing/>} 
              {this.state.addVolunteer ? <NewVolunteer/> : null}
                {this.state.btnClicked ? 
                  <VolunteerList 
                  volunteers={this.state.volunteers} 
                  volunteerEmails={this.state.volunteerEmails}
                  getVolunteers={this.getVolunteers}
                  // renderAll={this.renderAllVolunteers}
                  // renderCoaches={this.renderCoaches}
                  // renderGameday={this.renderGameday}
                  // renderFieldm={this.renderFieldm}
                  // renderUmpires={this.renderUmpires}
                  // renderTeamp={this.renderTeamp}
                  // renderMentors={this.renderMentors}
                  // renderBenefit={this.renderBenefit}
                  // renderStaff={this.renderStaff}
                  title={this.state.title}
                  singularTitle={this.state.singularTitle}
                  whichBtn={this.state.whichBtn}
                  />  
                  : null }    
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manager;
