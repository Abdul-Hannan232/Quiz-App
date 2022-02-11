import React from 'react';
import { Props } from '../Types/types';
import { Wrapper, ButtonWrapper } from './QuestionCard.styles';


export const QuestionCard: React.FC<Props> = ({ question, answers, callback, userAnswer, questionNumber, totalQuestions }) => {
    return (
        <Wrapper>
            <p>
                Question: {questionNumber} / {totalQuestions}
            </p>

            <p dangerouslySetInnerHTML={{ __html: question }} />

            <div>
                {answers.map((answer, index) => (
                    <ButtonWrapper
                        key={index}
                        correct={userAnswer?.correctAnswer===answer}
                        userClicked={userAnswer?.answer===answer}
                        >

                        <button disabled={userAnswer} value={answer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>

                    </ButtonWrapper>
                ))}
            </div>

        </Wrapper>
    )
}