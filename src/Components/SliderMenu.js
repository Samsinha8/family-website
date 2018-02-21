import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input, Col, FormText } from 'reactstrap';

class SliderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modalLogin: false,
      modalSignup: false,
    };
    this.toggleLogin = this.toggleLogin.bind(this);
    this.toggleSignup = this.toggleSignup.bind(this);
  }
  
  toggleLogin() {
    this.setState({
      modalLogin: !this.state.modalLogin
    });
  }

  toggleSignup() {
    this.setState({
      modalSignup: !this.state.modalSignup
    });
  }
  render() {
    return (
      <nav id="nav">
        <div className="sidenav">
          <div className="slideHeader">
            <a href="#!" className="closebtn">
              <i className="fa fa-times" />
            </a>
            <img src="/Images/mainimage.JPG" className="sideimage" alt="" />
            <h3>Chitransh Pariwar</h3>
          </div>
          <div className="links">
            <div className="login">
            <Button color="primary" onClick={this.toggleLogin}><i className="fa fa-sign-in loginicon" />Login</Button>
              <Modal isOpen={this.state.modalLogin} toggleLogin={this.toggleLogin}>
                <ModalHeader toggle={this.toggleLogin}>Login</ModalHeader>
                <ModalBody>
                  <Form action="/" method="GET">
                    <FormGroup>
                      <Label>E-mail</Label>
                      <Input type="email" name="email" id="email" placeholder="Enter your e-mail" required />
                    </FormGroup>
                    <FormGroup>
                      <Label>Password</Label>
                      <Input type="password" name="password" id="password" placeholder="Enter your password" required />
                    </FormGroup>
                    <ModalFooter>
                      <Button color="primary" type="submit" value="Login">
                        <i className="fa fa-sign-in loginicon" />Login
                      </Button>
                    </ModalFooter>
                  </Form>
                </ModalBody>
              </Modal>
            <Button color="primary" onClick={this.toggleSignup}><i className="fa fa-user-plus loginicon" />SignUp</Button>
              <Modal size="lg" isOpen={this.state.modalSignup} toggleSignup={this.toggleSignup}>
                <ModalHeader toggle={this.toggleSignup}>Signup</ModalHeader>
                <ModalBody>
                  <Form className="signfrm" action="/" method="GET">
                    <FormGroup>
                      <Label>Name</Label>
                      <Col sm={10}>
                      <Input type="text" name="fname" placeholder="Enter First Name" required />
                      <FormText color="muted">
                      First Name
                      </FormText>
                      <Input type="text" name="mname" placeholder="Enter Middle Name" />
                      <FormText color="muted">
                      Middle Name
                      </FormText>
                      <Input type="text" name="lname" placeholder="Enter Surname" required />
                      <FormText color="muted">
                      Last Name
                      </FormText>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label>Date of Birth</Label>
                      <Col sm={10}>
                      <Input type="date" name="dob" id="dob" placeholder="Enter your Date of Birth" required />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label>Mobile No.</Label>
                      <Col sm={10}>
                      <FormGroup row>
                      <Col sm={2}>
                      <Input type="text" name="number" value="+91" />
                      <FormText color="muted">
                      Country Code
                      </FormText>
                      </Col>
                      <Col sm={6}>
                      <Input type="tel" name="number" placeholder="XXXXXXXXXX" required />
                      <FormText color="muted">
                      10-digit Mobile No.
                      </FormText>
                      </Col>
                      </FormGroup>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label for="email">Address</Label>
                      <Col sm={10}>
                        <Input type="text" name="address1" placeholder="Landmark" required />
                        <FormText color="muted">
                        Address Line 1
                        </FormText>
                        <Input type="text" name="address2" placeholder="Area or Locality" required />
                        <FormText color="muted">
                        Address Line 2
                        </FormText>
                        <FormGroup row>
                        <Col sm={5}>
                        <Input type="text" name="city" placeholder="Enter City" required />
                        <FormText color="muted">
                        City
                        </FormText>
                        </Col>
                        <Col sm={5}>
                        <Input type="text" name="dist" placeholder="Enter District" required />
                        <FormText color="muted">
                        District
                        </FormText>
                        </Col>
                        </FormGroup>
                        <Input type="select" name="state" required>
                          <option value="">Select State</option>
                          <option value="A & N Islands">Andaman and Nicobar Islands</option>
                          <option value="Andhra Pradesh">Andhra Pradesh</option>
                          <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                          <option value="Assam">Assam</option>
                          <option value="Bihar">Bihar</option>
                          <option value="Chandigarh">Chandigarh</option>
                          <option value="Chhattisgarh">Chhattisgarh</option>
                          <option value="Dadra and Nagar Haveli">Dadra and Nagar Haveli</option>
                          <option value="Daman and Diu">Daman and Diu</option>
                          <option value="Delhi">Delhi</option>
                          <option value="Goa">Goa</option>
                          <option value="Gujarat">Gujarat</option>
                          <option value="Haryana">Haryana</option>
                          <option value="Himachal Pradesh">Himachal Pradesh</option>
                          <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                          <option value="Jharkhand">Jharkhand</option>
                          <option value="Karnataka">Karnataka</option>
                          <option value="Kerala">Kerala</option>
                          <option value="Lakshadweep">Lakshadweep</option>
                          <option value="Madhya Pradesh">Madhya Pradesh</option>
                          <option value="Maharashtra">Maharashtra</option>
                          <option value="Manipur">Manipur</option>
                          <option value="Meghalaya">Meghalaya</option>
                          <option value="Mizoram">Mizoram</option>
                          <option value="Nagaland">Nagaland</option>
                          <option value="Orissa">Orissa</option>
                          <option value="Pondicherry">Pondicherry</option>
                          <option value="Punjab">Punjab</option>
                          <option value="Rajasthan">Rajasthan</option>
                          <option value="Sikkim">Sikkim</option>
                          <option value="Tamil Nadu">Tamil Nadu</option>
                          <option value="Tripura">Tripura</option>
                          <option value="Uttaranchal">Uttaranchal</option>
                          <option value="Uttar Pradesh">Uttar Pradesh</option>
                          <option value="West Bengal">West Bengal</option>
                        </Input>
                        <FormText color="muted">
                        State
                        </FormText>
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label>Aadhar Card No.
                        <FormText color="muted">
                        (Optional)
                        </FormText>
                      </Label>
                      <Col sm={10}>
                      <Input type="number" name="acnum" id="acnum" placeholder="Enter Aadhar Card No." />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label>E-mail</Label>
                      <Col sm={10}>
                      <Input type="email" name="email" id="email" placeholder="Enter your e-mail" required />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label>Create password</Label>
                      <Col sm={10}>
                      <Input type="password" name="password" id="password" placeholder="Create new Password" required />
                      </Col>
                    </FormGroup>
                    <FormGroup>
                      <Label>Confirm password</Label>
                      <Col sm={10}>
                      <Input type="password" name="password" id="password" placeholder="Re-type Password" required />
                      </Col>
                    </FormGroup>
                    <ModalFooter>
                      <Button color="primary" type="submit" value="Sign up">
                        <i className="fa fa-user-plus loginicon" />Sign Up
                      </Button>
                    </ModalFooter>
                  </Form>
                </ModalBody>
              </Modal>
            </div>
            <hr className="hr" />
            <a href="mailto:chitranshpariwarkc@gmail.com"><h3><i className="fa fa-envelope email icons2" />Chitransh Pariwar</h3></a>
            <a href="https://www.facebook.com/chitranshpariwarkc"><h3><i className="fa fa-facebook icons" />facebook</h3></a>
            <a href="https://twitter.com/SamSamresh"><h3><i className="fa fa-twitter icons" />Twitter</h3></a>
            <a><h3><i className="fa fa-phone icons" />9852236661</h3></a>
          </div>
        </div>
        <div className="backdrop" />
      </nav>
    );
  }
}

export default SliderMenu;
