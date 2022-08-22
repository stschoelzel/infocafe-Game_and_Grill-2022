import React from "react";
import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Map } from "../molecules/Map";
import { Riddle } from "../organisms/Riddle";
import { Divider } from "../atoms/Divider";
import { H4 } from "../atoms/H4";
import { Schild } from "../atoms/Schild";
import { SepiaImg } from "../atoms/SepiaImg";
import { Seal } from "../atoms/Seal";
import styled from "styled-components";
import { theme } from "../../theme";
import { StoreContext } from "../../helper/store";
import { Link } from "react-router-dom";
import { BackToHome } from "../atoms/BackToHome";

const Rock = styled.div`
  background-image: url("img/rock.jpg");
  background-size: 100%;
  box-shadow: 0px 0.1rem 0.5rem rgba(0, 0, 0, 0.5),
    inset 0px 0px 30px rgba(0, 0, 0, 1);
  border: 2px solid #111;
  display: flex;
  padding: 1rem;
  color: rgba(255, 255, 255, 0.4);
  flex-direction: column;
`;

export const Woche5 = () => {
  const { getSubRiddleState } = React.useContext(StoreContext);
  const riddle4_9 = getSubRiddleState(4, 9);
  return (
    <Parchment>
      <H1>Grilldatent</H1>

      <Riddle index={1} chapter={5} prolog></Riddle>

      <Riddle chapter={5} index={2} epilog></Riddle>

      <BackToHome />
    </Parchment>
  );
};
