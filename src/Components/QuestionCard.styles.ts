import styled from "styled-components";

export const Wrapper = styled.div`
    padding: 50px;
    background-color: rgb(255, 253, 237);
    border: 2px solid navy;
    border-radius: 10px;
`
type ButtonWrapperType = {
    correct: boolean;
    userClicked: boolean;
    key: number

}

export const ButtonWrapper = styled.div<ButtonWrapperType>`
transition: all 0.3s ease;

button {
  cursor: pointer;
  user-select: none;
  font-size: 0.8rem;
  width: 100%;
  height: 40px;
  margin: 5px 0;
  background: ${({correct, userClicked})=> correct ? 'green' : !correct && userClicked ? 'red' : 'lightblue'};
  border: 3px solid #ffffff;
  box-shadow: 1px 2px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  color: #fff;
  text-shadow: 0px 1px 0px rgba(0, 0, 0, 0.25);
}
button:hover{
    background: blue
}
`


// background: ${({ correct, userClicked }) =>
//     correct
//       ? 'green'
//       : !correct && userClicked
//       ? 'red'
//       : 'linear-gradient(90deg, #56ccff, #6eafb4)'};