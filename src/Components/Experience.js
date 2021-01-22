import React, { Component } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import '.././styles/styles.css';
import '.././styles/Experience.css';

class Experience extends Component {
  render() {
    return (
      <div className="content">
        <ListGroup variant="flush" className="experience">
        	<ListGroup.Item className="experience-type">
        		<h2>Internships</h2>
        		<ul className="list">
        			<li className="list-item">	
        				<h5>Machine Learning Engineering Intern</h5>
        				<h6><span><a target="_blank" rel="noreferrer" href="https://wonderlic.com/" className="company-name">Wonderlic, Inc.</a> - Vernon Hills, IL (remote)</span><span className="duration">Sep 2020 - Dec 2020</span></h6>
        				<div className="description">
						</div>
        			</li>
        			<li className="list-item">	
        				<h5>Machine Learning Engineering Intern</h5>
        				<h6><span><a target="_blank" rel="noreferrer" href="https://www.bose.com/en_us/index.html" className="company-name">Bose Corp.</a> - Framingham, MA (remote)</span><span className="duration">June 2020 - Aug 2020</span></h6>
        				<div className="description">
        				</div>
        			</li>
        			<li className="list-item">
        				<h5>Software Engineering Intern</h5>
        				<h6><span><a target="_blank" rel="noreferrer" href="https://www.fpt-software.com/" className="company-name">FPT Software</a> - Hanoi, Vietnam</span><span className="duration">May 2017 - Aug 2017</span></h6>
        				<div className="description">
        				</div>
        			</li>
        		</ul>
        	</ListGroup.Item>

        	<ListGroup.Item className="experience-type">
        		<h2>Research</h2>
        		<ul className="list">
        			<li className="list-item">
        				<h5>Research Experience for Undergraduates (REU)</h5>
        				<h6><span><a target="_blank" rel="noreferrer" href="http://slanglab.cs.umass.edu/" className="company-name">SLANG Lab</a> - Amherst, MA</span><span className="duration">June 2019 - Sep 2019</span></h6>
        				<div className="description">
        				</div>
        			</li>
        		</ul>
        	</ListGroup.Item>

        	<ListGroup.Item className="experience-type">
        		<h2>Teaching Assistantships</h2>
        		<ul className="list">
        			<li className="list-item">
        				<h6 className="course-name">COMPSCI 220: Programming Methodologies - Spring 2021</h6>
        				<h6 className="course-name">COMPSCI 121: An Introduction to Problem Solving with Computerss - Fall 2020</h6>
        				<h6 className="course-name">COMPSCI 240: Reasoning Under Uncertainty - Spring 2020</h6>
        				<h6 className="course-name">COMPSCI 240: Reasoning Under Uncertainty (UCA) - Spring 2020</h6>
        			</li>
        		</ul>
        	</ListGroup.Item>

        	<ListGroup.Item className="experience-type">
				<h2>Other</h2>
        		<ul className="list">
        			<li className="list-item">
        				<h5>Peer Tutor in Computer Science and Mathematics (CRLA Certified)</h5>
        				<h6><span>Learning Resource Center - Amherst, MA</span><span className="duration">Sep 2017 - May 2019</span></h6>
        			</li>
        		</ul>
        	</ListGroup.Item>

        </ListGroup>
      </div>
    );
  }
}

export default Experience;
