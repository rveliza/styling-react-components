import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        { text: 'Do all exercises!', id: 'g1' },
        { text: 'Finish the course!', id: 'g2' }
    ]);

    const deleteItemHandler = goalId => {
        console.log('This is the goalId: ', goalId);
    }

    let content = (
        <p style={{ textAling: 'center' }}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <CourseGoalList items={courseGoals} onDeleteItem = {deleteItemHandler}/>
        );
    }

    return(
        <div>
            <section id="goal-form">
                <p>Form goes here</p>
            </section>
            <section id="goals">
                {content}
            </section>
        </div>
    );
}


export default App;