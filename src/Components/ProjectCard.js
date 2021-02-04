import React, { Component } from 'react';

import Card from 'react-bootstrap/Card';

import '.././styles/styles.css';
import '.././styles/Projects.css';

class ProjectCard extends Component { 
	processDate(date) {
		console.log(date);
		if (date == null) {
			return "Will be available soon!";
		} else {
			const dateFormat = new Date(date);
			const day = ("0" + dateFormat.getUTCDate()).slice(-2);
			const month = ("0" + dateFormat.getUTCMonth()).slice(-2);
			const year = dateFormat.getUTCFullYear();
			return `Last updated on ${month}/${day}/${year}`;
		}
	}

	render() {
		return (
			<Card>
				<Card.Body>
					<Card.Title>{this.props.title}</Card.Title>
					<Card.Text>
					</Card.Text>
					<Card.Link target="_blank" rel="noreferrer" href={this.props.link}>[Github]</Card.Link>
				</Card.Body>
				<Card.Footer><small>{this.processDate(this.props.date)}</small></Card.Footer>
			</Card>
		);
	}
}

export default ProjectCard;