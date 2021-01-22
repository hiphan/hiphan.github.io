import React, { Component } from 'react';

import ListGroup from 'react-bootstrap/ListGroup';

import '.././styles/styles.css';
import '.././styles/Projects.css';

class Projects extends Component {
  render() {
    return (
      <div className="content">
        <ListGroup variant="flush" className="projects">
        	<ListGroup.Item className="project">
        		<h5>AR Sudoku Solver</h5>
        		<p><a href="https://github.com/hiphan">[Github]</a></p>
        	</ListGroup.Item>

        	<ListGroup.Item className="project">
        		<h5>CIFAR-10 Conditional GAN</h5>
        		<p><a href="https://github.com/hiphan">[Github]</a></p>
        	</ListGroup.Item>

        	<ListGroup.Item className="project">
        		<h5>Neural Stylometry</h5>
        		<p><a href="https://github.com/sharath/neural-stylometry">[Github]</a></p>
        	</ListGroup.Item>

        	<ListGroup.Item className="project">
        		<h5>Neural Style Transfer</h5>
        		<p><a href="https://github.com/hiphan/maze-search">[Github]</a></p>
        	</ListGroup.Item>

        	<ListGroup.Item className="project">
        		<h5>Digit Recognizer</h5>
        		<p><a href="https://github.com/hiphan/digit-recognition">[Github]</a></p>
        	</ListGroup.Item>

        	<ListGroup.Item className="project">
        		<h5>Titanic: Machine Learning from Disaster</h5>
        		<p><a href="https://github.com/hiphan/titanic">[Github]</a></p>
        	</ListGroup.Item>

        	<ListGroup.Item className="project">
        		<h5>Easy Task</h5>
        		<p><a href="https://github.com/hiphan/Easy-Task">[Github]</a></p>
        	</ListGroup.Item>

        	<ListGroup.Item className="project">
        		<h5>Zeus Bot</h5>
        		<p><a href="https://github.com/hiphan/weather-bot">[Github]</a></p>
        	</ListGroup.Item>

        	<ListGroup.Item className="project">
        		<h5>Maze Search Visualization</h5>
        		<p><a href="https://github.com/hiphan/maze-search">[Github]</a></p>
        	</ListGroup.Item>

        	<ListGroup.Item className="project">
        		<h5>K-Means Clustering Visualization</h5>
        		<p><a href="https://github.com/hiphan/kmeans-clustering">[Github]</a></p>
        	</ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default Projects;