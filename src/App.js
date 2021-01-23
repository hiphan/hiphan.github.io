import React, { Component } from 'react';
import { HashRouter, Switch, Route, NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faMapMarker, faEnvelope, faPhone, faHome, faBriefcase, faProjectDiagram, faBars } from '@fortawesome/free-solid-svg-icons';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

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
      sidebarWidth: 0,
      sidebarExpanded: false
    };
  }

  handleToggleButton = (expanded) => {
    this.setState({ sidebarExpanded: expanded });
  }

  closeSidebar = () => {
    this.setState({ sidebarExpanded: false });
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
    document.getElementById("mainContent").addEventListener("click", this.closeSidebar);
  }

  render() {
    return (
      <HashRouter>
        <Container fluid>
          <Row>
            <Col xs={6} lg={2} id="sidebarColumn">
              <Navbar className="sidebar-wrapper" expand="lg" onToggle={this.handleToggleButton} expanded={this.state.sidebarExpanded}>
                <Navbar.Toggle aria-controls="sidebarMain" className="sidebar-button" />
                <Navbar.Collapse className="sidebar" id="sidebarMain">
                  <Nav defaultActiveKey="/" style={{ width: this.state.sidebarWidth }} className="flex-column">
                    <div className="profile-picture-container">
                      <Image width={this.state.profileWidth} height={this.state.profileHeight} alt="Profile Picture" src={process.env.PUBLIC_URL + "/images/profile-pic.jpg"} roundedCircle className="profile-picture" />
                    </div> 

                    <div className="contact-container">
                      <Nav.Item className="nav-item">
                        <Nav.Link className="contact-link"><FontAwesomeIcon icon={faMapMarker} /> Amherst, MA</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link href="mailto:hhphan@cs.umass.edu" className="contact-link"><FontAwesomeIcon icon={faEnvelope} /> hhphan@cs.umass.edu</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link href="mailto:huyhieu.210198@gmail.com" className="contact-link"><FontAwesomeIcon icon={faEnvelope} /> huyhieu.210198@gmail.com</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <Nav.Link href="tel:8572055726" className="contact-link" ><FontAwesomeIcon icon={faPhone} /> (857) 205-5726</Nav.Link>
                      </Nav.Item>
                    </div>

                    <div className="menu-container">
                      <Nav.Item className="nav-item">
                        <NavLink exact to="/" onClick={this.closeSidebar} className="nav-link" activeClassName="selected-link"><span className="nav-icon"><FontAwesomeIcon icon={faHome} /></span><span className="nav-text">Home</span></NavLink>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <NavLink to="/experience" onClick={this.closeSidebar} className="nav-link" activeClassName="selected-link"><span className="nav-icon"><FontAwesomeIcon icon={faBriefcase} /></span><span className="nav-text">Experience</span></NavLink>
                      </Nav.Item>
                      <Nav.Item className="nav-item">
                        <NavLink to="/projects" onClick={this.closeSidebar} className="nav-link" activeClassName="selected-link"><span className="nav-icon"><FontAwesomeIcon icon={faProjectDiagram} /></span><span className="nav-text">Projects</span></NavLink>
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
                </Navbar.Collapse>
              </Navbar>
            </Col>

            <Col xs={12} lg={10} className="main-content" id="mainContent">
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
      </HashRouter>
    );
  }
}

export default App;
