import React, { Component } from 'react';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import ProjectCard from './ProjectCard';

import '.././styles/styles.css';
import '.././styles/Projects.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { repos: {} };
    }

    componentDidMount() {
        fetch("https://api.github.com/users/hiphan/repos")
          .then(response => response.json())
          .then(function(data) {
            let repos = {};
            data.forEach(function(repo) {
                repos[repo.html_url] = repo.pushed_at;
            });
            this.setState({ repos: repos});
          }.bind(this));
    }

    render() {
        return (
            <div className="content">
                <Row className="card-row">
                    <Col xs={12} lg={4}>
                        <ProjectCard title="AR Sudoku Solver" link="https://github.com/hiphan" date={this.state.repos["https://github.com/hiphan"]} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <ProjectCard title="CIFAR-10 Conditional GAN" link="https://github.com/hiphan" date={this.state.repos["https://github.com/hiphan"]} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <ProjectCard title="Neural Stylometry" link="https://github.com/sharath/neural-stylometry" date={this.state.repos["https://github.com/hiphan/"]} />
                    </Col>
                </Row>

                <Row className="card-row">
                    <Col xs={12} lg={4}>
                        <ProjectCard title="Neural Style Transfer" link="https://github.com/hiphan/neural-style-transfer" date={this.state.repos["https://github.com/hiphan/neural-style-transfer"]} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <ProjectCard title="Digit Recognizer" link="https://github.com/hiphan/digit-recognition" date={this.state.repos["https://github.com/hiphan/digit-recognition"]} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <ProjectCard title="Titanic: Machine Learning from Disaster" link="https://github.com/hiphan/titanic" date={this.state.repos["https://github.com/hiphan/titanic"]} />
                    </Col>
                </Row>

                <Row className="card-row">
                    <Col xs={12} lg={4}>
                        <ProjectCard title="Easy Task" link="https://github.com/hiphan/easy-task" date={this.state.repos["https://github.com/hiphan/easy-task"]} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <ProjectCard title="Zeus Bot" link="https://github.com/hiphan/weather-bot" date={this.state.repos["https://github.com/hiphan/weather-bot"]} />
                    </Col>
                    <Col xs={12} lg={4}>
                        <ProjectCard title="Maze Search Visualization" link="https://github.com/hiphan/maze-search" date={this.state.repos["https://github.com/hiphan/maze-search"]} />
                    </Col>
                </Row>

                <Row className="card-row">
                    <Col xs={12} lg={4}>
                        <ProjectCard title="K-Means Clustering Visualization" link="https://github.com/hiphan/kmeans-clustering" date={this.state.repos["https://github.com/hiphan/kmeans-clustering"]} />
                    </Col>
                </Row>
            </div>
        );
    } 
}

export default Projects;