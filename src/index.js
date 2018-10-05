import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Lab extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            "id": 99,
            "title": "Perch Research Web Development",
            "description": "Help develop the Perch Research web app, which will be used to organize university lab projects from UROP and (in the future) across many universities. Will involve programming in React (Javascript), and PHP",
            "duties": "Attend weekly web development meetings and work sessions. Work with other web development members on different coding assignments on the frontend and backend of thes site",
            "time_commitment": 8,
            "classification": "Software Development"
        }
    }
    
    render() {
        return (
            <div>
                <div className="card card-width">
                    <div className="card-body">
                        <h5 className="card-title center">{this.state.title}</h5>
                        <h6 className="card-subtitle mb-2 text-muted center">{this.state.classification}</h6>
                        <p className="card-text">{this.state.description}</p>
                        <p className="card-text">{this.state.duties}</p>
                        <ul className="list-group list-group-flush">
                            <li className="list-group-item">Time commitment: {this.state.time_commitment} hours</li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <Lab />,
    document.getElementById('root')
);