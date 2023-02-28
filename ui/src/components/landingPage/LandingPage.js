import React from "react";
import { useNavigate } from "react-router-dom";
import "./LandingPage.scss";
import Form from "../form/Form";


export default function LandingPage({careGiverName, setCareGiverName, childName, setChildName}) {
   
    let navigate = useNavigate()

    return (
        <section className="landing">
            <Form careGiverName={careGiverName} 
            setCareGiverName={setCareGiverName}
            childName={childName}
            setChildName={setChildName}
            />
            <section className="call-to-action">
                <p className="hello-p">Hi {careGiverName}!</p>
                <p className="hello-p">Let's play with {childName}!</p>
            </section>
            <div className="button-box">
                <button className="find" onClick={() => navigate("/dashboard")} >Find a New Activity</button>
                <button className="go" onClick={() => navigate("/favorite-Activities")} >Go to Favorite Activities</button>
            </div>
        </section>
    );
}