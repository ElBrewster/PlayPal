
import React, { useState } from "react";
// import "./OneActivityView.scss";
import styles from "./OneActivityView.module.css";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RxDot } from "react-icons/rx";
 
export default function ActivityInfoView() {
	const location = useLocation()
	const currentId = location.state.id
	const allActivities = location.state.activities
	const currentActivity = allActivities.find(activity => activity.id === currentId)

	return (
		<section className={styles.activityInfoViewContainer}>
			<div className={styles.heartAndName}>
				<h3 className={styles.activityName}>{currentActivity.name}</h3>
			</div>
			<div className={styles.pictureButtons}>
					<img src={currentActivity.img_url} alt={currentActivity.name} className={styles.activityPic}/>
				{/* <Link to={`/Activities/`} style={{ textDecoration: 'none' }} className="activity-link2">
				</Link> */}
				<div className={styles.buttons}>
				</div>
			</div>
			<div className={styles.pinkBox}>&nbsp;&nbsp;&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;
				<RxDot className={styles.dot}/>&nbsp;&nbsp;&nbsp;&nbsp;
			</div>
			<div className={styles.information}>
				<p className={styles.activityAge}>{currentActivity.start_age} months -&nbsp;{currentActivity.end_age} months</p>
				<p className={styles.activityMaterials}><span className={styles.boldSpan}>MATERIALS:
					</span>&nbsp;{currentActivity.materials}</p>
				<p className={styles.activityInstrux}><span className={styles.boldSpan}>INSTRUCTIONS:</span>&nbsp;{currentActivity.instructions}.</p>
			</div>
		</section>
	)
}