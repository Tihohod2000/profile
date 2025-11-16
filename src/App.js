import './App.css';
import Header from './components/Header';
import Main from './components/main/Main';
import Projects from "./components/project/Projects";
import Footer from "./components/Footer";
import Technologies from "./components/technology/Technologies";
import { useState } from "react";

function App() {
    // состояние заменяет
    const [page, setPage] = useState(1);
    const [projectsOnline, setProjectsOnline] = useState([]);
    const [repositoriesIsLoaded, setRepositoriesIsLoaded] = useState(false);

    return (
        <div className="App">
            <Header setPage={setPage} />

            {page === 1 && <Main />}

            {page === 2 && <Projects
                projectsOnline={projectsOnline}
                setProjectsOnline={setProjectsOnline}
                repositoriesIsLoaded={repositoriesIsLoaded}
                setRepositoriesIsLoaded={setRepositoriesIsLoaded}
            />}

            {page === 3 && <Technologies />}
            <Footer/>
        </div>
    );
}

export default App;
