import React from "react";
import { Link } from "react-router-dom";
// import "./thumbnailActivityCard.scss";
import styles from "./thumbnailActivityCard.module.css";
import { RiHeartAddFill } from "react-icons/ri";
import { TiDelete } from "react-icons/ti";


export default function ActivityCard({id, name, startAge, endAge, image, activities, savedActivities, setSavedActivities}) {

  function addToSavedActivities(grabbedId) {
	const checked = savedActivities.find(activity => activity.id === grabbedId);
	if(!checked) {
		const savedActivity = activities.find(activity => activity.id === grabbedId);
		setSavedActivities(prevState => [...prevState, savedActivity]);
	} else {
		return 'oops!';
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
		<section id={id} className={styles.activityCard} >
				<div className={styles.title}>
					<p className={styles.activityName}> {name} </p>
					<p className={styles.activityAge}> {startAge} months-{endAge} months </p>
				</div>
				<div className={styles.picsContainer}>
					<Link to={`/Activities/${id}`} state={{id: id, activities: activities}} style={{ textDecoration: 'none' }} className="activity-link">
						<img className={styles.activityImage} src={image} alt={name} width={300} />
					</Link>
					<div className={styles.tvDials}>
                    <button className={styles.invisButton} onClick={handleBookMarkClickEmpty}>
                        <RiHeartAddFill className={styles.heartmark2} alt="heart plus icon" />
                    </button>
					<button className={styles.invisButton} onClick={handleBookMarkClickFull}>
                        <TiDelete className={styles.bookmark2} alt="remove icon" />
                    </button>
					</div>
				</div>
		</section>
	);
}
