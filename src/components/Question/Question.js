import React from 'react';
import { decode } from 'he';
import PropTypes from 'prop-types';

import styles from './Question.module.css';

const Question = ({ query, clicked }) => {

    const { category, question, correct_answer, incorrect_answers, type } = query;
    const answers = type === 'multiple' ? [...incorrect_answers, correct_answer] : ['True', 'False'];

    return (
        <>
            <h2>{category}</h2>
            <h3 style={{ fontWeight: 500 }}>{decode(question)}</h3>
            {answers.length && answers.map((answer, index) => {
                return <button className={styles.answer} key={index} onClick={e => clicked(e.target.innerText)}>{answer}</button>
            })}
        </>
    )
};

Question.propTypes = {
    query: PropTypes.object,
    clicked: PropTypes.func
}

export default Question;

