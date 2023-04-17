import React from "react";
import { useNavigate } from "react-router-dom";
// import "./HeaderNav.scss";
import styles from "./HeaderNav.module.css";
import { BiGame, BiHeartSquare } from "react-icons/bi";


export default function HeaderNav() {
    const navigate = useNavigate();
    return (
        <header className={styles.headerContainer}>
                <nav className={styles.headerNav}>
                    <button className={styles.invisButton} onClick={() => navigate("/dashboard")}>
                        <BiGame className={styles.clipboard} alt="bookmark icon" />
                    </button>
                    <button className={styles.invisButton} onClick={() => navigate("/")}>
                        <h1 className={styles.mainTitle}>PlayPals</h1>   
                    </button >
                    <button className={styles.invisButton} onClick={() => navigate("/favorite-Activities")}>
                        <BiHeartSquare className={styles.dude} alt="little dude icon" />      
                    </button>  
                </nav>
        </header>
    );
}