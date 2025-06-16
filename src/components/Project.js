import React from "react";
// import Button from "./Button";

class User extends React.Component {
    project = this.props.project;
    render() {
        return (
            <div className="project" >
                {/*<Button text = "Удалить"/>*/}
                {/*<Button text = "Другое действие"/>*/}
                <h3>{this.project.name}</h3>
                <a className="link-project" target="_blank" href={this.project.link}>{this.project.link}</a>
                {/*<b>{this.user.firesname === "Bob" ? 'Это боб' : 'Это не боб'}</b>*/}
            </div>

        )
    }


}

export default User;