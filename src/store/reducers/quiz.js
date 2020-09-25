import {START_QUIZ, LOADED_QUIZ, ANSWER_QUESTION, RESTART} from '../actions/actionTypes';

const initialState = {
    quizOptions: {},
    quizQuestions: [],
    loading: true,
    questionIndex: 0
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case START_QUIZ:
            return {
                ...state,
                quizOptions: action.payload
            };
        case LOADED_QUIZ:
            return {
                ...state,
                quizQuestions: action.payload,
                loading: false
            };
        case ANSWER_QUESTION:
            const { quizQuestions, questionIndex: index } = state;
            const currentQuestion = { ...quizQuestions[index], ...action.payload };
            quizQuestions.splice(index, 1, currentQuestion);
            return {
                ...state,
                quizQuestions: [...quizQuestions],
                questionIndex: index + 1
            };
        case RESTART:
            return initialState;
        default:
            return state;
    }
};

export default reducer;