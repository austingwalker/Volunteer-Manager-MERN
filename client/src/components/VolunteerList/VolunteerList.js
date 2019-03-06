import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

class VolunteerList extends Component {
  // state = {
  //   volunteers: [],
  //   name: "",
  //   gender: "",
  //   volunteerType: [],
  //   email: "",
  //   password: ""
  // };

  // componentDidMount() {
  //   this.loadVolunteers();
  // }

  // loadVolunteers = () => {
  //   API.getVolunteers()
  //     .then(res =>
  //       this.setState({ volunteers: res.data, name: "", gender: "", password: "", volunteerType: [], email: "" })
  //     )
  //     .catch(err => console.log(err));
  // };

  deleteVolunteer = id => {
    API.deleteVolunteer(id)
      .then(res => this.loadVolunteers())
      .catch(err => console.log(err));
  };

  

  // handleInputChange = event => {
  //   const { name, value } = event.target;
  //   this.setState({
  //     [name]: value
  //   });
  // };

  // handleFormSubmit = event => {
  //   event.preventDefault();
  //   if (this.state.name && this.state.gender && this.state.volunteerType && this.state.password && this.state.email) {
  //     API.saveVolunteer({
  //       name: this.state.name,
  //       gender: this.state.gender,
  //       password: this.state.password,
  //       volunteerType: this.state.volunteerType,
  //       email: this.state.email
  //     })
  //       .then(res => this.loadVolunteers())
  //       .catch(err => console.log(err));
  //   }
  // };

  render() {
    return (
      <Container fluid>
        <Row>
        <Col>
            <ListItem key={this.props.id}>
                    <Link to={"/manager/volunteer/" + this.props.id}>
                      <strong>
                        {this.props.name} - {this.props.volunteerType}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteVolunteer(this.props.id)} />
              </ListItem>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default VolunteerList;

{/* <Container fluid>
<Row>
<Col>
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
</Container> */}
