import React, { useEffect, useMemo, useState } from 'react';
import { useRenderCounter } from '../customHooks/useRenderCounter';

const getLongestTodo = (todos) => {
    console.log('search the longest todo');

    let longest = '';
    todos.forEach(({ title, id }) => {
        if (title.length > longest.length) {
            longest = title;
        }
    });

    return longest;
};

const CalculateWordWithMemo = () => {
    const [todos, setTodos] = useState([]);
    const [count, setCount] = useState(0);

    useRenderCounter();

    const handleOnClick = () => {
        setCount(count + 1);
    };

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos').then((response) => {
            response.json().then((data) => {
                setTodos(data);
                console.log(data);
            });
        });
    }, []);

    const todoLongest = useMemo(() => {
        return getLongestTodo(todos);
    }, [todos]);

    return (
        <>
            <h5>Calculate word with useMeo</h5>
            <button onClick={handleOnClick}>click to increment count</button>
            <span>{count}</span>

            <p>Todos: ({todos.length}x)</p>
            <p>Longest-TODO: "{todoLongest}"</p>
        </>
    );
};

export default CalculateWordWithMemo;
