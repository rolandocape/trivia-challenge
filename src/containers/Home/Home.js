import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { startQuiz } from '../../store/actions/quiz';
import { categories, difficultyOptions, types } from '../../share/constants';
import Selector from "../../components/Selector/Selector";

const Home = props => {

    const [difficulty, setDifficulty] = useState(difficultyOptions[1].value);
    const [category, setCategory] = useState(categories[0].value);
    const [type, setType] = useState('boolean');
    const [amount, setAmount] = useState(10);

    const dispatch = useDispatch();


    const onSubmitForm = async (e) => {
        e.preventDefault();
        await dispatch(startQuiz({ difficulty, category, type, amount }));
        props.history.push('/quiz');
    };

    return (
        <div className="container">
            <h2>Welcome to the Trivia Challenge</h2>
            <h4>Please select from the following options or use the default ones to start a new Trivia Game</h4>
            <form onSubmit={onSubmitForm}>
                <Selector id="difficulty" value={difficulty} options={difficultyOptions} changed={d => setDifficulty(d)}/>
                <Selector id="category" value={category} options={categories} changed={c => setCategory(+c)}/>
                <Selector id="type" value={type} options={types} changed={t => setType(t)}/>
                <label htmlFor="amount">Enter number of questions</label>
                <input
                    type="number"
                    name="amount"
                    id="amount"
                    min="1"
                    max="50"
                    value={amount}
                    onChange={e => setAmount(+e.currentTarget.value)}
                />
                <button type="submit">Begin</button>
            </form>
        </div>
    )
};

export default Home;