import React from "react";
import "./OneActivityView.scss";
// import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs"
import { useLocation } from "react-router-dom";

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
				<div className='buttons'>
					{/* {!toggle && <AiOutlineHeart onClick={handleToggle} type='button' alt='blankHeart' className="heart-icon"/>}
					{toggle && <AiFillHeart onClick={handleToggle} type='button' alt='filledHeart' className="heart-icon"/>}
					{!toggle && <AiOutlineCheckCircle onClick={handleToggle} type='button' alt='blankCheckmark' className="check-icon"/>}
					{toggle && <AiFillCheckCircle onClick={handleToggle} type='button' alt='blankCheckmark'  className="check-icon"/>}
					{!toggle && <BsBookmark onClick={handleToggle} type='button' alt='blankBookmark' className="bookmark-icon"/>}
					{toggle && <BsFillBookmarkFill onClick={handleToggle} type='button' alt='blankBookmark' className="bookmark-icon"/>} */}
				</div>
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