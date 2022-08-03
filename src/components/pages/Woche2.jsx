import React from "react";
import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Map } from "../molecules/Map";
import { Riddle } from "../organisms/Riddle";
import { Divider } from "../atoms/Divider";
import { H4 } from "../atoms/H4";
import { Smaragd } from "../atoms/Smaragd";
import { SepiaImg } from "../atoms/SepiaImg";
import { Link } from "react-router-dom";
import { BackToHome } from "../atoms/BackToHome";

export const Woche2 = () => {
  return (
    <Parchment>
      <H1>Woche 2 - In den Himmel schauen </H1>

      <img
        src="img/earth.png"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle
        index={1}
        prolog
        chapter={2}
        heading="Durch ein waldiges Labyrinth"
        question="Welchen künstlichen Himmelskörper suchen wir?"
        answer="James Webb Teleskop"
      >
        SCHAUBILDBILD VOM SPIEGEL SETUP
        <br />
        <br />
        <img
          src="img/2_1.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
        Beim genaueren Hinschauen bemerkt ihr ein Schema. Die Wegweiser müssen
        nämlich auf einer bestimmten Art und Weise gelesen werden. Mit einem
        vierstelligen Zahlencode kommt ihr dann aus diesem waldigen Labyrinth
        heraus.
      </Riddle>
      <Riddle
        index={2}
        chapter={1}
        heading="QUIZ TIME! I"
        question="A,B,C oder D?"
        choices={[
          ["A", ""],
          ["B", ""],
          ["C", ""],
          ["D", ""],
        ]}
        answer={[0]}
      >
        Frage?
        <br />
        Welche Antwort ist Richtig?
        <br />
        (Nur eine Antwort ist Richtig!)
        <br />
        <br />
        A:
        <br />
        B:
        <br />
        C:
        <br />
        D:
        <br />
      </Riddle>
      <Riddle
        index={2}
        chapter={1}
        heading="QUIZ TIME! I"
        question="A,B,C oder D?"
        choices={[
          ["A", ""],
          ["B", ""],
          ["C", ""],
          ["D", ""],
          ["E", ""],
          ["F", ""],
          ["G", ""],
          ["H", ""],
        ]}
        answer={[0]}
      >
        Frage?
        <br />
        Welche Antwort ist alle Richtig?
        <br />
        (Mehrfach Antwort ist Möglich!)
        <br />
        <br />
        A:
        <br />
        B:
        <br />
        C:
        <br />
        D:
        <br />
        E:
        <br />
        F:
        <br />
        G:
        <br />
        D:
        <br />
      </Riddle>
      <Riddle
        index={3}
        chapter={2}
        heading="So groß..."
        question="Welches Lösungswort kannst du in diesem Foto finden?"
        answer="Carina-Nebel"
      >
        Ultrahighrez Bild der "Cosmic Cliffs"
        <br />
        <br />
        <img
          src="img/2_3.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Riddle>

      <Riddle chapter={2} index={5} epilog>
        <br />
        <br />
        <br />
        <br />
        <br />
        <Bilderratsel src="img/2_41.png" i={1}>
          In Level 3 hier...
        </Bilderratsel>
        <Bilderratsel src="img/2_42.png" i={2}>
          ... dann hier in Level 6...
        </Bilderratsel>
        <Bilderratsel src="img/2_43.png" i={3}>
          und zuletzt in Level 9 hier.
        </Bilderratsel>
        Fortsetzung folgt...
        <br />
        <br />
        <H4>15.08.2022</H4>
      </Riddle>
      <BackToHome />
    </Parchment>
  );
};

const Bilderratsel = ({ children, src, i }) => (
  <>
    <H4>- {i} -</H4>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
        alignItems: "center",
        width: "100%",
        gridGap: "2rem",
        justifyItems: "center",
        marginBottom: "3rem",
      }}
    >
      <div>{children}</div>
      <SepiaImg src={src} />
    </div>
  </>
);
