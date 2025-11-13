import './App.css';
import Header from './components/Header';
import Main from './components/main/Main';
import data from './components/data/data.json';
import Projects from "./components/project/Projects";
import Technologies from "./components/technology/Technologies";
import { useState } from "react";

function App() {
    // состояние заменяет this.state
    const [page, setPage] = useState(1);
    const [projectsOnline, setProjectsOnline] = useState([]);

    return (
        <div className="App">
            <Header setPage={setPage} />

            {page === 1 && <Main />}
            {page === 2 && <Projects projectsOnline={projectsOnline} setProjectsOnline={setProjectsOnline} />}
            {page === 3 && <Technologies />}
        </div>
    );
}

export default App;
