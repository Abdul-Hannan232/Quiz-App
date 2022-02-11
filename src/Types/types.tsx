export type fetchType = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    question: string;
    type: string;
};

export type questionType = {
    question: string;
    answer: string;
    answers: string[];
}

export type userAnswersType = {
    question: string;
    answer: string;
    correct: boolean;
    correctAnswer: string;
  }
  
export type showResultType = {
    result: number;
    TOTAL_QUESTIONS: number;
};


export type Props = {
    question: string;
    answers: string[];
    callback: any;
    userAnswer: any;
    questionNumber: number;
    totalQuestions: number;
}