import React, { useState } from "react";
import ActivityCard from "../thumbnailActivity/ThumbnailActivityCard";
// import activitiesData from "../../apiCalls/dummyData";
import "./ToDos.scss";

export default function ToDos({ activities, savedActivities, setSavedActivities, childName }) {
  
  const activityCards = savedActivities.map((activity) => {
    return (
      <ActivityCard
        key={activity.id}
        id={activity.id}
        image={activity.img_url}
        startAge={activity.start_age}
        endAge={activity.end_age}
        name={activity.name}
        materials={activity.materials}
        instructions={activity.instructions}
        indoor={activity.indoor}
        outdoor={activity.outdoor}
        motorSkill={activity.motor_skills}
        activities={activities}
        savedActivities={savedActivities}
        setSavedActivities={setSavedActivities}
      />
    );
  });

    return (
        <>
          <h2 className="to-do-h2">{childName}'s Favorite Activities</h2>
          <section className="to-do-container">
            {activityCards}
          </section>
        </>
    );
}

