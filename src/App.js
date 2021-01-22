import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Nav from 'react-bootstrap/Nav';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faEnvelope, faPhone, faHome, faBriefcase, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';

import './styles/App.css';

import Home from './Components/Home';
import Experience from './Components/Experience';
import Projects from './Components/Projects';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      profileWidth: 0,
      profileHeight: 0,
      sidebarWidth: 0
    };
  }

  updateProfileDimensions = () => {
    const sidebarWidth = document.getElementById("sidebarColumn").clientWidth;
    const windowHeight = window.innerHeight;
    const profileSize = 0.6 * Math.min(sidebarWidth, 0.35 * windowHeight);
    this.setState({ 
      profileWidth: profileSize,
      profileHeight: profileSize,
      sidebarWidth: sidebarWidth
    });
  }

  componentDidMount() {
    this.updateProfileDimensions();
    window.addEventListener("resize", this.updateProfileDimensions);
  }

  render() {
    return (
      <Router>
        <Container fluid>
          <Row>
            <Col xs="2" id="sidebarColumn">
              <Nav defaultActiveKey="/" style={{width: this.state.sidebarWidth}} className="flex-column sidebar">
                <div className="profile-picture-container">
                  <Image width={this.state.profileWidth} height={this.state.profileHeight} alt="Profile Picture" src={process.env.PUBLIC_URL + "/images/profile-pic.jpg"} roundedCircle className="profile-picture" />
                </div> 

                <div className="contact-container">
                  <Nav.Item className="nav-item">
                    <Nav.Link className="contact-link" ><FontAwesomeIcon icon={faMapMarker} /> Amherst, MA</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link href="mailto:hhphan@cs.umass.edu" className="contact-link" ><FontAwesomeIcon icon={faEnvelope} /> hhphan@cs.umass.edu</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link href="mailto:huyhieu.210198@gmail.com" className="contact-link" ><FontAwesomeIcon icon={faEnvelope} /> huyhieu.210198@gmail.com</Nav.Link>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <Nav.Link href="tel:8572055726" className="contact-link" ><FontAwesomeIcon icon={faPhone} /> (857) 205-5726</Nav.Link>
                  </Nav.Item>
                </div>

                <div className="menu-container">
                  <Nav.Item className="nav-item">
                    <NavLink exact to="/" className="nav-link" activeClassName="selected-link"><span className="nav-icon"><FontAwesomeIcon icon={faHome} /></span><span className="nav-text">Home</span></NavLink>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <NavLink to="/experience" className="nav-link" activeClassName="selected-link"><span className="nav-icon"><FontAwesomeIcon icon={faBriefcase} /></span><span className="nav-text">Experience</span></NavLink>
                  </Nav.Item>
                  <Nav.Item className="nav-item">
                    <NavLink to="/projects" className="nav-link" activeClassName="selected-link"><span className="nav-icon"><FontAwesomeIcon icon={faProjectDiagram} /></span><span className="nav-text">Projects</span></NavLink>
                  </Nav.Item>
                </div>

                <div className="social-container">
                  <a target="_blank" rel="noreferrer" href="https://github.com/hiphan" className="social github">
                    <FontAwesomeIcon icon={faGithub} />
                  </a>
                  <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/hieu-ph/" className="social linkedin">
                    <FontAwesomeIcon icon={faLinkedin} />
                  </a>
                </div>

                <div className="footer">
                  <p>Last updated on 01/21/2021.</p>
                </div>
              </Nav>
            </Col>

            <Col xs="10" className="content">
              <Switch>
                <Route exact path="/">
                  <Home />
                </Route>
                <Route path ="/experience">
                  <Experience />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route> 
              </Switch>
            </Col>
          </Row>
        </Container>
      </Router>
    );
  }
}

export default App;
