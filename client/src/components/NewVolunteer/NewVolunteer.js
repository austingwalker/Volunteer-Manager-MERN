import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class Manager extends Component {
  state = {
    volunteers: [],
    name: "",
    gender: "",
    volunteerType: [],
    email: "",
    password: ""
  };

  

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.name && this.state.gender && this.state.volunteerType && this.state.password && this.state.email) {
      API.saveVolunteer({
        name: this.state.name,
        gender: this.state.gender,
        password: this.state.password,
        volunteerType: this.state.volunteerType,
        email: this.state.email
      })
        .then(res => this.loadVolunteers())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col>
            <Jumbotron>
              <h1>Create New Volunteer</h1>
            </Jumbotron>
            <form>
              <Input
                value={this.state.name}
                onChange={this.handleInputChange}
                name="name"
                placeholder="Name (required)"
              />
                <Input
                value={this.state.email}
                onChange={this.handleInputChange}
                name="email"
                placeholder="Email (required)"
              />
              <Input
                value={this.state.gender}
                onChange={this.handleInputChange}
                name="gender"
                placeholder="Gender (required)"
              />
              <Input
                value={this.state.volunteerType}
                onChange={this.handleInputChange}
                name="volunteerType"
                placeholder="Volunteer Type (required)"
              />
              <Input
                value={this.state.password}
                onChange={this.handleInputChange}
                name="password"
                placeholder="Password (required)"
              />
              <FormBtn
                disabled={!(this.state.name && this.state.gender && this.state.volunteerType && this.state.password && this.state.email)}
                onClick={this.handleFormSubmit}
              >
                Submit Volunteer
              </FormBtn>
            </form>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manager;
