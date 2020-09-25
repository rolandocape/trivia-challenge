export const quizLoadingSelector = state => state.loading;

export const questionIndexSelector = state => state.questionIndex;

export const quizSelector = state => state.quizQuestions;

export const currentQuestionSelector = ({ quizQuestions, questionIndex }) => quizQuestions[questionIndex];

export const resultsSelector = ({ quizQuestions }) => {
    return quizQuestions.map(({ user_selected_answer, correct_answer, question }) => ({
        user_selected_answer,
        correct_answer,
        question,
        correct: user_selected_answer === correct_answer
    }));
}

