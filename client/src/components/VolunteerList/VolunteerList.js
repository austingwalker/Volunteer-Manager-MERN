import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import EmailBox from "../../components/EmailBox";
import { Input, FormBtn } from "../../components/Form";
import "./VolunteerList.css"

class VolunteerList extends Component {
 state = {
   email: "",
   volunteers: [],
   singleEmail: ""
 }

// componentDidMount(){
//   this.loadVolunteers()
// }

  // loadVolunteers = () => {
  //   API.getVolunteers()
  //     .then(res =>
  //       this.setState({ volunteers: res.data })
  //     )
  //     .catch(err => console.log(err));
  // };

  deleteVolunteer = id => {
    API.deleteVolunteer(id)
      .then(res => {
        console.log("Which btn: " + this.props.whichBtn)
        this.discern()
      })
      .catch(err => console.log(err));
  };

  discern = () => {
    if(this.props.whichBtn === "allVolunteers"){
      this.props.renderAll()
    }
    if(this.props.whichBtn === "coaches"){
      this.props.renderCoaches()
    }
    if(this.props.whichBtn === "gameday"){
      this.props.renderGameday()
    }
    if(this.props.whichBtn === "fieldm"){
      this.props.renderFieldm()
    }
    if(this.props.whichBtn === "umpires"){
      this.props.renderUmpires()
    }
    if(this.props.whichBtn === "teamp"){
      this.props.renderTeamp()
    }
    if(this.props.whichBtn === "mentors"){
      this.props.renderMentors()
    }
    if(this.props.whichBtn === "benefit"){
      this.props.renderBenefit()
    }
    if(this.props.whichBtn === "staff"){
      this.props.renderStaff()
    } 
  }

  handleEmail = e => {

    this.setState({ singleEmail: e.target.value})
}


  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };


  // handleSingleEmail = e => {
  //   console.log(e.target.value)
  //   const newEmail = `mailto:${e.target.value}`
  //   this.setState({
  //     email: newEmail
  //   })
    
  // }



  render() {
    return (
      <Container className="volunteerListContainer" fluid>
        <Row>
        <Col>
  
            <EmailBox 
            volunteers={this.props.volunteers} volunteerEmails={this.props.volunteerEmails}singleEmail={this.state.singleEmail}
            handleEmail={this.handleEmail}
            
            />
          
          
          <div className="volunteerListBox">
          <label >Click Volunteer to View Info</label>
              <List >
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


