import React from "react";
import icon from "../images/icon.gif";
// import myGif from "../images/programmer.gif";


function Header ({setPage}) {

    const hendleClick = (numberOfPages) => {
        onButtonClick({button: numberOfPages});
    }



        return (
            <header className="App-header">
                <img className={"icon"} src={icon} onClick={() => hendleClick(1)}/>
                <button id={1} onClick={() => setPage(1)}>Обо мне</button>
                <button id={2} onClick={() => setPage(2)}>Проекты</button>
                <button id={3} onClick={() => setPage(3)}>Технологий</button>
                {/*<button id={4} onClick={() => hendleClick(4)}>Кнопка 4</button>*/}
            </header>
        )

}



export default Header;