// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/Main';
import React from "react";
import Projects from "./components/Projects";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 1,
            handleButtonClick: props.handleButtonClick,
        }
    }

    handleButtonClick = (buttonData) => {
        this.setState({page: buttonData.button});
    }


    render() {
        return (

            <div className="App">
                <Header onButtonClick={this.handleButtonClick} />
                {this.state.page === 1 && <Main />}
                {this.state.page === 2 && <Projects />}
                {this.state.page === 3 && <Projects />}

            </div>
        );
    }


}

export default App;
