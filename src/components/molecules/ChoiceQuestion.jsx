import React from "react";
import { H3 } from "../atoms/H3";
import { TextField } from "../atoms/TextField";
import styled from "styled-components";
import { theme } from "../../theme";

const Rock = styled.div`
  padding: 1.5rem 1rem 1rem 1rem;
  display: flex;
  aspect-ratio: 1;
  width: 100%;
  max-width: 10rem;
  font-family: "Comic Sans MS", "Comic Sans", cursive;
  box-shadow: 0px 3px 5px 0px rgba(0,0,0,.6);
  font-weight: normal;
  height:100%;

  background: #fdf694;

`;




const Grid = styled.div`
  display: grid;
  width: 100%;
  grid-gap: 2rem;
  align-items: center;
  justify-items: center;
  grid-template-columns: repeat(auto-fit, minmax(8rem, 1fr));
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`;
export const ChoiceQuestion = ({
  choices,
  question,
  answer,
  solved,
  onSolve,
}) => {
  const [answered, setAnswered] = React.useState(false);
  const [state, setState] = React.useState([]);

  React.useState(() => {
    if (solved) {
      setState(answer);
      setAnswered(true);
    }
  }, [solved]);

  const checkValue = (v) => {
    let newState = [];
    if (state.includes(v)) {
      newState = state.filter((s) => s !== v);
    } else {
      newState = [...state, v];
    }
    setState(newState);
    checkSolution(newState);
  };

  const checkSolution = (newState) => {
    if (newState.length === answer.length) {
      if (!answer.some((a) => !newState.includes(a))) {
        onSolve();
      }
    }
  };

  return (
    <Container>
      <H3 style={{ marginBottom: "2rem" }}>{question}</H3>

      <Grid>
        {choices.map((c, i) => {
          return (
            <Board
              primary={c[0]}
              secondary={c[1]}
              active={state.includes(i)}
              onClick={() => checkValue(i)}
            />
          );
        })}
      </Grid>
    </Container>
  );
};

const Board = ({ primary, secondary, active, onClick }) => {
  const [val] = React.useState(Math.random());

  return (
    <Rock onClick={onClick} style={{
      transition: "all 100ms",
      transform:`rotate(${(val- .5) * 5}deg)`
    }}>
      <div
        style={{
          transition: "all 100ms",
          fontSize: "1.5rem",
          marginBottom: ".5rem",
          textDecorationStyle:"wavy",
          fontWeight:active ?"bold" : "",
          textDecoration:active ?"underline" : "",
          // textShadow: active ? "0px 0px 10px rgba(50,255,50,.8)" : "",
        }}
        >
        {primary}
      </div>
      <div
        style={{
          transition: "all 100ms",
          fontSize: "1rem",    
           textDecoration:active ?"underline" : "",
           fontWeight:active ?"bold" : "",
          // textShadow: active ? "0px 0px 10px rgba(50,255,50,.8)" : "",
        }}
      >
        {secondary}
      </div>
    </Rock>
  );
};
