import React from "react";

class Project extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // project: this.props.project
        }
    }

    render() {
        return (
            <div className="project" >
                <h3>{this.props.project.name}</h3>
                {/*<h3>{this.state.project.name}</h3>*/}
                <a className="link-project" target="_blank" href={this.props.project.link}
                   rel="noreferrer">{this.props.project.link}</a>
                <div className="info-from-readme">{this.props.project.readMe}</div>
                <div className="language-of-progect">Language: {this.props.project.language}</div>
            </div>
        )
    }
}

export default Project;