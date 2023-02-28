import React from "react";
import { useNavigate } from "react-router-dom";
import "./HeaderNav.scss";
import { BiGame, BiHeartSquare } from "react-icons/bi";


export default function HeaderNav() {
    const navigate = useNavigate();
    return (
        <header className="header-container">
                <nav className="header-nav">
                    <button className="invis-button" onClick={() => navigate("/dashboard")}>
                        <BiGame className="clipboard" alt="bookmark icon" />
                    </button>
                    <button className="invis-button" onClick={() => navigate("/")}>
                        <h1 className="main-title">PlayPals</h1>   
                    </button >
                    <button className="invis-button" onClick={() => navigate("/favorite-Activities")}>
                        <BiHeartSquare className="dude" alt="little dude icon" />      
                    </button>  
                </nav>
        </header>
    );
}