import React from "react";
function Footer() {
    return (
        <footer>
            <a onClick={copyText} className={"mail"}>
                dumanovskiy15@gmail.com
            </a>

        </footer>
    )
}

function copyText(){
    const mail = "dumanovskiy15@gmail.com";
    navigator.clipboard.writeText(mail).then(()=>{
        alert("Почта скопирована!")
    })
}

export default Footer;