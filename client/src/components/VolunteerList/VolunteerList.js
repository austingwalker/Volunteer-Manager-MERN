import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { List, ListItem } from "../../components/List";
import EmailBox from "../../components/EmailBox";
import { Input, FormBtn } from "../../components/Form";

class VolunteerList extends Component {
  // state = {
  //   volunteers: [this.props.volunteers]
  // };

 

  loadVolunteers = () => {
    API.getVolunteers()
      .then(res =>
        this.setState({ volunteers: res.data })
      )
      .catch(err => console.log(err));
  };

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



  render() {
    return (
      <Container fluid>
        <Row>
        <Col>
            <EmailBox volunteers={this.props.volunteers}/>
              <List>
                {this.props.volunteers.map(volunteer => (
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
          </Col>
        </Row>
      </Container> 
    );
  }
}

export default VolunteerList;


