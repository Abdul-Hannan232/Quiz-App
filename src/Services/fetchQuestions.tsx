import {fetchType} from '../Types/types';

export const fetchQuestions = async () => {  //amount: number, difficulty: string
    const endpoint = `https://opentdb.com/api.php?amount=10&difficulty=easy&type=multiple`;  //${amount}&difficulty=${difficulty}
    const data = await(await fetch(endpoint)).json();
    const questions = data.results.map((question: fetchType) => (
        {
            question: question.question,
            answer: question.correct_answer,
            answers: [...question.incorrect_answers, question.correct_answer].sort( ()=> Math.random() - 0.5 )
        }
    ))

    return questions;
};

