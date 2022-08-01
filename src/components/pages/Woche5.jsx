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
      <H1>Woche 4 - Luft</H1>

      <img
        src="img/air.png"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle index={1} chapter={5} prolog>
        Ihr reist durch das Gebirge und steuert auf den Gipfel des höchsten
        Berges zu. Stück für Stück erklimmt ihr den Berg auf deren schmalen
        Pfaden Richtung Himmel. Ihr seht, wie die Spitze des Berges in Wolken
        hineinragt. Auf eurem Weg nach oben kommt ihr den Wolken immer näher,
        bis ihr von ihnen umgeben seid.
        <br />
        <br />
        Innerhalb der Wolken gelangt ihr auf den Gipfel. Dort erblickt ihr eine
        riesige Treppe bestehend aus Wolken, die noch weiter in die Höhe führt.
        Führt sie euch zu der fliegenden Insel? Bereit es herauszufinden,
        besteigt ihr die Treppe in schwindelerregenden Höhen.
      </Riddle>

      <Riddle chapter={5} index={2} epilog>
        Gemeinsam mit den Vogelmenschen fliegt ihr von der langsam sinkenden
        fliegend Insel runter auf die Hauptinsel. In der Ferne erblickt ihr
        Mitten im Himmel einen Spalt, in dem nur tiefe Dunkelheit zu erkenne
        ist. Die Hohepriesterin wirkt sehr verunsichert: “Wie kann es sein? Ist
        es etwas möglich, dass… Wir müssen uns beeilen!”
        <br />
        <br />
        Fortsetzung folgt...
        <br />
        <br />
        <H4>23.08.2020</H4>
      </Riddle>

      <BackToHome />
    </Parchment>
  );
};
