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
import { UnlockChapterInRiddleTemplate } from "../templates/UnlockChapterInRiddleTemplate";

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

export const Woche4 = () => {
  const { getSubRiddleState } = React.useContext(StoreContext);
  const riddle4_9 = getSubRiddleState(4, 9);
  return (
    <Parchment>
      <H1>Woche 4 - ISS</H1>
      <img
        src="img/woche4.png"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle index={1} chapter={4} prolog>
        Willkommen in der letzten Rätselwoche des diesjährigen
        Game’n’Grill-Events! Nachdem wir letzte Woche auf der Erde waren und den
        Astronauten und ehemaligen Neu-Isenburger Thomas Reiter kennengelernt
        haben, befinden wir uns in dieser Woche wieder im Weltall - genauer
        gesagt auf der ISS, denn dort war war Thomas Reiter auch mal.
      </Riddle>
      <Riddle
        index={1}
        chapter={4}
        heading="Die Internationale Raumstation (ISS)"
        question="Was steht über der Kanadischen Flagge im Forschungslabor Columbus?"
        answer="JAXA"
      >
        Begebt euch selbst auf die ISS! Dazu müsst ihr nicht extra hochfliegen -
        es reicht wenn ihr die Internationale Raumstation digital besucht. Geht
        dazu auf: <br />
        <br />
        <a style={{ color: "green" }} href="https://earth.google.com/web/">
          diesen Link zu Google Earth und gebt “ISS” in der Suchleiste ein.
        </a>
        <br />
        Wählt dann unten bei den Voyager-Tourdemos die “Raumstation ISS” aus und
        - bsssssssssinggg - ihr seid gelandet! Klickt euch gerne mal durch die
        Räume, lest die Beschreibungstexte und schaut euch um, es lohnt sich!
        <br />
        <br />
        Um die erste Aufgabe der letzten Woche zu beantworten, sagt uns: was
        steht über der Kanadischen Flagge im Forschungslabor Columbus?
      </Riddle>
      <Riddle
        index={2}
        chapter={4}
        heading="Auf der ISS I"
        question="Wie weit ist die ISS von unserer Erdoberfläche entfernt?"
        template="_ Kilometer"
        answer="400"
      >
        Richtig, das gesuchte Wort war JAXA und steht für die Japan Aerospace
        Exploration Agency. Wir wollen heute aber nicht nach Japan, sondern auf
        der ISS bleiben. Schaut euch noch ein bisschen weiter um…
        <br />
        <br />
        Weil’s so spannend ist, wollen wir noch ein bisschen mehr über die ISS
        lernen. Mal schauen, was ihr herausfinden könnt.
      </Riddle>
      <Riddle
        chapter={4}
        index={3}
        heading="Auf der ISS II"
        question={""}
        answer={"Schwerelosigkeit"}
        template="Experimente zur _"
      >
        Welche Experimente werden im Forschungslabor Columbus durchgeführt, bzw.
        was existiert im Weltall (jedenfalls mehr als auf der Erde), muss auf
        der Erde aber künstlich und aufwändig erzeugt werden?
      </Riddle>
      <Riddle
        chapter={4}
        index={4}
        heading="Auf der ISS III"
        question={""}
        answer="Cupola"
        template="Im Raum _"
      >
        In welchem Raum ist die Roboter-Workstation, die den Roboterarm steuert,
        der sich außen an der ISS befindet?
      </Riddle>
      <Riddle
        chapter={4}
        index={5}
        heading="Auf der ISS IV"
        question={" "}
        answer="Zenit"
        template="Der _ - Kopplungsstutzen."
      >
        Welcher Kopplungsstutzen wurde in Node 3 stillgelegt?
      </Riddle>
      <Riddle
        chapter={4}
        index={6}
        heading="Auf der ISS V"
        question={" "}
        answer="Permanentes Mehrzweckmodul"
        template="PMM steht für _."
      >
        Wofür steht die Abkürzung PMM?
      </Riddle>
      <Riddle
        chapter={4}
        index={7}
        heading="Auf der ISS VI"
        question={" "}
        answer="4"
        template="Bis zu _ Astronaut:innen."
      >
        Wie viele Astronaut:innen können in Node 2 wohnen?
      </Riddle>
      <Riddle
        chapter={4}
        index={8}
        heading="Auf der ISS VII"
        question={" "}
        answer="Raumfrachter"
        template="Die Versorgungsraumschiffe werden auch _ genannt."
      >
        Wie heißen die Versorgungsraumschiffe, die die Raumstation mit Gütern
        und Treibstoff versorgen und an der ISS über Node 1 andocken?
      </Riddle>
      <Riddle
        chapter={4}
        index={9}
        heading="Auf der ISS VIII"
        question={" "}
        answer="Schicksal"
        template="Auf Deutsch übersetzt heißt es _."
      >
        Wie würde das US-Labormodul heißen, wenn man seinen Namen ins Deutsche
        übersetzen würde?
      </Riddle>
      <Riddle
        chapter={4}
        index={10}
        heading="Auf der ISS IX"
        question={" "}
        answer="Crew Lock"
        template="Die 'Haustür' für die Astronaut:innen heißt _."
      >
        Wie wird die Luftschleuse mit Außenluke genannt, durch die
        Besatzungsmitglieder die ISS verlassen und die Weiten des Weltalls
        betreten können?
      </Riddle>
      <Riddle
        chapter={4}
        index={11}
        heading="Auf der ISS X"
        question={" "}
        answer="Dragon"
        template="Das Frachtraumschiff heißt _."
      >
        Wie ist der Name des derzeit einzigen Raumschiffs, das erhebliche
        Frachtmengen zur Erde zurücktransportieren kann?
      </Riddle>
      <Riddle
        chapter={4}
        index={12}
        heading="Auf der ISS XI"
        question={" "}
        answer="Abfälle"
        template="Cygnus transportiert _ ab."
      >
        Was transportiert Cygnus von der ISS ab?
      </Riddle>
      <Riddle
        chapter={4}
        index={13}
        heading="Auf der ISS XII"
        question={" "}
        answer="Hoffnung"
        template="Es bedeutet _."
      >
        Was bedeutet der Name des Japanischen Labormoduls?
      </Riddle>
      <Riddle
        chapter={4}
        index={14}
        heading="Auf der ISS XIII"
        question={" "}
        answer="BEAM"
        template="Es bedeutet Die Abkürzung ist _."
      >
        Wie lautet die Abkürzung des Moduls, das ganz klein transportiert und
        anschließend aufgeblasen und einem komfortablen Raum werden kann?
      </Riddle>
      <Riddle
        chapter={4}
        index={15}
        heading="Auf der ISS XIV"
        question={" "}
        answer="Abenddämmerung"
        template="Auf Deutsch heißt es _."
      >
        Wie kann man den russischen Namen des Mini-Research Modul 1 ins Deutsche
        übersetzen?
      </Riddle>
      <Riddle
        index={16}
        chapter={4}
        heading="Auf der ISS XV"
        question={" "}
        answer={["Lager", "Antrieb"]}
        template="_ und _"
      >
        Was sind heute die Aufgaben des Functional Cargo Blocks Sarja, dessen
        Name “Sonnenaufgang” bedeutet und der früher die gesamte
        Energieversorgung und Kommunikation übernahm?
        <br />
        <br />
      </Riddle>
      <Riddle
        chapter={4}
        index={17}
        heading="Auf der ISS XVI"
        question={" "}
        answer="Sojus"
        template="Das Zubringerraumschiff heißt _."
      >
        Wie heißt das bemannte Zubringerraumschiff, das an das Mini-Research
        Modul 2 andocken kann?
      </Riddle>
      <Riddle
        chapter={4}
        index={18}
        heading="Auf der ISS XVII"
        question={" "}
        answer="Luftschleuse"
        template="Es wird als _ genutzt."
      >
        Wie wird das Docking Compartment 1 bei Außenbordeinsätzen genutzt?
      </Riddle>
      <Riddle
        chapter={4}
        index={19}
        heading="Weiter geht's!"
        question={"Ok?"}
        answer="ok"
        template="_!"
      >
        Aber warum ist so eine Luftschleuse überhaupt so wichtig und wozu dienen
        eigentlich die dicken Raumanzüge? Macht euch bereit für das nächste
        Kapitel...
      </Riddle>

      {/* Ab hier beginnt Aufgabe 3!!! */}

      <Riddle
        chapter={4}
        index={20}
        heading="In den Weiten des Weltalls I"
        question={" "}
        template="Stellt euch das so vor: wenn ihr mit einem Strohhalm ein Trinkpäckchen leer saugt, dann entsteht ein _. Ihr habt den Inhalt herausgesaugt, nicht wirklich absolut alle Teilchen – aber genug, damit ein _ entsteht. So ähnlich machen das die Planeten, Sterne und Galaxien. Sie ziehen, einfach gesagt, die Teilchen an wie ein Strohhalm. Das nennt man _kraft uns deshalb können wir im Weltall nicht atmen. "
        answer={["Vakuum", "Unterdruck", "Gravitations"]}
      >
        Im Weltall herrscht ein Vakuum, also ein luftleerer Raum. Deshalb können
        dort nicht atmen und würden vom Druck sogar zerquetscht werden.
      </Riddle>

      <Riddle
        chapter={4}
        index={21}
        heading="In den Weiten des Weltalls II"
        question={" "}
        template="Wissenschaftler:innen suchen das Weltall, soweit sie blicken können, nach anderen Planeten ab, die Leben ermöglichen könnten. Wie wir wissen, umkreisen wir die Sonne, denn sie ist unser Stern. Planeten, die andere Sterne umkreisen, heißen _.
        Außerdem ist es wichtig, dass ein Planet nicht zu nah und auch nicht zu weit weg von seinem Stern ist, damit es nicht zu heiß oder zu kalt ist. Den Bereich, an dem es genau richtig warm ist, damit es Wasser in flüssiger Form geben kann, nennt man _ Zone.
        Es gibt Gas- und Gesteinsplaneten, die entweder aus Gasen oder überwiegend aus Gesteinen bestehen. Um Leben zu ermöglichen, sind _ planeten besser geeignet."
        answer={["Exoplaneten", "habitale", "Gesteins"]}
      >
        Auf der ISS werden Luftdruck und Sauerstoffversorgung durch ein
        Lebenserhaltungssystem geregelt. Die Luftschleuse trennt den Wohn- und
        Arbeitsbereich der Raumstation vom Ausgang in den Weltall ab, damit der
        Sauerstoff beim Öffnen der Tür nicht ins Weltall entweicht und der
        Luftdruck massiv verändert wird.
        <br />
        <br />
        Natürlich können Astronaut:innen die Raumstation auch verlassen, aber
        nur in Raumanzügen. Denn auch in den Anzügen ist die Versorgung mit
        Sauerstoff und der Schutz vor Vakuum und Kälte vorhanden. Ohne Raumanzug
        würden Menschen im Weltall ersticken, erfrieren, oder vom Luftdruck
        zerquetscht werden - die Frage ist nur, was zuerst eintreten würde… ;-)
        <br />
        <br />
        Wir haben also wirklich Glück, auf der Erde zu leben, auf der es
        Sauerstoff und Wasser gibt, denn beides ist für uns Menschen
        lebenswichtig. Das ist nicht selbstverständlich, denn nicht nur im
        Weltall, sondern auch auf den meisten anderen Planeten ist Leben nicht
        möglich, sie sind zu heiß oder zu kalt, Wasser würde verdampfen oder
        gefrieren.
      </Riddle>

      <Riddle
        chapter={4}
        index={22}
        heading="In den Weiten des Weltalls III"
        question={" "}
        template="Die Planeten, die alle diese Kriterien erfüllen und bisher entdeckt wurden, sind aber viel zu weit - über 100 Lichtjahre!
        Und anderes Leben im All wurde bisher noch gar nicht gefunden, dabei ist das Weltall doch schon 13,8 _ Jahre alt, also seit seiner Geburt, dem _.
        
        Wir sollten also wirklich dankbar für unsere lebensfreundliche, grün-blaue Erde sein, die uns frischen Sauerstoff und so viel Wasser liefert. Sie ist nur eine von unendlich vielen Planeten im Weltall und trotzdem so besonders. Und so klein, im riesigen Weltall, eigentlich nur ein kleiner Punkt - oder wie Carl Sagen sagte: a _ _ _."
        answer={["Milliarden", "Urknall", "pale", "blue", "dot"]}
      ></Riddle>

      <Riddle chapter={4} index={23} epilog>
        <img
          src="img/pale.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
        <br />
        “Betrachte noch einmal diesen Punkt. Das ist hier. Das ist zu Hause. Das
        sind wir. Darauf hat jeder, den du liebst, jeder, den du kennst, jeder,
        von dem du jemals gehört hast, jeder Mensch, der jemals war, sein Leben
        gelebt.” <br />
        -Zitat von Carl Sagen
        <br />
        <br />
        Und nun begeben wir uns zurück auf den kleinen, blassen, blauen Punkt -
        unsere Erde. Schön, dass ihr mitgemacht habt! Nächste Woche grillen wir
        - guten Appetit :)
        <br />
        <br />
        <b style={{}}>
          Wann? Dienstag, 30. August 2022 <br />
          Uhrzeit? Zu den normalen Clubzeiten <br />
          Wo? infocafe!
        </b>
      </Riddle>
      <BackToHome />
    </Parchment>
  );
};
