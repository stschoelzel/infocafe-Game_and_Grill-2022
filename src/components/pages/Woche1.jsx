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
        Intro Text
        <br />
        Den Blick nach oben gerichtet...
      </Riddle>
      <Riddle
        index={1}
        chapter={1}
        heading="Den Blick nach oben gerichtet..."
        question="Meine Vorfahren erklärten mir an jeder Sommersonnenwende unsere natürliche kosmische Ordnung."
        template="_, _, _, _, _, _, _, _, _, _, _"
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
          "Kupiergürtel",
          "Oorsche Wolke",
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
        template="_ Tipp ist X-Y-Z"
        answer="Brüder-Grimm-Schule"
      >
        Sie erzählten mir dass Herzen der Stadt ist wie die Sonne. Wenn das so
        ist, dann wäre das infocafe wohl die Erde.
        <br />
        <br />
        Ich muss anderen dimensionen Denken um zu finden was ich Suche.
        <br />
        In völlig anderen Größenordungen.
        <br />
        <br />
        An welchem Ort ist der Merkur; Planet der Kommunikations, des Wissens
        und des Verstandes?
        <figure style={{ alignSelf: "center", margin: "2rem 0" }}>
          <img style={{ width: "100%" }} src="img/oortsche.jpg" />
          <figcaption style={{ fontSize: 10 }}>Bildrechte: ESA</figcaption>
        </figure>
      </Riddle>
      <Riddle
        index={3}
        chapter={1}
        heading="Der Mythos I"
        question="Welcher Himmelkörper repräsentiert die Sonne?"
        choices={[
          ["Die Sonne", "Das Ego"],
          ["Die Sonne", "Rebellion, Freiheit, Kreativität"],
          ["Die Sonne", "Das Hier und Jetzt"],
          ["Die Sonne", "Liebe und Geld, Weiblichkeit"],
          [
            "Die Sonne",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Die Sonne", "Emotionen"],
          [
            "Die Sonne",
            "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit",
          ],
          ["Die Sonne", "Kommunikation, Logik, Verstand"],

          ["Die Sonne", "Karma, Disziplin, Ordnung"],

          ["Die Sonne", "Intuition, Träume, Illusion"],
          ["Die Sonne", "Glück, Fülle, Glaube"],
        ]}
        answer={[0]}
      >
        Ich war Neugiereig was es damit auf sich hat…
      </Riddle>
      <Riddle
        index={4}
        chapter={1}
        heading="Der Mythos II"
        question="Welcher Himmelkörper repräsentiert die Mond?"
        choices={[
          ["Der Mond", "Das Ego"],
          ["Der Mond", "Rebellion, Freiheit, Kreativität"],
          ["Der Mond", "Das Hier und Jetzt"],
          ["Der Mond", "Liebe und Geld, Weiblichkeit"],
          [
            "Der Mond",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Der Mond", "Emotionen"],
          ["Der Mond", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Der Mond", "Kommunikation, Logik, Verstand"],

          ["Der Mond", "Karma, Disziplin, Ordnung"],

          ["Der Mond", "Intuition, Träume, Illusion"],
          ["Der Mond", "Glück, Fülle, Glaube"],
        ]}
        answer={[5]}
      >
        <br />
        Die Sonne:
        <br />
        Das Ego
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
        question="Welcher Himmelkörper repräsentiert Merkur?"
        choices={[
          ["Merkur", "Das Ego"],
          ["Merkur", "Rebellion, Freiheit, Kreativität"],
          ["Merkur", "Das Hier und Jetzt"],
          ["Merkur", "Liebe und Geld, Weiblichkeit"],
          [
            "Merkur",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Merkur", "Emotionen"],
          ["Merkur", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Merkur", "Kommunikation, Logik, Verstand"],

          ["Merkur", "Karma, Disziplin, Ordnung"],

          ["Merkur", "Intuition, Träume, Illusion"],
          ["Merkur", "Glück, Fülle, Glaube"],
        ]}
        answer={[7]}
      >
        <br />
        Der Mond:
        <br />
        Emotionen
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
        question="Welcher Himmelkörper repräsentiert Venus?"
        choices={[
          ["Venus", "Das Ego"],
          ["Venus", "Rebellion, Freiheit, Kreativität"],
          ["Venus", "Das Hier und Jetzt"],
          ["Venus", "Liebe und Geld, Weiblichkeit"],
          [
            "Venus",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Venus", "Emotionen"],
          ["Venus", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Venus", "Kommunikation, Logik, Verstand"],

          ["Venus", "Karma, Disziplin, Ordnung"],

          ["Venus", "Intuition, Träume, Illusion"],
          ["Venus", "Glück, Fülle, Glaube"],
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
        Und für was steht der Venus?
      </Riddle>
      <Riddle
        index={7}
        chapter={1}
        heading="Der Mythos V"
        question="Welcher Himmelkörper repräsentiert Erde?"
        choices={[
          ["Erde", "Das Ego"],
          ["Erde", "Rebellion, Freiheit, Kreativität"],
          ["Erde", "Das Hier und Jetzt"],
          ["Erde", "Liebe und Geld, Weiblichkeit"],
          [
            "Erde",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Erde", "Emotionen"],
          ["Erde", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Erde", "Kommunikation, Logik, Verstand"],

          ["Erde", "Karma, Disziplin, Ordnung"],

          ["Erde", "Intuition, Träume, Illusion"],
          ["Erde", "Glück, Fülle, Glaube"],
        ]}
        answer={[2]}
      >
        <br />
        Der Venus:
        <br />
        Liebe und Geld, Weiblichkeit
        <br />
        <br />
        <div style={{ fontSize: 100 }}>♀</div>
        <br />
        <br />
        Und für was steht der Erde?
      </Riddle>
      <Riddle
        index={8}
        chapter={1}
        heading="Der Mythos VI"
        question="Welcher Himmelkörper repräsentiert Mars?"
        choices={[
          ["Mars", "Das Ego"],
          ["Mars", "Rebellion, Freiheit, Kreativität"],
          ["Mars", "Das Hier und Jetzt"],
          ["Mars", "Liebe und Geld, Weiblichkeit"],
          [
            "Mars",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Mars", "Emotionen"],
          ["Mars", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Mars", "Kommunikation, Logik, Verstand"],

          ["Mars", "Karma, Disziplin, Ordnung"],

          ["Mars", "Intuition, Träume, Illusion"],
          ["Mars", "Glück, Fülle, Glaube"],
        ]}
        answer={[6]}
      >
        <br />
        Der Erde:
        <br />
        Das Hier und Jetzt,
        <br />
        Die Erde findet leider keinen Platz in Astrologie
        <br />
        Aber sie ist der einzige Ort den wir wirklich haben
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
        question="Welcher Himmelkörper repräsentiert Jupiter?"
        choices={[
          ["Jupiter", "Das Ego"],
          ["Jupiter", "Rebellion, Freiheit, Kreativität"],
          ["Jupiter", "Das Hier und Jetzt"],
          ["Jupiter", "Liebe und Geld, Weiblichkeit"],
          [
            "Jupiter",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Jupiter", "Emotionen"],
          ["Jupiter", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Jupiter", "Kommunikation, Logik, Verstand"],

          ["Jupiter", "Karma, Disziplin, Ordnung"],

          ["Jupiter", "Intuition, Träume, Illusion"],
          ["Jupiter", "Glück, Fülle, Glaube"],
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
        question="Welcher Himmelkörper repräsentiert Saturn?"
        choices={[
          ["Saturn", "Das Ego"],
          ["Saturn", "Rebellion, Freiheit, Kreativität"],
          ["Saturn", "Das Hier und Jetzt"],
          ["Saturn", "Liebe und Geld, Weiblichkeit"],
          [
            "Saturn",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Saturn", "Emotionen"],
          ["Saturn", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Saturn", "Kommunikation, Logik, Verstand"],

          ["Saturn", "Karma, Disziplin, Ordnung"],

          ["Saturn", "Intuition, Träume, Illusion"],
          ["Saturn", "Glück, Fülle, Glaube"],
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
        question="Welcher Himmelkörper repräsentiert Uranus?"
        choices={[
          ["Uranus", "Das Ego"],
          ["Uranus", "Rebellion, Freiheit, Kreativität"],
          ["Uranus", "Das Hier und Jetzt"],
          ["Uranus", "Liebe und Geld, Weiblichkeit"],
          [
            "Uranus",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Uranus", "Emotionen"],
          ["Uranus", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Uranus", "Kommunikation, Logik, Verstand"],

          ["Uranus", "Karma, Disziplin, Ordnung"],

          ["Uranus", "Intuition, Träume, Illusion"],
          ["Uranus", "Glück, Fülle, Glaube"],
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
        question="Welcher Himmelkörper repräsentiert Neuptun?"
        choices={[
          ["Neptun", "Das Ego"],
          ["Neptun", "Rebellion, Freiheit, Kreativität"],
          ["Neptun", "Das Hier und Jetzt"],
          ["Neptun", "Liebe und Geld, Weiblichkeit"],
          [
            "Neptun",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Neptun", "Emotionen"],
          ["Neptun", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Neptun", "Kommunikation, Logik, Verstand"],

          ["Neptun", "Karma, Disziplin, Ordnung"],

          ["Neptun", "Intuition, Träume, Illusion"],
          ["Neptun", "Glück, Fülle, Glaube"],
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
        question="Welcher Himmelkörper repräsentiert Neuptun?"
        choices={[
          ["Pluto", "Das Ego"],
          ["Pluto", "Rebellion, Freiheit, Kreativität"],
          ["Pluto", "Das Hier und Jetzt"],
          ["Pluto", "Liebe und Geld, Weiblichkeit"],
          [
            "Pluto",
            "Macht, Gut und Böse, Tod/Zerstörung und Wiedergeburt, Evolution",
          ],
          ["Pluto", "Emotionen"],
          ["Pluto", "Leidenschaft, Antrieb, Entschlossenheit, Männlichkeit"],
          ["Pluto", "Kommunikation, Logik, Verstand"],

          ["Pluto", "Karma, Disziplin, Ordnung"],

          ["Pluto", "Intuition, Träume, Illusion"],
          ["Pluto", "Glück, Fülle, Glaube"],
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

      <Riddle chapter={1} index={14} epilog>
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
        Ich muss das erstmal alles Verarbeiten und nächste Woche geht es
        wissenschaftlich weiter...
        <br />
        <H4>08.08.2022</H4>
      </Riddle>
      <BackToHome />
    </Parchment>
  );
};
