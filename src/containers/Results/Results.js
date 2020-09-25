import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { restartQuiz } from '../../store/actions/quiz';
import { resultsSelector } from '../../store/selectors/quiz';
import Result from '../../components/Result/Result';
import './Results.css';

const Results = props => {
    const dispatch = useDispatch();
    const results = useSelector(resultsSelector);
    console.log('Hello', results);
    const correctAnswers = results.filter(r => r.correct).length;

    const onPLayAgain = () => {
        dispatch(restartQuiz());
        props.history.push('/');
    }

    return (
        <div className="container">
            {results.length > 0 && <div className="results">
                <h2 style={{ textAlign: 'center' }}>You got {correctAnswers} out of {results.length} correct!</h2>
                <div>{[...results].map(r => <Result key={r.question} {...r}/>)}</div>
                <button type="button" className="restart-btn" onClick={ onPLayAgain }>Play Again?</button>
            </div>}
        </div>
    )
};

export default Results;