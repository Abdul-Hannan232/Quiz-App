import React, { useState } from 'react';
import { QuestionCard } from './Components/QuestionCard';
import { fetchQuestions } from './Services/fetchQuestions';
import { questionType, userAnswersType } from './Types/types';
import { GlobalStyle, Wrapper } from './App.styles'



const TOTAL_QUESTIONS = 10;


function App() {

  const [gameOver, setGameOver] = useState(true);
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<questionType[]>([]);
  const [userAnswers, setUserAnswers] = useState<userAnswersType[]>([]);
  const [score, setScore] = useState(0);
  const [number, setNumber] = useState(0);
  const [result, setResult] = useState(20);


  const startQuiz = async () => {
    setLoading(true);
    setScore(0);
    setGameOver(false);
    setResult(20);
    const getQuestions = await fetchQuestions() //TOTAL_QUESTIONS, 'easy'
    setQuestions(getQuestions);
    setNumber(0);
    setUserAnswers([]);
    setLoading(false);
  };

  const nextQuestion = async () => {
    setNumber(previous => previous + 1)
  };

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {

    const value = e.currentTarget.value;
    // const correct = value === questions[number].answer;

    if (value === questions[number].answer) {
      setScore(previous => previous + 1);
    }

    const userAnswerObject = {
      question: questions[number].question,
      answer: value,
      correct: value === questions[number].answer,
      correctAnswer: questions[number].answer
    }

    setUserAnswers(previous => [...previous, userAnswerObject]);

  }

  const end = () => {
    setGameOver(true);
    setResult(score);
  };


  return (
    <>
      <GlobalStyle />
      <Wrapper>

        <br />
        
        <h1 className='h1' >Test Your Knowledge</h1>

        {gameOver && result === 20 ? (
          <button className='start' onClick={startQuiz}>
            Start Quiz
          </button>) : null}

        {gameOver && result !== 20 ? (
          <button className='start' onClick={startQuiz}>
            One More Try
          </button>) : null
        }

        <br />

        {!gameOver ? (
          <h3 className='score'>
            Score: <span className={`${score > 8 ? 'green' : 'red'}`} > {score} </span>
          </h3>) : null}

        {loading ? (
          <h4>
            Loading Question . . .
          </h4>) : null}

        {!loading && !gameOver ? (   // removed --  && userAnswers?.length !== 10
          <QuestionCard
            questionNumber={number + 1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />) : null}

          <br />

        {!gameOver && !loading && number + 1 === userAnswers.length && number !== TOTAL_QUESTIONS - 1 ? (
          <button className='next' onClick={nextQuestion}>
            Next
          </button>) : null}

        {
          !gameOver && !loading && userAnswers.length === TOTAL_QUESTIONS ? (
            <button className='start' onClick={end}>
              End Quiz
            </button>) : null
        }

        {
          result <= 10 && result >= 9 ? `Bravo!! You have scored ${score} out 0f 10` : result === 20 ? null : result < 9 ? `Shame Shame :) You have scored ${score} out of 10` : null
        }
      </Wrapper>
    </>
  );
}

export default App;