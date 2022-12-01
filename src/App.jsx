import React, { useState } from "react";

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
                <h3>Coarse input goes here</h3>
            </section>
            <section id="goals">
                {content}
            </section>
        </div>
    );
}


export default App;