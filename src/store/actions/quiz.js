import { START_QUIZ, LOADED_QUIZ, ANSWER_QUESTION, RESTART } from "./actionTypes";

export const startQuiz = (options) => ({
    type: START_QUIZ,
    payload: options
});

export const loadedQuiz = (quizData) => ({
    type: LOADED_QUIZ,
    payload: quizData
})

export const answerQuestion = (answer) => ({
    type: ANSWER_QUESTION,
    payload: { user_selected_answer: answer }
});

export const restartQuiz = () => ({ type: RESTART });