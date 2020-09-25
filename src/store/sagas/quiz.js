import { call, put, takeEvery } from 'redux-saga/effects';
import { START_QUIZ } from '../actions/actionTypes'
import { loadedQuiz } from '../actions/quiz';
import fetchQuiz from '../../services/quizApi'

function* getQuizData(action) {
    const quiz = yield call(fetchQuiz, action.payload);
    yield put(loadedQuiz(quiz));
}

export function* quizSaga() {
    yield takeEvery(START_QUIZ, getQuizData);
}


