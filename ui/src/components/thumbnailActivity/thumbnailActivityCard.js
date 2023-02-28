import React from "react";
import { Link } from "react-router-dom";
import "./thumbnailActivityCard.scss";
import { BsBookmark, BsFillBookmarkFill } from "react-icons/bs";


export default function ActivityCard({id, name, startAge, endAge, image, activities, savedActivities, setSavedActivities}) {

  function addToSavedActivities(grabbedId) {
		const checked = savedActivities.find(activity => activity.id === grabbedId);
		if(!checked) {
			const savedActivity = activities.find(activity => activity.id === grabbedId);
			setSavedActivities(prevState => [...prevState, savedActivity]);
		} 
  }

  function removeFromSavedActivities(grabbedId){
		const unbookMarked = savedActivities.filter(activity => activity.id !== grabbedId);
		setSavedActivities(unbookMarked);
  }

  const handleBookMarkClickEmpty = () => {
		addToSavedActivities(id)
  }

  const handleBookMarkClickFull = () => {
		removeFromSavedActivities(id);
	}

	return (
		<section id={id} className='activity-card' >
				<div className='title'>
					<p className='activity-name'> {name} </p>
					<p className="activity-age"> {startAge} months-{endAge} months </p>
				</div>
				<div className="pics-container">
					<Link to={`/Activities/${id}`} state={{id: id, activities: activities}} style={{ textDecoration: 'none' }} className="activity-link">
						<img className="activity-image" src={image} alt={name} width={300} />
					</Link>
					<div className="tv-dials">
                    <button className="invis-button" onClick={handleBookMarkClickEmpty}>
                        <BsBookmark className="bookmark" alt="bookmark icon" />
						<p>Add To</p>
                    </button>
					<button className="invis-button" onClick={handleBookMarkClickFull}>
                        <BsFillBookmarkFill className="bookmark2" alt="bookmark icon" />
						<p>REMOVE</p>
                    </button>
					</div>
				</div>
		</section>
	);
}
