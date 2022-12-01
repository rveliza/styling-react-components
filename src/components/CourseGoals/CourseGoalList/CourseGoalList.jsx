import React from "react";

import CourseGoalItem from "../CourseGoalItem/CourseGoalItem";

const CourseGoalList = props => {
    // console.log(props.items);
    return (
        <ul className="goal-list">
            {props.items.map(goal => (
                <CourseGoalItem
                    key={goal.id}
                    id={goal.id}
                >
                    {goal.text}
                </CourseGoalItem>
            ))}
        </ul>
    );
}

export default CourseGoalList