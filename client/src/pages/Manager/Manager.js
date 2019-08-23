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
          this.setState({
            title: "Volunteers",
            singularTitle: "Volunteer"
          })
          this.getVolunteers("volunteers");
            break;
          case "coaches":
          this.setState({
            title: "Coaches",
            singularTitle: "Coach"
          })
          this.getVolunteers("Coach");
            break; 
          case "gameday":
          this.setState({
            title: "Gameday Volunteers",
            singularTitle: "Gameday Volunteer"
          })
          this.getVolunteers("Gameday_Volunteer");
            break; 
          case "fieldm":
          this.setState({
            title: "Field Maintenance Volunteers",
            singularTitle: "Field Maintenance Volunteer"
          })
          this.getVolunteers("Field_Maintenance");
            break; 
          case "umpires":
           this.setState({
            title: "Umpires",
            singularTitle: "Umpire"
          })
           this.getVolunteers("Umpire");
            break; 
          case "teamp":
          this.setState({
            title: "Team Parents",
            singularTitle: "Team Parent"
          })
          this.getVolunteers("Team_Parent");
            break; 
          case "mentors":
          this.setState({
            title: "Mentors",
            singularTitle: "Mentor"
          })
          this.getVolunteers("Mentor");
            break; 
          case "benefit":
          this.setState({
            title: "Benefit Volunteers",
            singularTitle: "Benefit Volunteer"
          })
          this.getVolunteers("Benefit_Volunteer");
            break; 
          case "staff":
          this.setState({
            title: "Staff",
            singularTitle: "Staff Member"
          })
          this.getVolunteers("Staff");
            break; 
          }
  }


getVolunteers = (volType) => {
    API.getVolunteers(volType)
    .then(res => {
      console.log(res)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: volType})
    })
    .catch(err => console.log(err));   
}


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
