import React, { useState } from "react";

import CourseGoalList from "./components/CourseGoals/CourseGoalList/CourseGoalList";

const App = () => {
    const [courseGoals, setCourseGoals] = useState([
        { text: 'Do all exercises!', id: 'g1' },
        { text: 'Finish the course!', id: 'g2' }
    ]);

    let content = (
        <p style={{ textAling: 'center' }}>No goals found. Maybe add one?</p>
    );

    if (courseGoals.length > 0) {
        content = (
            <p>There are many goals!</p>
        );
    }

    return(
        <div>
            <section id="goal-form">
                <CourseGoalList />
            </section>
            <section id="goals">
                {content}
            </section>
        </div>
    );
}


export default App;