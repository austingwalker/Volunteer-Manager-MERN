import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import VolunteerList from "../../components/VolunteerList";
import NewVolunteer from "../../components/NewVolunteer";
// import Coaches from "../../components/Coaches";
import { List, ListItem } from "../../components/List";
import "./Manager.css"


class Manager extends Component {
  state = {
    volunteers: [],
    btnClicked: false,
    addVolunteer: false,
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
          
          }
  }


  renderAllVolunteers = () => {
   
    API.getVolunteers()
    .then(res => {
      console.log(res)
      this.setState({ volunteers: res.data })
    })
    .catch(err => console.log(err));   

  }

  renderCoaches = () => {
   
    API.getCoaches()
    .then(res => {
      console.log("Coaches Response " + res.data)
      this.setState({ volunteers: res.data })
    })
    .catch(err => console.log(err));   

  }

  renderGameday = () => {
   
    API.getGameday()
    .then(res => {
      console.log("Gameday Response " + res.data)
      this.setState({ volunteers: res.data })
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
          <Col md="4">
            <div className="buttonBox">
              <button type="button" name="addVolunteer" value='true' onClick={this.addVolunteerClicked} className="btn btn-primary mngBtn" >Add Volunteer</button>
              <br/>
              <button type="button" name="allVolunteers" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn" >All Volunteers</button>
              <br/>
              <button type="button" name="coaches" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Coaches</button>
              <br/>
              <button type="button" name="gameday" value="true" onClick={this.handleBtnClick} className="btn btn-primary mngBtn">Gameday</button>
              <br/>
              <button type="button" className="btn btn-primary mngBtn">Field Maintenance</button>
              <br/>
              <button type="button" className="btn btn-primary mngBtn">Umpires</button>
              <br/>
              <button type="button" className="btn btn-primary mngBtn">Team Parents</button>
              <br/>
              <button type="button" className="btn btn-primary mngBtn">Mentors</button>
              <br/>
              <button type="button" className="btn btn-primary mngBtn">Benefit</button>
              <br/>
              <button type="button" className="btn btn-primary mngBtn">Staff</button>
              <br/>
            </div>
          </Col>
          <Col md="8">
            <div className="dynamicBox">
                <h5>Manage Volunteers!</h5>

                {this.state.addVolunteer ? <NewVolunteer/> : null}
                {this.state.btnClicked ? 
                  <VolunteerList volunteers={this.state.volunteers}/>  
                  : null }    
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manager;
