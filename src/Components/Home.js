import React, { Component } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import '.././styles/styles.css';
import '.././styles/Home.css';

class Home extends Component {
  render() {
    return (
      <div className="content">
      	<h1>Henry Phan</h1>
        <ListGroup variant="flush" className="home">
        	<ListGroup.Item className="">
        		<h2>About Me</h2>
        		<p>
        			I'm currently pursuing my Master's degree in Machine Learning at the University of Massachusetts, Amherst. After receiving my Bachelor's degree also from UMass, I was very fortunate to receive the Bay State Fellowship to continue my education.
        			<br />
        			My research interests include natural language processing (NLP) and machine learning with an emphasis on robust models that are capable of learning with noisy labels and/or limited data. I also enjoy learning web development as a hobby.
        		</p>
        	</ListGroup.Item>

        	<ListGroup.Item className="">
        		<h2>Education</h2>
        		<ul className="list">
        			<li className="list-item">
        				<h5 className="institution">University of Massachusetts, Amherst</h5>
        				<h6><span>Master of Science in Computer Science</span><span className="duration">Jan 2020 - present</span></h6>
        				Awards/Honors:
        				<ul> 
        					<li className="award">Bay State Fellowship</li>
        				</ul>
        			</li>
        			<li className="list-item">
        				<h5 className="institution">University of Massachusetts, Amherst</h5>
        				<h6><span>Bachelor of Science in Computer Science and Statistics</span><span className="duration">Sep 2016 - Dec 2019</span></h6>
        				Awards/Honors:
        				<ul>
        					<li className="award">Finalist for the Dean’s International Scholarship of College of Information and Computer Science</li>
        				</ul>
        			</li>
        		</ul>
        	</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default Home;
