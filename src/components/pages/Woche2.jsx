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
        src="img/woche2header.png"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle
        index={1}
        prolog
        eineRichtigeAntwort
        chapter={2}
        heading="So ein fleißiges Bienchen..."
        question="Zu was gehört das Bild?"
        answer={[
          "James-Webb-Teleskop",
          "James-Webb-Weltraumteleskop",
          "James Webb Teleskop",
          "James Webb Weltraumteleskop",
        ]}
        template="(Tipp: X-Y-Z)"
      >
        Ist es eine Bienenwabe? <br />
        Ein Zahlenrätsel? <br />
        Ein Flugzeug? <br />
        Oder doch etwas anderes? <br />
        <br />
        Zu welchem fleißigen Bienchen gehören diese Waben? <br />
        <img
          src="img/jameswebb_480x480.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
      </Riddle>

      <Riddle
        index={2}
        chapter={2}
        heading="Das James Webb Teleskop I"
        question="A,B,C oder D?"
        choices={[
          ["A", ""],
          ["B", ""],
          ["C", ""],
          ["D", ""],
        ]}
        answer={[2]}
      >
        Natürlich handelt es sich bei dieser Wabenstruktur um die 18
        Spiegelelemente des James-Webb-Weltraumteleskops oder kurz dem JWST.
        <br />
        Der Hauptspiegel ist 6,5 Meter breit und damit breiter als das ganze
        Hubble Teleskop, das hat "nur" 4,3m im Duchmesser.
        <br />
        <br />
        Wo befindet sich das James Webb Teleskop?
        <br />
        Welche Antwort ist richtig?
        <br />
        (Nur eine Antwort ist richtig!)
        <br />
        <br />
        A: in Südafrika – hoch oben auf einem Felsen am Kap der guten Hoffnung
        <br />
        B: auf dem Mars – dem uns am nächsten Planeten
        <br />
        C: im Weltall – 1,5 Millionen Kilometer von der Erde entfernt
        <br />
        D: auf einem Exoplaneten in der Andromedagalaxie
        <br />
      </Riddle>
      <Riddle
        index={3}
        chapter={2}
        heading="Das James Webb Teleskop II"
        question="A,B,C,D,E,F,G oder H?"
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
        answer={[1]}
      >
        Richtig, das James Webb Teleskop befindet sich im Weltall, ca 1,5
        Millionen Kilometer von der Erde entfernt. Es kreist bei einer
        Geschwindigkeit von 202 Metern pro Sekunde (727 km/h) in einem
        Halo-Orbit um den äußeren Lagrange-Punkt L2 im System Erde-Sonne, etwa
        1,5 Millionen km über der Nachtseite der Erde.
        <br />
        <br />
        Aber wie bleibt es an seinem Platz, ohne in die Tiefen des Weltalls zu
        verschwinden?
        <br />
        A: tut es nicht – es bewegt sich in einer Laufbahn um die Erde
        <br />
        B: es wird mit Hilfe von Sensoren und Steuerdüsen ausgerichtet
        <br />
        C: es ist mit einem langen Seil am Mond befestigt, um nicht abzudriften
        <br />
        D: es hat einen Impulsantrieb, der es an den richtigen Ort bringt
        <br />
        E: es hat einen riesigen Magneten, der sich vom Magnetfeld der Erde
        abschiebt
        <br />
        F: die Gravitation des Mondes hält es an einem Ort
        <br />
        G: alle 28 Tage landen Astronaut*innen der NASA auf dem Teleskop und
        richten es neu aus
        <br />
        D: es driftet immer tiefer in die Weiten des Weltalls, bis wir in
        ungefähr 190 Tagen den Kontakt zu ihm verlieren
        <br />
      </Riddle>
      <Riddle
        index={4}
        chapter={2}
        heading="Das James Webb Teleskop III"
        question="A,B,C,D,E,F,G oder H?"
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
        answer={[2, 3]}
      >
        Richtig, das JWST wird von Sonnensensoren, Sternsensoren,
        Reaktionsrädern und Steuerdüsen in seiner Position gehalten. Wie das
        genau funktioniert, könnt ihr gerne im Internet nachlesen ;)
        <br />
        <br />
        Worüber soll das James Webb Teleskop Auskunft geben? (Mehrfachantwort
        möglich)
        <br />
        A: den Mars – und ob Leben auf seiner Oberfläche möglich wäre
        <br />
        B: die Sonne – und was sich hinter ihren Strahlen verbirgt
        <br />
        C: andere Galaxien und schwarze Löcher – wie sie entstehen und sich
        weiter entwickeln
        <br />
        D: Planeten in anderen Sonnensystemen – und ob sie Leben ermöglichen
        könnten
        <br />
        E: das James Webb Teleskop ist ein militärisches Teleskop und für
        Kriegszwecke
        <br />
        F: es ist die letzte Verteidigungslinie zwischen uns und den Aliens!
        <br />
        G: keine Antwort ist richtig – ist doch alles völliger Quatsch…
        <br />
        D: das Teleskop hat seinen Zweck bereits erfüllt und ist zurück auf der
        Erde
        <br />
      </Riddle>
      <Riddle
        index={5}
        chapter={2}
        heading="Das James Webb Teleskop IV"
        question="A,B,C oder D?"
        choices={[
          ["A", ""],
          ["B", ""],
          ["C", ""],
          ["D", ""],
        ]}
        answer={[2]}
      >
        Richtig, das JWST soll weiter ins All schauen als es uns Menschen jemals
        zuvor gelungen ist und dabei blicken wir viele Millionen, sogar
        Milliarden Jahre in die Vergangenheit! Dadurch erhoffen wir uns, mehr
        über den Urknall und die ersten leuchtenden Objekte und Galaxien zu
        erfahren. Wir wollen besser verstehen, wie sich Galaxien, Schwarze
        Löcher, Sterne und Planetensysteme bilden und weiterentwickeln. Außerdem
        werden Exoplaneten, also Planeten, die andere Sterne als unsere Sonne
        umkreisen, untersucht werden. Vielleicht gibt es irgendwo ja doch noch
        weit entferntes Leben...
        <br />
        <br />
        Das James Webb Teleskop ist also wirklich ein tolles Teil! Aber wer war
        denn NICHT an seiner Entwicklung beteiligt?
        <br />
        A: die NASA (National Aeronautics and Space Administration)
        <br />
        B: die CSA (Canadian Space Agency)
        <br />
        C: die CSA (Criminal Scene Agency)
        <br />
        D: die ESA (European Space Agency)
        <br />
      </Riddle>
      <Riddle
        index={6}
        chapter={2}
        heading="Das James Webb Teleskop V"
        question="A,B,C oder D?"
        choices={[
          ["A", ""],
          ["B", ""],
          ["C", ""],
          ["D", ""],
        ]}
        answer={[0]}
      >
        Richtig, das JWSP ist in einer Kooperation der NASA mit der europäischen
        (ESA) und der kanadischen (CSA) Weltraumorganisation entstanden. Die
        Criminal Scene Agency hatte nichts mit der Entwicklung des James Webb
        Teleskops zu tun.
        <br />
        Aber nach wem wurde das JWST eigentlich benannt?
        <br />
        A: James Webb – Verwaltungsangestellter der NASA
        <br />
        B: James Webbson – Astronaut der ESA
        <br />
        C: Jamie Webbson – Wissenschaftler und Ingenieur der NASA
        <br />
        D: Jakob Netz – Science Fiction Autor, dessen Künstlername „James Webb“
        war
        <br />
      </Riddle>

      <Riddle
        index={7}
        chapter={2}
        heading="Das James Webb Teleskop VI"
        question="A,B,C oder D?"
        choices={[
          ["A", ""],
          ["B", ""],
          ["C", ""],
          ["D", ""],
        ]}
        answer={[1]}
      >
        Genau, das James Webb Teleskop wurde nach James Webb, dem ehemaligen
        Verwaltungsangestellter der NASA in den 60er Jahren benannt. Das ist ja
        schon eine Weile her, aber nicht so weit, wie das Teleskop in die
        Vergangenheit schauen kann...
        <br />
        Wie weit kann das JWST mit seinem Spiegel in die Tiefen des Weltalls
        blicken?
        <br />
        A: 384,400 km
        <br />
        B: 13,6 Milliarden Lichtjahre
        <br />
        C: 128.665.934.427 km
        <br />
        D: 46,5 Milliarden Lichtjahre
        <br />
      </Riddle>

      <Riddle
        index={8}
        chapter={2}
        heading="So groß..."
        question="Welches Lösungswort kannst du in diesem Foto finden?"
        answer="Carina-Nebel"
      >
        13,6 Milliarden Lichtjahre ist ganz schön weit wenn man bedenkt das der
        Mond auch schon 384.400 km von uns entfernt ist und der Erdumpfang
        ledliglich 6.357 km beträgt.
        <br /> 13.6 Milliaden Lichtjahre sind 1,28665934427e+23 oder
        12866593442700000000000 km <br />
        <br />
        <br />
        Ultrahighrez Bild der "Cosmic Cliffs", die sind übriegns "nur" 7600
        Lichtjahre von uns entfernt.
        <br />
        <br />
        <Map
          src="img/BIGPICTURE.webp"

        />
      </Riddle>

      <Riddle chapter={2} index={9} epilog>
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
