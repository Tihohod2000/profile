import React from "react";


function Header ({onButtonClick}) {


    // const handleBottonClick = (buttnoData) => {
    //     this.state.selectedIndex = buttnoData;
    // }

    const hendleClick = (numberOfPages) => {
        onButtonClick({button: numberOfPages});
    }



        return (
            <header className="App-header">
                <button id={1} onClick={() => hendleClick(1)}>Обо мне</button>
                <button id={2} onClick={() => hendleClick(2)}>Проекты</button>
                <button id={3} onClick={() => hendleClick(3)}>Стэк технологий</button>
                <button id={4} onClick={() => hendleClick(4)}>Кнопка 4</button>
            </header>
        )
}



export default Header;