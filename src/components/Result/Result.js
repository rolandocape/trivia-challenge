import React from 'react';
import { decode } from 'he';
import PropTypes from 'prop-types';

import './Result.css';


const Result = ({ question, user_selected_answer, correct_answer, correct }) => {
    return (
        <div className={ correct ? 'right-answer' : 'wrong-answer' }>
            <h4 className="text-style">{ decode(question) }</h4>
            {!correct && <p className="text-style">Your Answer: { user_selected_answer }</p>}
            <p className="text-style">Correct Answer: { correct_answer }</p>
        </div>
    )
}

Result.propTypes = {
    question: PropTypes.string,
    correct: PropTypes.bool,
    user_selected_answer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
    correct_answer: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.bool
    ]),
}

export default Result;
