import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col } from 'reactstrap';
import VolunteerList from "../../components/VolunteerList";
import NewVolunteer from "../../components/NewVolunteer";
import "./Manager.css"


class Manager extends Component {
  state = {
    volunteers: [],
    volunteerEmails: [],
    btnClicked: false,
    addVolunteer: false,
    whichBtn: ""
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
            this.renderAllVolunteers();
            break;

          case "coaches":
            this.renderCoaches();
            break; 

          case "gameday":
            this.renderGameday();
            break; 
          
          case "fieldm":
            this.renderFieldm();
            break; 

          case "umpires":
            this.renderUmpires();
            break; 

          case "teamp":
            this.renderTeamp();
            break; 

          case "mentors":
            this.renderMentors();
            break; 

          case "benefit":
            this.renderBenefit();
            break; 

          case "staff":
            this.renderStaff();
            break; 
          
          }
  }

//All Volunteers
  renderAllVolunteers = () => {
    API.getVolunteers()
    .then(res => {
      console.log(res)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "allVolunteers"})
    })
    .catch(err => console.log(err));   
  }

//Coaches
  renderCoaches = () => {
    API.getCoaches()
    .then(res => {
      console.log("Coaches Response " + res.data)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "coaches" })
    })
    .catch(err => console.log(err));   
  }

//All Gameday
  renderGameday = () => {
    API.getGameday()
    .then(res => {
      console.log("Gameday Response " + res.data)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "gameday" })
    })
    .catch(err => console.log(err));   
  }

//Field Maintenance
  renderFieldm = () => {
    API.getFieldm()
    .then(res => {
      console.log("Fieldm Response " + res.data)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "fieldm" })
    })
    .catch(err => console.log(err));   
  }

//Umpires
  renderUmpires = () => {
    API.getUmpires()
    .then(res => {
      console.log("Umpires Response " + res.data)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "umpires" })
    })
    .catch(err => console.log(err));   
  }

//Team Parents
  renderTeamp = () => {
    API.getTeamp()
    .then(res => {
      console.log("Team Parents Response " + res.data)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "teamp" })
    })
    .catch(err => console.log(err));   
  }

//Mentors
  renderMentors = () => {
    API.getMentors()
    .then(res => {
      console.log("Mentors Response " + res.data)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "mentors" })
    })
    .catch(err => console.log(err));   
  }

//Benefit
  renderBenefit = () => {
    API.getBenefit()
    .then(res => {
      console.log("Benefit Response " + res.data)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "benefit" })
    })
    .catch(err => console.log(err));   
  }

//Staff
  renderStaff = () => {
    API.getStaff()
    .then(res => {
      console.log("Staff Response " + res.data)
      this.setState({ volunteers: res.data, volunteerEmails: res.data.email, whichBtn: "staff" })
    })
    .catch(err => console.log(err));   
  }



  
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
      <Container fluid>

      
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
{/* md="4" */}
          {/* <Col >
            <div className="buttonBox">
              <button type="button" name="addVolunteer" value='true' onClick={this.addVolunteerClicked} className="mngBtn btn btn-primary " >Add Volunteer</button>
              <br/>
              <button type="button" name="allVolunteers" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn" >All Volunteers</button>
              <br/>
              <button type="button" name="coaches" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Coaches</button>
              <br/>
              <button type="button" name="gameday" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Gameday</button>
              <br/>
              <button type="button" name="fieldm" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Field Maintenance</button>
              <br/>
              <button type="button" name="umpires" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Umpires</button>
              <br/>
              <button type="button" name="teamp" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Team Parents</button>
              <br/>
              <button type="button" name="mentors" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Mentors</button>
              <br/>
              <button type="button" name="benefit" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Benefit</button>
              <br/>
              <button type="button" name="staff" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Staff</button>
              <br/>
            </div>
          </Col> */}
          <Col md="10">
            <div className="dynamicBox">
                <h2>Manage Volunteers!</h2>

                {this.state.addVolunteer ? <NewVolunteer/> : null}
                {this.state.btnClicked ? 
                  <VolunteerList 
                  volunteers={this.state.volunteers} 
                  volunteerEmails={this.state.volunteerEmails}
                  renderAll={this.renderAllVolunteers}
                  renderCoaches={this.renderCoaches}
                  renderGameday={this.renderGameday}
                  renderFieldm={this.renderFieldm}
                  renderUmpires={this.renderUmpires}
                  renderTeamp={this.renderTeamp}
                  renderMentors={this.renderMentors}
                  renderBenefit={this.renderBenefit}
                  renderStaff={this.renderStaff}

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
