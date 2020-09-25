import React from 'react';
import shuffle from 'lodash.shuffle';
import { decode } from 'he';

import styles from './Question.module.css';

const Question = ({ query, clicked }) => {

    const { category, question, correct_answer, incorrect_answers, type } = query;
    let answers = type === 'multiple'
        ? shuffle([...incorrect_answers, correct_answer])
        : ['True', 'False'];

    return (
        <>
            <h2>{category}</h2>
            <h3 style={{ fontWeight: 500 }}>{decode(question)}</h3>
            {answers.length && answers.map((answer, index) => {
                return <button className={styles.answer} key={index} onClick={({ target }) => clicked(target.innerText)}>{answer}</button>
            })}
        </>
    )
};

export default Question;

