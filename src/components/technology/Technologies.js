import React from "react";

class Technologies extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // project: this.props.project
        }
    }

    render() {
        return (
            <div className={"technologies-page"}>
                <div className={"technologies-page-content"}>
                    Левая часть
                </div>

                <div className={"technologies-page-content"}>
                    Правая часть
                </div>
            </div>
        )
    }
}

export default Technologies;