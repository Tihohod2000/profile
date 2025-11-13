import React from "react";
import icon from "../images/icon.gif";


function Header ({setPage}) {

        return (
            <header className="App-header">
                <img className={"icon"} src={icon} onClick={() => setPage(1)}/>
                <button id={1} onClick={() => setPage(1)}>Обо мне</button>
                <button id={2} onClick={() => setPage(2)}>Проекты</button>
                {/*<button id={3} onClick={() => setPage(3)}>Технологий</button>*/}
                {/*<button id={4} onClick={() => setPage(4)}>Кнопка 4</button>*/}
            </header>
        )
}



export default Header;