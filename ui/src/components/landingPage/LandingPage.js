import React from "react";
import { useNavigate } from "react-router-dom";
// import "./LandingPage.scss";
import styles from "./LandingPage.module.css";
import { RiHeartAddFill, RiGameLine } from "react-icons/ri";
import Form from "../form/Form";



export default function LandingPage({careGiverName, setCareGiverName, childName, setChildName}) {
    let navigate = useNavigate()

    return (
        <section className={styles.landing}>
            <Form careGiverName={careGiverName} 
            setCareGiverName={setCareGiverName}
            childName={childName}
            setChildName={setChildName}
            />
            <section className={styles.callToAction}>
                <p className={styles.helloP}>Hi {careGiverName}!</p>
                <p className={styles.helloP}>Let's play with {childName}!</p>
            </section>
            <div className={styles.buttonBox}>
                <button className={styles.find} onClick={() => navigate("/dashboard")} >Find a New Activity <RiHeartAddFill className={styles.filledHeart}/></button>
                <button className={styles.go} onClick={() => navigate("/favorite-Activities")} >Go to Favorite Activities <RiGameLine className={styles.biter}/></button>
            </div>
        </section>
    );
}