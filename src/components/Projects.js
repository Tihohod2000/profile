import React from "react";
import Project from "./Project";

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects : [
                {
                    id: 1,
                    name: 'Bob',
                    link: 'https://github.com/Tihohod2000'
                },
                {
                    id: 2,
                    name: 'Автомат напитков',
                    link: "https://github.com/Tihohod2000/Drinks_vending_machine_1"
                },
                {
                    id: 3,
                    name: 'Конвектор RGBTOBW',
                    link: "https://github.com/Tihohod2000/Convert_RGBToBW"
                },
                {
                    id: 4,
                    name: 'Библиотека коннектор и приложение для работы с биржей Bifinex',
                    link: "https://github.com/Tihohod2000/Bitfinex"
                },
            ]
        }
    }

    render() {
        return (
            <div className="main">
                <h1>Тут представлены мои Pet-проекты!</h1>
                {/*<h2>‍👩‍💻 Обо мне:</h2>*/}
                <div className="main-info">
                    <div>Подробнее с моими проектами вы можете ознакомится на моей странице GitHub.</div>
                    <a href="https://github.com/Tihohod2000" target="_blank">
                        https://github.com/Tihohod2000
                    </a>
                </div>
                <div className="projects">
                    {this.state.projects.map((item) => (
                        <Project key={item.id} project={item} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Projects;
