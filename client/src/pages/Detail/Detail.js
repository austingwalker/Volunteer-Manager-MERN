import React, { Component } from "react";
import { Link } from "react-router-dom";
import UpdateVolunteer from "../../components/UpdateVolunteer";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import API from "../../utils/API";
import "./Detail.css"

class Detail extends Component {
  state = {
    volunteer: {},
    editClicked: false
  };
  
  componentDidMount() {
    API.getVolunteer(this.props.match.params.id)
      .then(res => this.setState({ volunteer: res.data }))
      .catch(err => console.log(err));
  }

  reload = () => {
    API.getVolunteer(this.props.match.params.id)
      .then(res => this.setState({ volunteer: res.data }))
      .catch(err => console.log(err));
  }

  editClicked = () => {
    this.setState({
      editClicked: true
    })
    console.log("editClicked")
  }

  cancelClicked = () => {
    this.setState({
      editClicked: false
    })
    console.log("cancelClicked")
  }



  render() {
    return (
      <Container fluid>
        <Row>
          <Col >
            <Jumbotron className="detailJumbo">
              <h1>
                {this.state.volunteer.firstName} {this.state.volunteer.lastName}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          
          <Col >
            <article className="infoBox">
              <h1>Volunteer Info</h1>
              <h3>
                Name: {this.state.volunteer.firstName} {this.state.volunteer.lastName}
              </h3>
              <h3>
                Email: {this.state.volunteer.email}
              </h3>
              <h3>
                Gender: {this.state.volunteer.gender}
              </h3>
              <h3>
                Type of Volunteer: {this.state.volunteer.volunteerType}
              </h3>
            </article>
            <Link to="/manager" className="homeBtn">← Back to Home</Link> | <button type="button" name="edit" value="true" onClick={this.editClicked} className="btn btn-primary mngBtn">Edit Volunteer</button>
          </Col>
          <Col md="8">
            <div className="dynamicBox">
                <h5>Update Volunteer!</h5>

               
                {this.state.editClicked ? 
                  <UpdateVolunteer 
                  volunteer={this.state.volunteer}
                  cancelClicked={this.cancelClicked}
                  reload={this.reload}
                  /> 
                  : null }    
            </div>
          </Col>
          
        </Row>
       
      </Container>
    );
  }
}

export default Detail;
