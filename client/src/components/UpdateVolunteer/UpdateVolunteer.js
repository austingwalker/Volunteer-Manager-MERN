import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col} from 'reactstrap';
import CheckBox from "../../components/CheckBox";
import "./UpdateVolunteer.css"

class UpdateVolunteer extends Component {

  state = {
    ID: this.props.volunteer._id,
    firstName: this.props.volunteer.firstName,
    lastName: this.props.volunteer.lastName,
    email: this.props.volunteer.email,
    gender: this.props.volunteer.gender,
    volunteerType: [ 
      {name: "Coach", isChecked: false}, 
      {name: "Gameday Volunteer", isChecked: false},
      {name: "Field Maintenance", isChecked: false},
      {name: "Umpire", isChecked: false},
      {name: "Team Parent", isChecked: false},
      {name: "Mentor", isChecked: false},
      {name: "Benefit Volunteer", isChecked: false},
      {name: "Staff", isChecked: false},]
  };

//Capitalize volunteer name
capitalize = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

handleGender = e => {
      this.setState({ gender: e.target.value})
  }

handleCheck = event => {
   let volunteerType = this.state.volunteerType
   volunteerType.forEach(type => {
     if(type.name === event.target.value)
     type.isChecked = event.target.checked
    })
   this.setState({volunteerType: volunteerType})

  }

handleUpdate = event => {
    event.preventDefault();
    let arr = []
    let chosenTypes = this.state.volunteerType
    chosenTypes.map(type => {
      if(type.isChecked)
        arr.push(type.name)
      })
      if (arr[0]) {
        API.updateVolunteer({
          ID: this.state.ID,
          firstName: this.capitalize(this.state.firstName),
          lastName: this.capitalize(this.state.lastName),
          email: this.state.email,
          gender: this.state.gender,
          volunteerType: arr,
        })
        .then(res => {
          alert(`Volunteer ${this.capitalize(this.state.firstName)} ${this.capitalize(this.state.lastName)} was updated in your database!`)
          this.setState({
            firstName: "",
            lastName: "",
            email: "",
            gender: "",
            volunteerType: [
              {name: "Coach", isChecked: false}, 
              {name: "Gameday Volunteer", isChecked: false},
              {name: "Field Maintenance", isChecked: false},
              {name: "Umpire", isChecked: false},
              {name: "Team Parent", isChecked: false},
              {name: "Mentor", isChecked: false},
              {name: "Benefit Volunteer", isChecked: false},
              {name: "Staff", isChecked: false},
            ]
          })
          this.props.cancelClicked();
          this.props.reload();
        })
        .catch(err => console.log(err));
    } else {
      alert("Must choose atleast one volunteer type.")
    }
  };

  render() {
    return (
      <Container className="newVolunteerBox" fluid>
        <Row>
          <Col>
            <form>
              <div className="form-row">
                <div className="form-group col-md-6">
                  <label>First Name:</label>
                    <input type="text" className="form-control" name="firstName" value={this.state.firstName} placeholder="First Name" onChange={this.handleInputChange}/>
                </div>
                <div className="form-group col-md-6">
                  <label >Last Name:</label>
                    <input type="text" className="form-control" name="lastName" value={this.state.lastName} placeholder="Last Name" onChange={this.handleInputChange}/>
                </div>
              </div>
              <div className="form-group">
                <label>Email Address:</label>
                  <input type="email" className="form-control col-md-6" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange}/>
              </div>
              <div className="form-row">
                <div className="form-group col-md-4 genderBox">
                  <label >Gender:</label>
                    <select id="inputState" className="form-control" value={this.state.title} onChange={this.handleGender}>
                      <option defaultValue>{this.state.gender}</option>
                      <option>Male</option>
                      <option>Female</option>
                    </select>
                </div>
                <div className="col-md-1"></div>
                <div className="form-group col-md-7 volTypeBox">
                  <label>Volunteer Type (choose all that apply):</label>
                    {
                    this.state.volunteerType.map((type, index) => {
                      return (
                      <CheckBox 
                      key={index} 
                      handleCheck={this.handleCheck}  {...type} 
                      />)
                    })
                    }
                </div>
              </div>
              <button type="submit" className="btn btn-primary updateBtn" onClick={this.handleUpdate}>Update</button>
              <button type="button" className="btn btn-primary cancelBtn" onClick={this.props.cancelClicked}>Cancel</button>
            </form>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default UpdateVolunteer;