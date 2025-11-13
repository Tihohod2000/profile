import React, {useEffect, useState} from "react";
import Project from "./Project";

function Projects({projectsOnline, setProjectsOnline}) {
    const [loaded, setLoaded] = useState(false);
    // const [projectsOnline, setProjectsOnline] = useState([]);
    const [projects] = useState([
        {
            id: 1,
            name: 'Автомат напитков',
            link: "https://github.com/Tihohod2000/Drinks_vending_machine_1",
            readMe: "Тут readMe",
            language: "TypeScript"
        },
        {
            id: 2,
            name: 'Конвектор RGBTOBW',
            link: "https://github.com/Tihohod2000/Convert_RGBToBW",
            readMe: "Тут readMe",
            language: "C#"
        },
        {
            id: 3,
            name: 'Библиотека коннектор и приложение для работы с биржей Bifinex',
            link: "https://github.com/Tihohod2000/Bitfinex",
            readMe: "Тут readMe",
            language: "C#"
        },
    ]);

    useEffect(() => {
        getProjectsFromGitHub().then(r => {
            return r
        });
    }, []); // выполняется один раз при монтировании

    async function getProjectsFromGitHub() {
        if (loaded) return;

        try {
            const response = await fetch('https://api.github.com/users/Tihohod2000/repos');
            if (response.status !== 200) return;

            const reposData = await response.json();
            if (reposData.message) {
                setProjectsOnline([]);
                console.log("Ошибка запроса")
            }

            const readmePromises = reposData.map(async (repo) => {
                try {
                    const readmeResponse = await fetch(
                        `https://api.github.com/repos/Tihohod2000/${repo.name}/readme`,
                        {headers: {'Accept': 'application/vnd.github.v3+json'}}
                    );
                    const readmeData = await readmeResponse.json();

                    let readme;
                    let language = repo.language;

                    if (readmeData.content) {
                        readme = decodeBase64UTF8(readmeData.content);
                        if (readme.length > 100) {
                            readme = readme.slice(0, 100) + "...";
                        }
                    } else {
                        readme = 'No README found';
                    }

                    return {
                        name: repo.name,
                        readMe: readme,
                        link: repo.html_url,
                        language: language,
                    };
                } catch {
                    return {
                        name: repo.name,
                        readMe: 'Error loading README',
                        link: repo.html_url
                    };
                }
            });

            const projects = await Promise.all(readmePromises);
            setProjectsOnline(projects);
            setLoaded(true);

        } catch (err) {
            setProjectsOnline([]);
        }
    }

    function decodeBase64UTF8(base64) {
        const binaryString = atob(base64);
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        return new TextDecoder('utf-8').decode(bytes);
    }

    return (
        <div className="main">
            <h1>Тут представлены мои</h1>
            <h1>Pet-проекты!</h1>

            <div className="main-info">
                <div>Подробнее с моими проектами вы можете ознакомится на моей странице GitHub.</div>
                <a
                    href="https://github.com/Tihohod2000"
                    target="_blank"
                    rel="noreferrer"
                >
                    https://github.com/Tihohod2000
                </a>
            </div>

            <div className="projects" key={"projects"}>
                {loaded ? <div className={"info"}>Загружены данные c GitHub</div> : <div className={"info"}>Загружены оффлайн данные</div>}

                {(projectsOnline.length > 0 ? projectsOnline : projects).map((item, index) => (
                    <Project key={index} project={item}/>
                ))}
            </div>
        </div>
    );
}

export default Projects;
