import React from "react";
import Link from "./Link";

const Header = () => {
    return (
        <div className="header">
            <div className="logo">  
                <Link href="/" className="link logo__link">Cadre Du Monde</Link>
             </div>
             <div className="links">
                <Link href="/" className="link about__link">Home</Link>
                <Link href="/about" className="link about__link">About</Link>
                <Link href="/founder" className="link founder__link">Founder</Link>
            </div>
        </div>
    )


 
};


export default Header;
