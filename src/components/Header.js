import React from "react";


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 1,
        }
    }

    render() {
        return (
            <header className="App-header">
                <button>Обо мне</button>
                <button>Проекты</button>
                <button>Стэк технологий</button>
                <button>Кнопка 4</button>
            </header>
        )
    }

}

export default Header;