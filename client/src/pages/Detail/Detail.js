import React, { Component } from "react";
import { Link } from "react-router-dom";
import UpdateVolunteer from "../../components/UpdateVolunteer";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import API from "../../utils/API";
import "./Detail.css"

class Detail extends Component {
  state = {
    volunteer: {},
    editClicked: false,
    types: []
  };
  
  componentDidMount() {
    API.getVolunteer(this.props.match.params.id)
      .then(res => { 
        this.setState({ volunteer: res.data })
        this.parseType()
      })
      .catch(err => console.log(err));
  }

  reload = () => {
    API.getVolunteer(this.props.match.params.id)
      .then(res => { this.setState({ volunteer: res.data })
      this.parseType()
    })
      .catch(err => console.log(err));
  }

  editClicked = () => {
    this.setState({
      editClicked: true
    })
    console.log(this.state.volunteer.volunteerType)
    this.parseType()
  }

  parseType = () => {
    let types = []
    {this.state.volunteer.volunteerType.map(type => (
      types.push(type + ", ")
    ))}
    this.setState({ types: types})
    console.log(types)
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
          <Col md="5" className="infoBoxCol">
            <article className="infoBox">
              <div className="card">
                <div className="card-header">
                <h1>Volunteer Info</h1>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item detailInfo"><strong>Name:</strong> {this.state.volunteer.firstName} {this.state.volunteer.lastName}</li>
                  <li className="list-group-item detailInfo"><strong>Email:</strong> {this.state.volunteer.email}</li>
                  <li className="list-group-item detailInfo"><strong>Gender:</strong> {this.state.volunteer.gender}</li>
                  <li className="list-group-item detailInfo"><strong>Type of Volunteer:</strong> {this.state.types}</li>
                </ul>
               </div>
              <button type="button" name="edit" value="true" onClick={this.editClicked} className="btn btn-primary editBtn">Edit Volunteer</button>
            </article>
            <Link to="/manager" className="homeBtn">← Back to Home</Link>
          </Col>
          <Col md="7">
            <div className="updateBox">
                <h2>Edit Volunteer!</h2>
                {this.state.editClicked ? 
                  <UpdateVolunteer 
                  volunteer={this.state.volunteer}
                  cancelClicked={this.cancelClicked}
                  types={this.parseType}
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
