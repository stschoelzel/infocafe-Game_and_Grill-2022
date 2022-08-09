import React from "react";
import { H3 } from "../atoms/H3";
import { TextField } from "../atoms/TextField";
import styled from "styled-components";
import { theme } from "../../theme";
import { AnswerField } from "../atoms/AnswerField";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-bottom: 3rem;
`;
export const TextQuestion = ({
  question,
  answer,
  solved,
  onSolve,
  template,
  eineRichtigeAntwort,
}) => {
  const [answered, setAnswered] = React.useState(false);

  React.useState(() => {
    if (solved) {
      setAnswered(true);
    }
  }, [solved]);

  const checkValue = (v) => {
    const a = Array.isArray(answer) ? answer : [answer];
    if (eineRichtigeAntwort) {
      const richtig = v[0];
      const _answered = a.some(
        (b) => b.toUpperCase() === richtig.toUpperCase()
      );
      if (_answered) {
        setAnswered(true);
        onSolve();
      }
    }

    if (
      !v.some((v, i) => {
        return v.toUpperCase() !== a[i].toUpperCase();
      })
    ) {
      setAnswered(true);
      onSolve();
    }
  };

  return (
    <Container>
      <H3 style={{ marginBottom: "2rem" }}>{question}</H3>
      <AnswerField
        eineRichtigeAntwort={eineRichtigeAntwort}
        style={{ color: !answered ? theme.primary : theme.green }}
        disabled={answered}
        answer={answer}
        template={template}
        answered={answered}
        onChange={(e) => {
          checkValue(e);
        }}
      />
    </Container>
  );
};
