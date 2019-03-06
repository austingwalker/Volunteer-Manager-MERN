import React, { Component } from "react";
import "./Login.css"
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Container, Row, Col, Jumbotron } from 'reactstrap';


class Login extends Component {
  state = { 
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
    console.log(this.state.email)
    console.log(this.state.password)
    if (this.state.email && this.state.password) {
      API.loginVolunteer({
        email: this.state.email,
        password: this.state.password,    
      })
        .then(res => {

          if(res.status === 200){
          console.log("Login succesful!")
          this.props.history.push('/manager')

          }
        })
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container className="login" fluid>
        <Row>
        <Col md="4"/>
          <Col className="loginBox" md="4">
            <Jumbotron className="jumboLogin">
              <h1>Login</h1>
            </Jumbotron>
              <form className="login">
                <div className="form-group">
                  <label for="exampleInputEmail1">Email address:</label>
                  <input type="email" onChange={this.handleInputChange}  name="email" value={this.state.email} className="form-control" id="email-input" placeholder="Email"/>
                </div>
                 
                <div className="form-group">
                  <label for="exampleInputPassword1">Password:</label>
                  <input type="password" onChange={this.handleInputChange}  name="password" value={this.state.password} className="form-control" id="password-input" placeholder="Password"/>
                </div>
                <button type="submit" className="btn btn-default"
                disabled={!(this.state.email && this.state.password)}
                onClick={this.handleFormSubmit}
                >Login</button>
              </form>
            <br/>
            <p>Or create and account <a href="/signup">here</a></p>
          </Col>
          <Col md="4"/>
        </Row>
      </Container>
    );
  }
}

export default Login;