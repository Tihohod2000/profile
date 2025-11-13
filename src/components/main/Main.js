import {Component} from "react";
import myGif from "../../images/programmer.gif";

function Main() {

        return (
            <div className="main">
                <h1>Привет👋 Меня зовут Тихон!</h1>
                <h2>‍👩‍💻 Обо мне:</h2>
                <div className="main-info">
                    Я начинающий Back-end разработчик.
                    Мой путь в it начался со института ДГТУ, который я окончил в 2024 году.
                    После окончания университета я подрабатывал в коммерческом проекте используя языки C# и Python.
                    Сейчас я изучаю следующие языки: JS, TS и С#.
                    Этот сайт написан на React.
                </div>
                <img className={"MainGif"} src={myGif} alt="Gif" />
            </div>
        )

}

export default Main;
