
import React, { useState } from "react";
import "./OneActivityView.scss";
// import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { RxDot } from "react-icons/rx";
 
export default function ActivityInfoView() {
	const location = useLocation()
	const currentId = location.state.id
	const allActivities = location.state.activities
	const currentActivity = allActivities.find(activity => activity.id === currentId)

	return (
		<section className='activity-info-view-container'>
			<div className='heart-and-name'>
				<h3 className='activity-name'>{currentActivity.name}</h3>
			</div>
			<div className='picture-buttons'>
					<img src={currentActivity.img_url} alt={currentActivity.name} className="activity-pic"/>
				{/* <Link to={`/Activities/`} style={{ textDecoration: 'none' }} className="activity-link2">
				</Link> */}
				<div className='buttons'>
				</div>
			</div>
			<div className="pink-box">&nbsp;&nbsp;&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;<RxDot className="dot"/>&nbsp;&nbsp;&nbsp;&nbsp;
			</div>
			<div className='information'>
				<p className="activity-age">{currentActivity.start_age} months -&nbsp;{currentActivity.end_age} months</p>
				<p className="activity-materials"><span className="bold-span">MATERIALS:
					</span>&nbsp;{currentActivity.materials}</p>
				<p className="activity-instrux"><span className="bold-span">INSTRUCTIONS:</span>&nbsp;{currentActivity.instructions}.</p>
			</div>
		</section>
	)
}