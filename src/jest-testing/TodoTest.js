import React from 'react'

function TodoTest({todo}) {
    const {id, title, completed} = todo
    const h1 = <h1> todo - {title} </h1>

    const text = completed ? <strike> {h1} </strike> : h1;

    return (
        <div data-testid={`todo-${id}`}>
            {text}
        </div>
    )
}

export default TodoTest;

// press  u   to get updated snapshot