import axios from 'axios';

const url = 'https://opentdb.com/api.php';

const fetchQuiz = async (options) => {
    const queryParams = new URLSearchParams(options);
    const { data } = await axios.get(`${url}?${queryParams}`);
    return data.results;
}

export default fetchQuiz;