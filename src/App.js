// import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Main from './components/main/Main';
import React from "react";
import data from './components/data/data.json';
import Projects from "./components/project/Projects";
import Technologies from "./components/technology/Technologies";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // data: null,
            page: 1,
            handleButtonClick: props.handleButtonClick,
        }
    }

    handleButtonClick = (buttonData) => {
        this.setState({page: buttonData.button});

        // fetch("./components/data/data.json")
        //     .then(res => res.json())
        //     .then(data => {
        //         this.setState({data: data});
        //     })
        //     .catch(err => console.log(err));

    }


    render() {
        // console.log(data);
        return (

            <div className="App">
                <Header onButtonClick={this.handleButtonClick} />
                {this.state.page === 1 && <Main />}
                {this.state.page === 2 && <Projects data = {data} />}
                {this.state.page === 3 && <Technologies />}

            </div>
        );
    }


}

export default App;
