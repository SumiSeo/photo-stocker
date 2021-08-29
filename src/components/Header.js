import React from "react";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">  
                <a href="/" className="link logo__link">Cadre Du Monde</a>
             </div>
             <div className="links">
                <a href="/about" className="link about__link">About</a>
                <a href="/founder" className="link founder__link">Founder</a>
            </div>
        </div>
    )


 
};


export default Header;
