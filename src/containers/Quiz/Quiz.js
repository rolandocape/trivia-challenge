import React, {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {
    quizLoadingSelector,
    currentQuestionSelector,
    questionIndexSelector,
    quizSelector
} from '../../store/selectors/quiz';
import { answerQuestion } from '../../store/actions/quiz';
import Question from '../../components/Question/Question';
import styles from './Quiz.module.css';
import Loader from '../../components/Loader/Loader';


const Quiz = props => {

    const [answer, setAnswer] = useState(null);
    const [status, setButtonStatus] = useState(true);
    const question = useSelector(currentQuestionSelector);
    const quizQuestions = useSelector(quizSelector);
    const index = useSelector(questionIndexSelector);
    const loading = useSelector(quizLoadingSelector);
    const dispatch = useDispatch();

    const onAnswerQuestion = (selectedAnswer) => {
        setAnswer(selectedAnswer);
        setButtonStatus(false);
    }

    const onSubmitAnswer = () => {
        dispatch(answerQuestion(answer));
        setButtonStatus(true);
        if (index === quizQuestions.length - 1) {
            props.history.push('/results')
        }
    }

    return (
        <div className="container">
            {loading && <Loader/>}
            {!loading && question && <div className={styles.card}>
                <Question query={question} clicked={onAnswerQuestion}/>
                <button type="button" className={styles['submit-btn']} disabled={status} onClick={onSubmitAnswer}>Submit</button>
                <div className={styles.pagination}>{index + 1} of {quizQuestions.length}</div>
            </div>}
        </div>
    )
};

export default Quiz;