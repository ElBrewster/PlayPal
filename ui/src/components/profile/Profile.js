import React, { useState } from "react";
// import "./Profile.scss";
import styles from "./Profile.module.css";
import { RiFileList2Line } from "react-icons/ri";

export default function Profile({finishedActivities}) {
    console.log("Finished Activities: ", finishedActivities)
    const [reportCard, setReportCard] = useState(finishedActivities);
    //function to give feedback
    return (
        <section className={styles.report}>
            <h2 className={styles.reportH2}><RiFileList2Line className={styles.listIcon} alt="list icon"/>&nbsp;Kiddo Report Card</h2>
            <p className={styles.reportP}>Summary of "Done" Activities</p>
            <p className={styles.reportP}>This is our way to display to the user that they have quantifiable results.</p>
            <p className={styles.reportP}>"reassurance"</p>
            <p className={styles.reportP}>Look at all the things we've done together!</p>
            <p className={styles.reportP}>I'm a good parent and it doesn't matter what activities I did, just that I did activities with my kid!</p>
            <p className={styles.reportP}>NEED LOGIC: to display stats, like, "seems like you guys like 'hiking' the most!"</p>
            {/* wishlist: be able to print report card  */}
        </section>
    );
}