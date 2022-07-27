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
        answer={["Merkur", "Venus", "Erde", "Mars", "Asteroidengürtel", "Jupiter", "Saturn", "Uranus", "Neptun", "Kupiergürtel", "Oorsche Wolke"]}
      >
        Ich ließ meine Gedanken scheifen und erinnerte mich:
        <br />
        <br />
        Meine Vorfahren erklärten mir an jeder Sommersonnenwende unsere natürliche kosmische Ordnung.
        <br />
        <br />
        
      </Riddle>
      <Riddle
        index={2}
        chapter={1}
        heading="Andere Dimensionen"
        question="Wo ist der Merkur; Planet der Kommunikations, des Wissens und des Verstandes?"
        answer="Atlantis"
      >
        Sie erzählten mir dass Herzen der Stadt ist wie die Sonne. Wenn das so ist, dann wäre das infocafe wohl die Erde.
        <br />
        <br />
        Ich muss anderen dimensionen Denken um zu finden was ich Suche.
        <br />
        In völlig anderen Größenordungen.

        
        <Map
          src="img/oortsche.jpg"
          style={{ alignSelf: "center", margin: "1rem 0" }}
        />
        Ihr startet am West Clubhaus im Südwesten. Von dort wandert ihr nach
        Süden bis zur 804. Straße. Der Straße folgt ihr nach Osten, bis ihr das
        Tal der Sonne erreicht. Vom Tal der Sonne wandert ihr Richtung
        Nordosten, bis zu den Flüsternden Kiefern. Dann biegt ihr dort wieder
        Richtung Südosten ab, bis hin zur Hochschule. Von der Schule aus folgt
        ihr dem Fluss Richtung Osten bis zur 95. Straße. Auf dieser Straße
        wandert ihr nach Norden, so lange bis ihr auf die Südwinde stößt. Von
        dort aus biegt ihr nach Westen und kommt an bei der begrünten Verlorenen
        Stadt an. Dort begebt ihr euch auf der Suche nach dem Antiken Reich, wo
        ich auf euch warte.
      </Riddle>
      <Riddle
        index={3}
        chapter={1}
        heading="Der versunkene Tempel"
        question="Was für ein kleines Wesen versteckt sich zwischen den ganzen Haien?"
        answer="Seepferdchen"
      >
        {" "}
        Nach einer langen Wanderung habt ihr es geschafft und findet endlich den
        Ältesten der Fischmenschen am Ziel: “Gut gemacht! Ich danke euch
        vielmals, dass ihr auf meinen Test eingegangen seid und diesen Weg auf
        euch genommen habt. Ich muss gestehen, dass ich euch doch schon von
        Anfang an vertraut habe. Ich konnte eure reinen Herzen ganz klar spüren
        und wusste direkt um die Lage Bescheid. Tut mir Leid, dass ich nicht
        ganz ehrlich zu euch war. Ich habe den Test als Anlass genommen, um euch
        zu dieser Stätte hierher zu führen. Aber am besten zeige ich euch, warum
        wir uns hier zusammengefunden haben.”
        <br />
        <br />
        Der Älteste bittet euch ihm zu folgen. Ihr betretet eine Ruine mit
        verschiedenen Wandmalereien. Der Älteste spricht zu euch: “Lasst mich
        euch die Legende dieser Insel erzählen.”
        <br />
        <br />
        Vor langer Zeit lebten die Bewohnenden der Insel in Harmonie. Doch dann
        suchte eine Böse Antike Macht die Insel heim und wollte sie in
        Finsternis und Chaos stürzen. Um die Insel vor dem Untergang zu
        bewahren, wurden vier Artefakte von den Göttern des Lichts auf die Insel
        herabgesandt. Vier heilige Gegenstände mit der Macht des Wassers, der
        Erde, des Feuers und der Luft. Die Böse Antike Macht wurde mit Hilfe
        dieser vier heiligen Artefakte bekämpft und in eine andere Dimension
        verbannt. Seitdem werden die vier Artefakte an verschiedenen Orten auf
        der Insel aufbewahrt, um das Gleichgewicht der Insel aufrecht erhalten
        und das dortige Leben vor einer erneuten Bedrohung der Bösen Antiken
        Macht zu beschützen.
        <br />
        <br />
        “Seit geraumer Zeit wird unsere Insel von mehreren Naturphänomenen
        heimgesucht. Das Wasser hört auf zu fließen, die Bäume verlieren langsam
        ihre Lebenskraft, ein Vulkan droht auszubrechen und der Wind hört auf zu
        wehen… Ich befürchte, dass die vier heiligen Artefakte allmählich ihre
        Kraft verlieren, das Gleichgewicht und somit das harmonische Leben auf
        der Insel aufrecht zu halten.”, schildert euch der Älteste.
        <br />
        <br />
        Die Inselbewohnenden sind besorgt, dass die Böse Antike Macht bald
        wiederkehrt und die Insel erneut in den Abgrund reißen wird. Jedoch
        erzählt euch der Älteste auch von einer Prophezeiung, die nur den
        Wenigsten bekannt ist: “Einer Sage zufolge, sollten die vier Artefakte
        langsam ihre Macht verlieren, werden Reisende mit reinen Herzen aus
        einer anderen Welt durch die Götter des Lichts auf die Insel gesandt, um
        die Macht wiederherzustellen. Ich denke, dass es sich dabei um euch
        handeln muss. Ihr seid die Auserwählten, die die Insel vor einem
        erneuten Unheil bewahren. Deshalb bitte ich euch, im Namen der
        Fischmenschen und allen anderen Bewohnenden der Insel, helft uns dabei,
        unsere geliebte Insel vor dem Untergang zu retten!”
        <br />
        <br />
        Ihr erklärt euch bereit, zu den vier Artefakten zu reisen und den
        hilfesuchenden Inselbewohnenden dabei zu helfen, die Kräfte der
        Artefakte wiederherzustellen. Der Älteste freut sich zutiefst über eure
        Entscheidung: “Vielen vielen Dank! Es gibt wieder Hoffnung für unsere
        Insel! Das Artefakt des Wassers ist in einem versunkenen Tempel
        innerhalb des Sees versteckt, wo sich unsere Siedlung befindet. Wir
        werden euch mit allen Mitteln auf eure Reise dorthin unterstützen.”
        <br />
        <br />
        Zurück in der Siedlung begebt ihr euch mit den Fischmenschen ins See.
        Auf deren Rücken taucht ihr ins tiefblaue Wasser hinab. Auf wundersame
        Weise bildet sich eine Luftblase um euren Köpfen, sodass ihr Unterwasser
        atmen könnt. Gemeinsam seid ihr auf der Suche nach dem Versunkenen
        Tempel, wo sich das erste Artefakt versteckt.
        <br />
        <Divider />
        <br />
        Um zu dem Versunkenen Tempel zu gelangen, schwimmt ihr gemeinsam mit den
        Fischmenschen durch einen Schwarm Haie. Die Haie tun euch nichts, denn
        sie erkennen die Fischmenschen und sind euch freundlich gesonnen. Aber
        leider können sie euch selber nicht sagen, wo sich der Versunkene Tempel
        mit dem Artefakt genau befindet. Nur ein kleines Wesen, was sich
        zwischen den Haien versteckt, kann euch den Weg dorthin zeigen.
        <Map
          src="img/1_3.png"
          style={{ alignSelf: "center", margin: "2rem 0" }}
        />
      </Riddle>
      <Riddle
        index={4}
        chapter={1}
        heading="Das Artefakt des Wassers"
        question="Lösungswort gibt es gegen Vorlage der Lösung im Infocafe (Im Club oder via Mail)"
        answer="Aqua"
      >
        Zwischen den Haien entdeckt ihr ein kleines Seepferdchen. Daraufhin
        schwimmt es plötzlich weg, ihr versucht es hinterher zu jagen. Nachdem
        ihr das kleine flinke Seepferdchen eine Weile lang verfolgt habt, seht
        ihr im Meeresgrund den Versunkenen Tempel. Gemeinsam mit den
        Fischmenschen betretet ihr den Tempel, welches überraschenderweise innen
        trocken und mit Luft befüllt ist, und erkundet die verwinkelten Gänge.
        Hellblau leuchtende Kristalle zieren die Wände und leuchten euch den
        Weg.
        <br />
        <br />
        Nach einiger Zeit findet ihr euch vor einem riesigen steinernen Tor.
        Befindet sich das Artefakt des Wassers dahinter? Zusammen mit den
        Fischmenschen drückt ihr gegen das Tor und versucht es aufzukriegen.
        Stück für Stück bewegt es sich, bis ihr es schafft, es komplett zu
        öffnen.
        <br />
        <br />
        Ihr betretet den Raum und findet vor euch ein Altar. Darauf befindet
        sich ein Stab, welches in einem schwachen blauen Leuchten umhüllt ist.
        Das muss das heilige Artefakt des Wassers sein! Ihr hab’s tatsächlich
        gefunden! Doch ihr fragt euch, wie ihr seine Kraft wiederherstellen
        könnt. Die Fischmenschen sind leider auch überfragt und können euch
        nicht weiterhelfen. Ihr probiert anschließend den Stab anzufassen.
        Plötzlich blitzt ein hellblaues Licht auf, welches der ganzen Raum
        umgibt. Vor eurem geistigen Auge seht ihr eine Aufgabe, die es zu lösen
        gilt.
        <br />
        <Divider />
        Damit das Artefakt des Wasser wieder zu seiner ursprünglichen Kraft
        kommt, müsst ihr folgendes Rätsel lösen:
        <br />
        <br />
        Ihr seht vor euch mehrere Wasserstoffatome (H). Eure Aufgabe liegt
        darin, jeweils zwei Wasserstoffatome (H) mit einem Sauerstoffatom (O) zu
        verbinden (H-O-H). Dabei dürfen die Sauerstoffatome (O) auf dem Feld
        nicht benachbart sein, auch nicht diagonal. Zudem lassen sich die
        Wasserstoffatome (H) nur senkrecht oder waagerecht mit einem
        Sauerstoffatom (O) verbinden.
        <br />
        <br />
        Insgesamt sind 10 Sauerstoffatome (O) zu setzen, um das Rätsel zu lösen.
        Auf welchen Feldern (A1, A2, …) müssen sie sich alle befinden? Schickt
        uns euren Lösungsvorschlag (E-Mail) und bei richtiger Antwort bekommt
        ihr von uns ein Lösungswort, um euer Abenteuer fortzuführen.
        <br />
        <Map
          src="img/1_4.png"
          style={{ alignSelf: "center", margin: "2rem 0" }}
        />
      </Riddle>
      <Riddle chapter={1} index={5} epilog>
        Ihr habt es geschafft! Das Artefakt des Wasser hat seine voll Kraft
        wiedererlangt. Der Stab beginnt in einem tiefblauen Schein zu leuchten.
        An den Wänden des Raums beginnen Wasserfälle zu fließen und vom Boden
        schießt Wasser in die Höhe wie Springbrunnen. Die Fischmenschen jubeln
        zu eurem Erfolg. Gemeinsam verlasst ihr den Versunkenen Tempel und macht
        euch wieder auf dem Weg zurück zur Siedlung. Dort angekommen berichtet
        ihr dem Ältesten von eurem Abenteuer. “Ich danke euch von tiefsten
        Herzen, Reisende! Das Artefakt des Wassers erstrahlt wieder in voller
        Glanz.”
        <br />
        <br />
        Doch eure Reise ist noch nicht zu Ende. Es warten drei weitere Artefakte
        auf euch, deren Kraft wiederhergestellt werden müssen. Der Älteste
        erklärt euch, wo ihr als nächstes hin müsst: “Folgt dem Fluss Richtung
        Westen. Er wird euch zu einem Wald führen, in der sich das Dorf der
        Elfen befindet. Die Elfen werden euch sicherlich weiterhelfen können,
        wie ihr zum Artefakt der Erde gelangen könnt.”
        <br />
        <br />
        So verabschiedet ihr euch von den Fischmenschen und macht euch auf dem
        Weg zu eurem nächsten Ziel. Fortsetzung folgt ...
        <br />
        <br /> Das nächste Woche offenbart sich euch am
        <br />
        <br />
        <H4>02.08.2021</H4>
      </Riddle>
      <BackToHome />
    </Parchment>
  );
};
