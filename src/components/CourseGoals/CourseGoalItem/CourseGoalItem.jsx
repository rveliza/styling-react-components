import React from "react";


const CourseGoalItem = props => {
    const deleteHandler = () => {
        // console.log(props.onDelete)
        props.onDelete(props.id);
    }

    return (
        <li className="goal-item" onClick={deleteHandler}>
            {props.children}
        </li>
    );
}

export default CourseGoalItem;