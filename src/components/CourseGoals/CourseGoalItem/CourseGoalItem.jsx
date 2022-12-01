import React from "react";

const deleteHandler = () => {
    console.log('This item will be deleted');
}

const CourseGoalItem = () => {
    return (
        <li className="goal-item" onClick={deleteHandler}>
            This is a list item!
        </li>
    );
}

export default CourseGoalItem;