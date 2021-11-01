// npm i --save-dev @testing-library/react react-test-renderer


import {render, screen, cleanup} from '@testing-library/react';
import renderer from 'react-test-renderer';

import TodoTest from '../jest-testing/TodoTest'



afterEach(() => {
    cleanup();
})



test('Should render Completed - TodoTest', () => {
    const todoData = {id: 1, title: 'Wash Dishes', completed: false};

    render( <TodoTest todo={todoData} />);
    const todoElement = screen.getByTestId('todo-1');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("Wash Dishes");
})


test('Should render Not-Completed-TodoTest', () => {
    const todoData = {id: 2, title: 'Wash Car', completed: true};

    render( <TodoTest todo={todoData} />);
    const todoElement = screen.getByTestId('todo-2');
    expect(todoElement).toBeInTheDocument();
    expect(todoElement).toHaveTextContent("Wash Car");

    expect(todoElement).not.toContainHTML('<strike>');
})



test('matches snapshot', () => {
    const todoData = {id: 1, title: 'Wash Dishes', completed: false};
    const tree = renderer.create( <TodoTest todo={todoData} /> ).toJSON();
    console.log(tree);

    expect(tree).toMatchSnapshot(); // This willl create a snapshot directory
})



/*
test('Should render TodoTest Component', () => {

    render(<TodoTest />);
    const todoElement = screen.getByTestId('todo-1');

    expect(todoElement).toBeInTheDocument();
    // expect(todoElement).toHaveTextContent("Hai");
    expect(todoElement).toHaveTextContent("Hello World");

    // expect(true).toBe(true)
})

*/



// We hided all the data in App.test.js

// npm run test

