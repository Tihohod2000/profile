import React from "react";

class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            project: this.props.project
        }
    }

    render() {
        return (
            <div className="project" >
                <h3>{this.state.project.name}</h3>
                <a className="link-project" target="_blank" href={this.state.project.link} rel="noreferrer">{this.state.project.link}</a>
                <div className="info-from-readme">{this.state.project.readMe}</div>
            </div>
        )
    }
}

export default User;