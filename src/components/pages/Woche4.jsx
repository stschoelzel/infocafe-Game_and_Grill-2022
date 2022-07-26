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

export const Woche4 = () => {
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
      <Riddle index={1} chapter={4} prolog>
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
      <Riddle
        index={1}
        chapter={4}
        heading="Quest 4.1	Die Wolkentreppe hinauf"
        question="Womit endet die “Wolkentreppe”?"
        answer="e"
      >
        Ihr kommt immer höher und höher, Stufe für Stufe, Wolke für Wolke. Weit
        und breit seid ihr von mal mehr mal weniger dichten Wolkendecken
        umgeben. Ab und an erblickt ihr den blauen Himmel an lichten Stellen
        zwischen den Wolken. Ihr fragt euch, wann ihr wohl endlich ankommt.
      </Riddle>
      <Riddle
        index={2}
        chapter={4}
        heading="Auf der fliegenden Insel"
        question="Wie viele Dreiecke sind es insgesamt?"
        answer="17"
      >
        Als ihr an das Ende der Wolkentreppe angelangt seid, erblickt ihr
        tatsächlich die majestätische, idyllische Insel in den Wolken. Ihr
        betretet die fliegende Insel und bestaunt die prächtige Landschaft, ihr
        seht Bäume und Wiesen, auch kleinere Flüsse und Hügeln. In der Ferne
        seht ihr einen Turm, in der der Nähe davon scheint auch eine Stadt zu
        sein. Vielleicht leben dort die Vogelmenschen, die euch beim Artefakt
        der Luft weiterhelfen können. Ihr macht euch auf Richtung Stadt.
        <br />
        <br />
        Angekommen steht ihr vor verschlossenen Toren. Davor stehen zwei
        Vogelmenschen, humanoide Wesen mit einem Vogelkopf und Flügel auf den
        Rücken, die anscheinend den Eingang zur Stadt bewachen. Einer der
        Vogelmenschen spricht zu euch: “Hier befindet sich die Stadt der
        Vogelmenschen. Aufgrund der aktuellen Situation dürfen wir jedoch keine
        Fremden passieren lassen. Sagt, Reisende, was habt ihr hier zu suchen?”
        Ihr erklärt den wachestehenden Vogelmenschen, dass ihr auf der Suche
        nach dem Artefakt der Luft seid, um seine Mächte wieder herzustellen.
        “Verstehe, ihr seid also die Auserwählten, die unsere Insel vor dem
        Unheil bewahren werden.”, entgegnet euch der Vogelmensch, “Wir dürfen
        euch jedoch erst eintreten lassen, wenn ihr euch als würdig erweist.”
        <br /> <br />
        <img
          src="img/4_2.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
        “Seht ihr die Wand mit den Dreiecken dort? Wenn ihr uns verrät, wie
        viele verschiedene Dreiecke ihr insgesamt entdecken könnt, lassen wir
        euch passieren.”
      </Riddle>

      <Riddle
        chapter={4}
        index={3}
        heading="Der Himmelsturm"
        question={"Wie lautet der Zahlencode?"}
        answer={"472"}
      >
        <br />
        <br />
        Die Wachen gewähren euch Einlass in die Stadt der Vogelmenschen. Einer
        von ihnen weist euch darauf hin, bezüglich des Artefakts der Luft die
        Hohepriesterin der Stadt aufzusuchen. So begebt ihr euch in ein
        riesiges, kirchenartiges Gebäude, den Hallen des Himmels, wo sie auf
        euch wartet.
        <br />
        <br />
        “Willkommen, werte Reisende. Ihr seid hier, um die Kraft des letzten
        fehlenden Artefakts, dem Artefakt der Luft, wiederherzustellen, habe ich
        Recht?”, spricht die Hohepriesterin zu euch, “Von den Bewohnenden der
        Hauptinsel habe ich bereits die Botschaft erhalten, dass durch euch die
        anderen drei Artefakte wieder zu ihren ursprünglichen Kräften gekommen
        sind. Ich spreche euch ebenfalls im Namen der Vogelmenschen meinen
        großen Dank an euch aus für eure noblen Taten. Auch wir hier oben auf
        der fliegenden Insel bleiben von den Folgen der schwinden Kraft der
        heiligen Artefakte nicht verschont. Die tragenden Winde wehen nicht
        mehr, sodass wir nicht mehr so einfach auf die Hauptinsel runter oder
        von dort aus zurück auf unsere Insel fliegen können.”
        <br />
        <br />
        Die Hohepriesterin spricht weiter zu euch: “Vielleicht habt ihr bereits
        den Turm in der Nähe unserer Stadt erspäht. Das ist der Himmelsturm. Ihr
        müsst ihn erklimmen, um zum Artefakt der Luft zu gelangen. Ich werde die
        Vogelmenschen bitten, euch zum Eingang des Himmelsturms zu bringen. Das
        ist das Mindeste, was ich euch für eure Hilfe anbieten kann.” So steigt
        ihr auf die Rücken der Vogelmenschen und ihr fliegt gemeinsam zum
        Himmelsturm.
        <br />
        <br />
        Angekommen erzählt euch einer der Vogelmenschen: “Hier ist der Eingang
        zum Himmelsturm. Von hier müsst ihr leider von innen aus den Turm
        hinauf. Durch die fehlenden Winde schaffen wir es leider nicht, euch bis
        ganz oben an die Turmspitze zu fliegen. Aber im Turm gibt es eine
        Vorrichtung, der euch rasch zur Spitze bringen wird.” Ihr betretet
        demnach den Himmelsturm und findet eine riesige und runde Steinplatte
        vor euch. Es scheint ein Aufzug zu sein, der euch nach oben befördern
        kann. In der Mitte der Steinplatte seht ihr eine kleine Vorrichtung. Ob
        sich damit der Aufzug aktivieren lässt?
        <br />
        <br />
        Ihr seht in der Vorrichtung ein Bedienfeld. Ihr müsst ein Zahlencode
        eingeben, damit der Aufzug aktiviert wird.
        <br />
        <img
          src="img/4_31.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
        <br />
        Ihr könnt dabei auf die folgende Seite gehen, um das Nonogramm zu lösen:
        https://nonogramm.relaxweb.de/nonogramm/51173
        <br />
        Auf der Vorrichtung seht ihr ebenfalls eine Bedienungsanleitung:
        <br />
        <img
          src="img/4_32.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />- Schwärze bestimmte Felder des Diagramms schwarz - die schwarzen
        Felder bilden ein Feld breite Streifen, deren Anzahl, Reihenfolge und
        Länge durch die Zahlenfolgen am oberen und linken Rand definiert sind -
        jede Zahl steht für die Länge eines Streifens schwarzer Felder in der
        entsprechenden Zeile bzw. Spalte - zwei Streifen sind durch mindestens
        ein weißes Feld voneinander getrennt.
      </Riddle>

      <Riddle
        chapter={4}
        index={4}
        heading="Das Artefakt der Luft"
        question={"Screenshot mit 15 Punkten (oder mehr) an uns"}
        answer="Ventus"
      >
        Die steinerne Platte, auf der ihr euch befindet, fängt an zu leuchten.
        Der Boden scheint etwas zu beben, bis plötzlich die Steinplatte sich vom
        Boden hebt und in die Luft steigt. Der Aufzug wurde aktiviert und ihr
        werdet nach oben befördert. Meter für Meter steigt ihr den Himmelsturm
        empor, zunächst langsam, dann immer schneller.
        <br />
        <br />
        Plötzlich bleibt der Aufzug stehen und ihr seht vor euch eine
        Wendeltreppe, die euch auf die oberste Ebene des Turms führt. Ihr geht
        die Treppe hinauf, bis ihr wieder im Freien seid. Ihr befindet auch auf
        der Spitze des Turms in schwindelerregender Höhe. In der Mitte seht ihr
        ein Altar, worauf ein Fächer platziert ist. Das muss wohl das Artefakt
        der Luft sein. Ihr geht dorthin mit der Entschlossenheit, euch der
        nächsten Aufgabe zu stellen. Fast habt ihr es geschafft, die Macht aller
        vier heiligen Artefakte auf der Insel wiederherzustellen. Ihr berührt
        das letzte der Artefakte und ein helles gelbes Licht blitzt auf.
        <br />
        <br />
        Seid auf eine kleine Herausforderung gefasst. Geht auf die folgende
        Seite und schafft bei Flappybird eine Mindestpunktzahl von 15 Punkten:
        https://flappybird.io
        <br />
        <br />
        Wenn ihr uns ein Screenshot mit der erreichten Punktzahl zukommen lässt,
        dann erhaltet ihr das Lösungswort, um euer Abenteuer fortzusetzen.
      </Riddle>
      <Riddle chapter={4} index={5} epilog>
        Das Artefakt der Luft schimmert in einem goldgelben Glanz und fängt an
        sich um seine eigene Achse zu drehen. Plötzlich entsteht um euch herum
        ein Wirbelwind. Vom Himmelsturm aus strömen starke Windböen auf die
        Insel. Dann hört der Wirbel auf und ihr spürt eine sanft wehende Brise.
        Die Macht des Artefakts der Luft ist wieder hergestellt. Und somit haben
        alle vier heiligen Artefakte ihre ursprünglichen Kräfte wiedererlangt.
        <br />
        <br />
        Die Vogelmenschen fliegen zu euch auf die Turmspitze herauf: “Ihr habt
        es geschafft! Der Wind ist wieder da, wir können wieder uneingeschränkt
        durch die Lüfte fliegen. Habt vielen Danke, Reisende!” Auf deren Rücken
        fliegt ihr gemeinsam wieder zurück zur Stadt der Vogelmenschen. Dort
        erwartet euch schon die Hohepriesterin: “Reisende, die vier heiligen
        Artefakte sind dank euch wieder hergestellt. Ich kann euch nicht genug
        dafür danken. Ihr habt unsere Insel vor dem Untergang bewahrt. Das muss
        gefeiert werden!”
        <br />
        <br />
        Doch die Freude hält nicht lang an, denn plötzlich fängt es überall an
        zu beben. Die Vogelmenschen sind verunsichert: “Oh nein, was passiert
        hier?” Es entstehen um euch rum starke Wirbelstürme. “Das kann nicht
        sein, ich dachte die Insel sei gerettet.”, sagt die Priesterin. Einer
        der Vogelmenschen stürmt zu euch und der Hohepriesterin rüber: “Das
        müsst ihr euch ansehen! Die fliegende Insel, sie verliert langsam an
        Höhe und droht auf die Hauptinsel zu fallen!” Zudem erreicht ein
        fliegender Brief die Hohepriesterin: “Wie? Eine Nachricht von dem
        Ältesten der Fischmenschen? Dort steht geschrieben, dass auf der
        Hauptinsel ähnliche Vorfälle stattfinden: Erdbeben, Stürme, Flutwellen
        und aus dem Vulkan tritt Lava aus… Er bittet euch Reisende zum Dorf der
        Fischmenschen zurückzukehren. Wir werden euch runter zur Insel fliegen,
        jetzt wo es dank euch wieder möglich ist.”
        <br />
        <br />
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
