import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = props => {
    return (
        <ul className="goal-list">
            <CourseGoalItem />
            <CourseGoalItem />
        </ul>
    );
}

export default CourseGoalList