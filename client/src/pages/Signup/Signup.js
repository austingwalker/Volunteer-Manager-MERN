import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import "./Signup.css";
import { Container, Row, Col, Jumbotron } from 'reactstrap';
import { Redirect } from 'react-router-dom';

class Signup extends Component {
  state = { 
    email: "",
    password: "",
  };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    console.log(this.state.email)
    console.log(this.state.password)
    if (this.state.email && this.state.password) {
      API.signupVolunteer({
        email: this.state.email,
        password: this.state.password,    
      })
        .then(res => {
          if(res.data) {
            console.log("Signup Successful!");
            this.props.history.push('/login')
          
          } else {
            console.log("Signup error...");
          }
        })
        .catch(err => console.log(err));
    }
  };

 





  render() {

    
    return (

      <Container className="signup" fluid>
        <Row>
        <Col size="md-4"/>
          <Col className="signupBox" size="md-4">
            <Jumbotron className="jumboSignup">
              <h1>Create an Account</h1>
            </Jumbotron>
              <form className="signup">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address:</label>
                  <input type="email" onChange={this.handleInputChange} name="email" value={this.state.email} className="form-control" id="email-input" placeholder="Email"/>
                </div>
                <div className="form-group">
                  <label for="exampleInputPassword1">Password:</label>
                  <input type="password" onChange={this.handleInputChange} name="password" value={this.state.password} className="form-control" id="password-input" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-default"
                 disabled={!(this.state.email && this.state.password)}
                 onClick={this.handleFormSubmit}
                >Create</button>
              </form>
            <br/>
            <p>Or login <a href="/login">here</a></p>
          </Col>
          <Col size="md-4"/>
        </Row>
      </Container>
    );
  }
}

export default Signup;