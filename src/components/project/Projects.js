import React from "react";
import Project from "./Project";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false,
            projectsOnline: [],
            projects: [
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
            ]
        }
    }

    componentDidMount() {
        this.getProjectsFromGitHub();


    }

    render() {
        // console.log("---------------------");
        // console.log(this.props.data);
        // console.log("---------------------");
        return (
            <div className="main">
                <h1>Тут представлены мои</h1>
                <h1>Pet-проекты!</h1>
                <div className="main-info">
                    <div>Подробнее с моими проектами вы можете ознакомится на моей странице GitHub.</div>
                    <a href="https://github.com/Tihohod2000" target="_blank" rel="noreferrer">
                        https://github.com/Tihohod2000
                    </a>
                </div>
                <div className="projects">
                    {this.state.loaded ? <div></div> : <div>Загружены оффлайн данные</div>}
                    {this.state.projectsOnline.length > 0 ?
                        this.state.projectsOnline.map((item, index) => (
                            <Project key={index} project={item}/>)) :
                        this.props.data.projects.map((item, index) => (
                            <Project key={index} project={item}/>
                        ))}
                </div>
            </div>
        )
    }


    getProjectsFromGitHub() {
        if (this.state.loaded) {
            return;
        }
        fetch('https://api.github.com/users/Tihohod2000/repos', {
            method: 'GET',
        })
            .then(response => {
                if (response.status === 200) {
                    // this.setState({loaded: true});
                    return response.json();
                }
                return;
            })
            .then(reposData => {

                if (reposData.message) {
                    this.setState({projectsOnline: []});
                    throw new Error("Ошибка запроса");
                }
                // Создаем массив промисов для всех запросов readme
                const readmePromises = reposData.map(repo => {
                    return fetch(`https://api.github.com/repos/Tihohod2000/${repo.name}/readme`, {
                        method: 'GET',
                        headers: {
                            'Accept': 'application/vnd.github.v3+json'
                        }


                    })
                        .then(response => response.json())
                        .then(readmeData => {
                            let readme;
                            let language = repo.language;
                            if (readmeData.content) {
                                readme = this.decodeBase64UTF8(readmeData.content)
                                if (readme.length > 100) {
                                    readme = readme.slice(0, 100) + "...";
                                }
                            } else {
                                readme = 'No README found'
                            }

                            return {
                                name: repo.name,
                                readMe: readme,
                                link: repo.html_url,
                                language: language,
                            };
                        })
                        .catch(err => {
                            // console.error(`Error fetching README for ${repo.name}:`, err);
                            return {
                                name: repo.name,
                                readMe: 'Error loading README',
                                link: repo.html_url
                            };
                        });
                });

                // Ждем завершения всех запросов
                return Promise.all(readmePromises);
            })
            .then(projects => {
                this.setState({projectsOnline: projects});
                this.setState({loaded: true});
            })
            .catch(err => {
                // console.error('Error fetching repositories:', err);
                this.setState({projectsOnline: []});
            });
    }


    decodeBase64UTF8(base64) {
        // Декодируем Base64
        const binaryString = atob(base64);
        // Преобразуем в массив байтов
        const bytes = new Uint8Array(binaryString.length);
        for (let i = 0; i < binaryString.length; i++) {
            bytes[i] = binaryString.charCodeAt(i);
        }
        // Декодируем с учетом UTF-8
        return new TextDecoder('utf-8').decode(bytes);
    }
}


export default Projects;
