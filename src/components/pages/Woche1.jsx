import React from "react";
import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Map } from "../molecules/Map";
import { Riddle } from "../organisms/Riddle";
import { Divider } from "../atoms/Divider";
import { H4 } from "../atoms/H4";
import { Link } from "react-router-dom";
import { BackToHome } from "../atoms/BackToHome";
import styled from "styled-components";
import { Image } from "../molecules/Image";

export const Woche1 = () => {
  return (
    <Parchment>
      <H1>Woche 1 - Perspektivenwechsel</H1>
      <img
        src="img/solarSystem.jpg"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle index={1} chapter={1} prolog>
        "Weit draußen in den unerforschten Einöden eines total aus der Mode
        gekommenen Ausläufers des westlichen Spiralarms der Galaxis leuchtet
        unbeachtet eine kleine gelbe Sonne. Um sie kreist in einer Entfernung
        von ungefähr achtundneunzig Millionen Meilen ein absolut unbedeutender,
        kleiner blaugrüner Planet, dessen vom Affen stammende Bioformen so
        erstaunlich primitiv sind, daß sie Digitaluhren noch immer für eine
        unwahrscheinlich tolle Erfindung halten."
        <br />
        <br /> Douglas Adams
      </Riddle>
      <Riddle
        index={1}
        chapter={1}
        heading="Den Blick nach oben gerichtet..."
        question="Meine Vorfahren erklärten mir an jeder Sommersonnenwende unsere natürliche kosmische Ordnung."
        template=" _, _, _, _, _, _, _, _, _, _, _ Tipp: Groß- und Kleinschreibung beachten"
        answer={[
          "Merkur",
          "Venus",
          "Erde",
          "Mars",
          "Asteroidengürtel",
          "Jupiter",
          "Saturn",
          "Uranus",
          "Neptun",
          "Kuipergürtel",
          "Oortsche Wolke",
        ]}
      >
        Ich ließ meine Gedanken scheifen und erinnerte mich:
        <br />
        <br />
        Meine Vorfahren erklärten mir an jeder Sommersonnenwende unsere
        natürliche kosmische Ordnung.
        <br />
        <br />
      </Riddle>
      <Riddle
        index={2}
        chapter={1}
        heading="Andere Dimensionen"
        question="An welchem Ort ist der Merkur?"
        template="_ (Tipp: X-Y-Z)"
        answer="Brüder-Grimm-Schule"
      >
        <figure style={{ alignSelf: "center", margin: "2rem 0" }}>
          <img style={{ width: "100%" }} src="img/oortsche.jpg" />
          <figcaption style={{ fontSize: 10 }}>Bildrechte: ESA</figcaption>
        </figure>
        Sie erzählten mir, das Herz der Stadt sei wie die Sonne.
        <br />
        Wenn das so ist, dann wäre das infocafe wohl die Erde.
        <br />
        <br />
        Ich muss in anderen Dimensionen denken, um zu finden was ich suche.
        <br />
        In völlig anderen Größenordungen.
        <br />
        <br />
        An welchem Ort ist der Merkur; Planet der Kommunikations, des Wissens
        und des Verstandes?
      </Riddle>
      <Riddle
        index={3}
        chapter={1}
        heading="Der Mythos I"
        question="Welche Eigenschaft repräsentiert die Sonne?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[0]}
      >
        Scheinbar gibt es die Idee, jedem Himmelskörper eine Eigenschaft
        zuzuschreiben. Ich glaube zwar nicht daran, dass die Sterne über mein
        Leben bestimmen, aber irgendeine Macht haben sie schon...
      </Riddle>
      <Riddle
        index={4}
        chapter={1}
        heading="Der Mythos II"
        question="Welche Eigenschaft repräsentiert der Mond?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[5]}
      >
        Die Sonne:
        <br />
        Das Ego
        <br />
        <br />
        <br />
        <div style={{ fontSize: 100 }}>☉</div>
        <br />
        Und für was steht der Mond?
      </Riddle>
      <Riddle
        index={5}
        chapter={1}
        heading="Der Mythos III"
        question="Welche Eigenschaften repräsentiert Merkur?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [" ", " , Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution"],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[7]}
      >
        Der Mond:
        <br />
        Emotionen
        <br />
        <br />
        <br />
        <div style={{ fontSize: 100 }}>☽</div>
        <br />
        Und für was steht der Merkur?
      </Riddle>
      <Riddle
        index={6}
        chapter={1}
        heading="Der Mythos IV"
        question="Welche Eigenschaften repräsentiert Venus?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[3]}
      >
        <br />
        Der Merkur:
        <br />
        Kommunikation, Logik, Verstand
        <br />
        <br />
        <div style={{ fontSize: 100 }}>☿</div>
        <br />
        <br />
        Und für was steht die Venus?
      </Riddle>
      <Riddle
        index={7}
        chapter={1}
        heading="Der Mythos V"
        question="Welche Eigenschaften repräsentiert die Erde?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[2]}
      >
        <br />
        Die Venus:
        <br />
        Liebe und Geld, Weiblichkeit
        <br />
        <br />
        <div style={{ fontSize: 100 }}>♀</div>
        <br />
        <br />
        Und für was steht die Erde?
      </Riddle>
      <Riddle
        index={8}
        chapter={1}
        heading="Der Mythos VI"
        question="Welche Eigenschaften repräsentiert Mars?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[6]}
      >
        <br />
        Die Erde:
        <br />
        Das Hier und Jetzt,
        <br />
        Die Erde findet leider keinen Platz in Astrologie
        <br />
        aber sie ist der einzige Ort, den wir haben, auf dem wir existieren
        können.
        <br />
        <br />
        <br />
        <div style={{ fontSize: 100 }}>♁</div>
        <br />
        <br />
        Und für was steht der Mars?
      </Riddle>
      <Riddle
        index={9}
        chapter={1}
        heading="Der Mythos VII"
        question="Welche Eigenschaften repräsentiert Jupiter?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[10]}
      >
        <br />
        Der Mars:
        <br />
        Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit
        <br />
        <br />
        <br />
        <div style={{ fontSize: 100 }}>♂</div>
        <br />
        <br />
        Und für was steht der Jupiter?
      </Riddle>
      <Riddle
        index={10}
        chapter={1}
        heading="Der Mythos VIII"
        question="Welche Eigenschaften repräsentiert Saturn?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[8]}
      >
        <br />
        Der Jupiter:
        <br />
        Glück, Fülle, Glaube
        <br />
        <br />
        <br />
        <div style={{ fontSize: 100 }}>♃</div>
        <br />
        <br />
        Und für was steht der Saturn?
      </Riddle>
      <Riddle
        index={11}
        chapter={1}
        heading="Der Mythos IX"
        question="Welche Eigenschaften repräsentiert Uranus?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[1]}
      >
        <br />
        Der Saturn:
        <br />
        <img style={{ width: "10%" }} src="img/sailorsaturn.gif" />
        Karma, Disziplin, Ordnung
        <br />
        <br />
        <br />
        <div style={{ fontSize: 100 }}>♄</div>
        <br />
        <br />
        Und für was steht der Uranus?
      </Riddle>
      <Riddle
        index={12}
        chapter={1}
        heading="Der Mythos X"
        question="Welche Eigenschaften repräsentiert Neuptun?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[9]}
      >
        <br />
        Der Uranus:
        <br />
        Rebellion, Freiheit, Kreativität
        <br />
        <br />
        <br />
        <div style={{ fontSize: 100 }}>♅</div>
        <br />
        <br />
        Und für was steht der Neptun?
      </Riddle>
      <Riddle
        index={13}
        chapter={1}
        heading="Der Mythos XI"
        question="Welche Eigenschaften repräsentiert Pluto?"
        choices={[
          [" ", "Das Ego"],
          [" ", "Rebellion, Freiheit, Kreativität"],
          [" ", "Das Hier und Jetzt"],
          [" ", "Liebe und Geld, Weiblichkeit"],
          [
            " ",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          [" ", "Emotionen"],
          [" ", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          [" ", "Kommunikation, Logik, Verstand"],

          [" ", "Karma, Disziplin, Ordnung"],

          [" ", "Intuition, Träume, Illusion"],
          [" ", "Glück, Fülle, Glaube"],
        ]}
        answer={[4]}
      >
        <br />
        Der Neptun:
        <br />
        Intuition, Träume, Illusion
        <br />
        <br />
        <br />
        <div style={{ fontSize: 100 }}>♆</div>
        <br />
        <br />
        Und für was steht der Pluto?
      </Riddle>

      <Riddle
        chapter={1}
        index={14}
        heading="Astronomie vs Astrologie"
        question="Ist Astronomie oder Astrologie eine Wissenschaft?"
        template="_"
        answer="Astronomie"
      >
        <br />
        Der Pluto:
        <br />
        Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution
        <br />
        <br />
        <br />
        <div style={{ fontSize: 100 }}>♇</div>
        <br />
        <br />
        Dabei ist der Pluto nichtmal ein "echter" Planet...
        <br />
        <br />
        Astronomie und Astrologie, eines davon ist die Wissenschaft der Sterne
        und des Universums - das andere ist nur eine schöne Geschichte.
      </Riddle>
      <Riddle chapter={1} index={15} epilog>
        Ich muss das erstmal alles Verarbeiten und nächste Woche geht es
        wissenschaftlich weiter...
        <br />
        <H4>08.08.2022</H4>
      </Riddle>
      <BackToHome />
    </Parchment>
  );
};
