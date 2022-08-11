import React from "react";
import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Map } from "../molecules/Map";
import { Riddle } from "../organisms/Riddle";
import { Divider } from "../atoms/Divider";
import { H4 } from "../atoms/H4";
import { Schild } from "../atoms/Schild";
import { Link } from "react-router-dom";
import { BackToHome } from "../atoms/BackToHome";
import { UnlockChapterInRiddleTemplate } from "../templates/UnlockChapterInRiddleTemplate";

export const Woche3 = () => {
  return (
    <Parchment>
      <H1>Woche 3 - Sterne</H1>

      <img
        src="img/loewe.jpg"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle
        index={1}
        chapter={3}
        question="Wie schnell ist also die Lichtgeschwindigkeit?"
        heading="Licht I"
        choices={[
          ["A", ""],
          ["B", ""],
          ["C", ""],
          ["D", ""],
        ]}
        answer={[2]}
      >
        Erinnert ihr euch noch an das Foto des Carina Nebels von letzter Woche?
        Dieses Foto des Carina Nebels, der übrigens den Spitznamen “Kosmische
        Klippen” trägt, nahm das James Webb Teleskop in diesem Jahr auf. Was zu
        sehen ist, liegt allerdings 7.500 Lichtjahre in der Vergangenheit.
        Inzwischen sieht der Nebel also wahrscheinlich ganz anders aus, aber wie
        er heute aussieht, werden wir erst in 7.500 Jahren erfahren.
        <br /> <br />
        Vielleicht habt ihr schon einmal gehört, dass die Lichtgeschwindigkeit
        die schnellste Geschwindigkeit überhaupt ist. Weil das Universum so
        gigantisch und unvorstellbar groß ist werden Entfernungen in Lichtjahren
        angegeben. Pro Sekunde bewegt sich Licht um 299.792.458 Meter. Ein
        Lichtjahr ist also die Entfernung, die Licht in einem Jahr zurücklegen
        kann. Das sind 9,46 Billionen Kilometer!
        <br /> <br />
        A: ca. 147.776 PS
        <br />
        B: ca. 145.776 mph
        <br />
        C: ca. 300.000 km/s
        <br />
        D: ca. 300.000 km/h
      </Riddle>
      <Riddle
        index={2}
        chapter={3}
        heading="Licht II"
        question="Und wie lang ist ein Lichtjahr? (Googeln erlaubt!)"
        choices={[
          ["A", ""],
          ["B", ""],
          ["C", ""],
          ["D", ""],
        ]}
        answer={[1]}
      >
        A: 147 Tage
        <br />
        B: 1 Jahr
        <br />
        C: 300 Jahre
        <br />
        D: 300.000 Jahre
      </Riddle>

      <Riddle
        index={3}
        chapter={3}
        heading="Vergangenheit I"
        question=" "
        answer="Erde"
        template="Unser Planet heißt _ ."
      >
        Jetzt wollen wir auch mal in die Vergangenheit blicken - aber fangen wir
        erstmal bei uns im infocafe an…
        <br />
        Unser Planet heißt _______. <br />
        Welt <br />
        Mars <br />
        Venus <br />
        Erde
      </Riddle>
      <Riddle
        index={4}
        chapter={3}
        heading="Vergangenheit II"
        question=" "
        answer="Sonne"
        template="Wir kreisen um _ ."
      >
        Und...
        <br />
        Wir kreisen um _______. <br />
        Venus <br />
        Sonne <br />
        Mondorbits <br />
        Galaxie
      </Riddle>

      <Riddle
        index={4}
        chapter={3}
        heading="Vergangenheit IV"
        question=" "
        answer="7"
        template="Außer uns gibt es noch _ weitere Planeten, die die Sonne
        umkreisen."
      >
        Und...
        <br />
        Außer uns gibt es noch _______ weitere Planeten, die die Sonne
        umkreisen.
        <br />
        9 <br />
        8 <br />
        7 <br />
        11
      </Riddle>
      <Riddle
        index={5}
        chapter={3}
        heading="Vergangenheit V"
        question=" "
        answer="Stern"
        template="Unsere Sonne ist ein _."
      >
        Und...
        <br />
        Unsere Sonne ist ein _______.
        <br />
        Mond <br />
        System <br />
        Stern <br />
        Meteor
      </Riddle>
      <Riddle
        index={6}
        chapter={3}
        heading="Vergangenheit VI"
        question=" "
        answer="Schwarzes"
        template="Unser Sonnensystem und ganz viele andere Sternsysteme umkreisen ein _ Loch."
      >
        Und...
        <br />
        Unser Sonnensystem und ganz viele andere Sternsysteme umkreisen ein
        _______ Loch.
        <br />
        Schwarzes <br />
        Weißes <br />
        Graues <br />
        Hellgelbes
      </Riddle>
      <Riddle
        index={7}
        chapter={3}
        heading="Vergangenheit VII"
        question=" "
        answer="Milchstraße"
        template="Zusammen bildet alles eine Galaxie. Unsere Galaxie wird umgangssprachlich auch _ genannt."
      >
        Und...
        <br />
        Zusammen bildet alles eine Galaxie. Unsere Galaxie wird
        umgangssprachlich auch _______ genannt.
        <br />
        Solaris <br />
        Zenus <br />
        ICD-10 <br />
        Milchstraße
      </Riddle>
      <Riddle
        index={8}
        chapter={3}
        heading="Vergangenheit VIII"
        question="Küche."
        answer="Asterismus"
      >
        Sehr gut! Den nächsten Hinweis findet ihr direkt bei uns in der Küche ;)
      </Riddle>
      <Riddle
        index={9}
        chapter={3}
        heading="Sternbilder I"
        question="Küche."
        answer="Asterismus"
        template="Es handelt sich dabei um das Sternbild _!"
      >
        Das Wort “Asterismus” ist griechisch und vom Wort “ἀστήρ” (“aster”) für
        “Stern” abgeleitet. Asterismus wird auch Lichtstern oder Sternenglanz
        genannt und steht für die sternförmigen Lichtreflexe in Kristallen.
        <br />
        Denkt mal an Sterne und sagt: was verbirgt sich hinter diesem (gar nicht
        mal so) kleinen Mäuschen?
      </Riddle>

      <Riddle chapter={3} index={10} epilog>
        <UnlockChapterInRiddleTemplate chapter={3} date={"22.8.2022"} />
      </Riddle>
      <BackToHome />
    </Parchment>
  );
};
