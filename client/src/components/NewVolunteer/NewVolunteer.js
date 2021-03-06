import React, { Component } from "react";
import API from "../../utils/API";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import CheckBox from "../../components/CheckBox";
import "./NewVolunteer.css"

class Manager extends Component {

  state = {
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
  };

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

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleCheck = event => {
   let volunteerType = this.state.volunteerType
   volunteerType.forEach(type => {
     if(type.name === event.target.value)
     type.isChecked = event.target.checked
    })
   this.setState({volunteerType: volunteerType})
  }

  handleFormSubmit = event => {
    event.preventDefault();
    let arr = []
    let chosenTypes = this.state.volunteerType
    chosenTypes.map(type => {
      if(type.isChecked)
      arr.push(type.name)
     })
     if (!this.state.firstName) {
       alert("Please add a first name")
     } else {
       console.log("first name true")
     }
     if (!this.state.lastName) {
      alert("Please add a last name")
    } else {
      console.log("last name tru")
    }
    if (!this.state.gender) {
      alert("Please select a gender")
    } else {
      console.log("gender true")
    }
    if (!arr) {
      alert("Please select one or more volunteer types")
    } else {
      console.log("arr true")
    }
    if (!this.state.email) {
      // /.+@.+\..+/
      alert("Please enter a valid email address")
    } else {
      console.log("email true")
    }
    
    if (this.state.firstName && this.state.lastName && this.state.gender && arr && this.state.email) {
      API.saveVolunteer({
        firstName: this.capitalize(this.state.firstName),
        lastName: this.capitalize(this.state.lastName),
        email: this.state.email,
        gender: this.state.gender,
        volunteerType: arr,
      })
        .then(res => {
          alert(`Volunteer ${this.capitalize(this.state.firstName)} ${this.capitalize(this.state.lastName)} was added to your database!`)
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
        })
        .catch(err => console.log(err));
    } else {
      alert("error adding volunteer to database")
    }
  };

  render() {
    return (
      <Container className="newVolunteerBox" fluid>
        <Row>
          <Col>
          <Jumbotron className="jumbotronBox">
              <h1>Add New Volunteer</h1>
          </Jumbotron>
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
                <input type="email" className="form-control" name="email" value={this.state.email} placeholder="Email" onChange={this.handleInputChange}/>
              </div>
              <div className="form-group col-md-6 genderBox">
                  <label >Gender:</label>
                  {/* value={this.state.title} */}
                  <select id="inputState" className="form-control" value={this.state.gender} onChange={this.handleGender}>
                    <option defaultValue>Choose...</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                  </select>
              </div>
              <label>Volunteer Type (choose all that apply):</label>
               <div className="form-group col-md-12 volTypeBox">
               
               {
                  this.state.volunteerType.map((type, index) => {
                    return (<CheckBox key={index} handleCheck={this.handleCheck}  {...type} />)
                  })
        }
              
              </div>
                
              
              <button type="submit" className="btn btn-primary addBtn" onClick={this.handleFormSubmit}>Add</button>
            </form>
            
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manager;


{/* <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="" id="inlineRadio1" value="Coach"  onChange={this.handleCheck}/>
                        <label className="form-check-label">Coach</label>
                    </div> 
                     <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="gameday" value="Gameday Volunteer" />
                        <label className="form-check-label">Gameday Volunteer</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="fieldm" value="Field Maintenance" />
                        <label className="form-check-label">Field Maintenance</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="umpire" value="Umpire" />
                        <label className="form-check-label">Umpire</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="teamp" value="Team Parent" />
                        <label className="form-check-label">Team Parent</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="mentor" value="Mentor"/>
                        <label className="form-check-label">Mentor</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="benefit" value="Benefit Volunteer" />
                        <label className="form-check-label">Benefit Volunteer</label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" name="staff" value="Staff" />
                        <label className="form-check-label">Staff</label>
                    </div>  */}