import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
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

  componentDidMount() {
    this.loadVolunteers();
  }

  loadVolunteers = () => {
    API.getVolunteers()
      .then(res =>
        this.setState({ volunteers: res.data, name: "", gender: "", password: "", volunteerType: [], email: "" })
      )
      .catch(err => console.log(err));
  };

  deleteVolunteer = id => {
    API.deleteVolunteer(id)
      .then(res => this.loadVolunteers())
      .catch(err => console.log(err));
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
          <Col size="md-6">
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
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Volunteer List</h1>
            </Jumbotron>
            {this.state.volunteers.length ? (
              <List>
                {this.state.volunteers.map(volunteer => (
                  <ListItem key={volunteer._id}>
                    <Link to={"/manager/volunteer/" + volunteer._id}>
                      <strong>
                        {volunteer.name} - {volunteer.volunteerType}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteVolunteer(volunteer._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Manager;
