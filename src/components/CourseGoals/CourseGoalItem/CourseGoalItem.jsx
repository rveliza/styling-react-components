import React from "react";

const deleteHandler = () => {
    console.log('This item will be deleted');
}

const CourseGoalItem = props => {
    // console.log(props.children)
    return (
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}
        </li>
    );
}

export default CourseGoalItem;