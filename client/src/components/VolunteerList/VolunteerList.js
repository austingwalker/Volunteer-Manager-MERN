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

  handleEmail = e => {

    this.setState({ singleEmail: e.target.value})
  }

  render() {
    return (
      <Container className="volunteerListContainer" fluid>
      <Row>
        <Col>
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
        {/* <Row>
          <Col>
            <label >Click Volunteer's Name to <b>View and Edit Info</b></label>
          </Col>
          <Col>
            <label className="x">Click the <span className="xColor">✗</span> to delete volunteer</label>
          </Col>
        </Row> */}
        <Row>
          <Col>
            <table className="table table-striped">
             
              <tbody>
              {this.props.volunteers.map(volunteer => (
                <tr id="form-row" key={volunteer._id}>
                  <td>
                  <Link to={"/manager/volunteer/" + volunteer._id} id={volunteer._id}>
                      <span className="volTableName">
                        {volunteer.firstName} {volunteer.lastName}
                      </span>
                  </Link>
                  </td>
                  <td className="numOfUrls">
                  <Link to={"/manager/volunteer/" + volunteer._id} id={volunteer._id}>
                      <button className="btn tableEditBtn">
                        Edit
                      </button>
                  </Link>
                  </td>
                  <td>
                  <button className="btn tableDeleteBtn" onClick={() => this.deleteVolunteer(volunteer._id)}>Delete</button>
                  {/* <DeleteBtn onClick={() => this.deleteVolunteer(volunteer._id)} /> */}
                  </td>
                </tr>
                ))}
              </tbody>
            </table>
          {/* <div className="volunteerListBox">
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
            </div> */}
          </Col>
        </Row>
      </Container> 
    );
  }
}

export default VolunteerList;


