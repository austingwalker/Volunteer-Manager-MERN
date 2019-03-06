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
  };

  handleClick = event => {
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
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
    console.log(this.state.coaches)
    this.renderButton();
  }

  renderButton = () => {
    if(this.state.addVolunteer){
      return(
        <NewVolunteer/>
      );
  } 
  //////////////////////////////////////////////////////
    if(this.state.allVolunteers){
      API.getVolunteers()
      .then(res =>
        this.setState({ volunteers: res.data })
      )
      .catch(err => console.log(err));   
    return(
      <div>
        <Jumbotron>
              <h1>Volunteer List</h1>
         </Jumbotron>
        {this.state.volunteers.length ? (
          <List>
            {this.state.volunteers.map(volunteer => (
              <VolunteerList
                id={volunteer._id}
                key={volunteer._id}
                name={volunteer.name}
                volunteerType={volunteer.volunteerType}
                />
              ))}
          </List>
      ) : (
        <h3>No Results to Display</h3>
      )}
    </div>
    );
    
  } 
  //////////////////////////////////////////////////////
    if(this.state.coaches){
      API.getCoaches()
      .then(res => {
        console.log(res)
        this.setState({ volunteers: res.data})
       
      })
      .catch(err => console.log(err));
      return(
        <div>
          {this.state.volunteers.length ? (
            <List>
              {this.state.volunteers.map(volunteer => (
                <VolunteerList
                  id={volunteer._id}
                  key={volunteer._id}
                  name={volunteer.name}
                  volunteerType={volunteer.volunteerType}
                  />
                ))}
            </List>
        ) : (
          <h3>No Results to Display</h3>
         
        )}
      </div>
        
      );
     
  }
else {
    return(
      <div>Click a button..</div>
    )
  }
  
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
              <button type="button" name="addVolunteer" value='true' onClick={this.handleClick} className="btn btn-primary mngBtn" >Add Volunteer</button>
              <br/>
              <button type="button" name="allVolunteers" value="true" onClick={this.handleClick} className="btn btn-primary mngBtn" >All Volunteers</button>
              <br/>
              <button type="button" name="coaches" value="true" onClick={this.handleClick} className="btn btn-primary mngBtn">Coaches</button>
              <br/>
              <button type="button" className="btn btn-primary mngBtn">Gameday</button>
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
                {this.renderButton()}
              
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manager;
