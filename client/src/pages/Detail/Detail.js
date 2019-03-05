import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";

class Detail extends Component {
  state = {
    volunteer: {}
  };
  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    API.getVolunteer(this.props.match.params.id)
      .then(res => this.setState({ volunteer: res.data }))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.volunteer.name}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-10 md-offset-1">
            <article>
              <h1>Volunteer Info</h1>
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
          </Col>
        </Row>
        <Row>
          <Col size="md-2">
            <Link to="/volunteers">← Back to Volunteers</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
