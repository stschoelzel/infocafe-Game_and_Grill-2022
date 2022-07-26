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

export const Woche3 = () => {
  return (
    <Parchment>
      <H1>Woche 3 - Feuer</H1>

      <img
        src="img/fire.png"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle index={1} chapter={3} prolog>
        Ihr lauft über die atemberaubenden Landschaften der Insel Richtung
        Gebirge. Als ihr den majestätischen Felsformationen näherkommt, erblickt
        ihr zwischen dem Gebirge den Vulkan, der graue Rauchschwaden in die Höhe
        emporsteigen lässt. Ihr spürt, wie die Umgebungstemperatur immer etwas
        wärmer wird, je mehr ihr euch dem Gebirge nähert. Hat das was mit dem
        Artefakt des Feuers zu tun? Als ihr am Fuße des Gebirges angelangt seid,
        läuft euch ein Zwerg mit großem Gepäcke über dem Weg: “Seid gegrüßt,
        Reisende! Seid ihr auch auf dem Weg zur Zwergenstadt?” Ihr erklärt ihm
        die Situation und erfährt von ihm, dass er ein wandernder Händler ist,
        der zwischen den Ortschaften auf der Insel reist. Er schlägt vor, sich
        mit euch zusammen zu tun, da er ebenfalls auf dem Weg zu den Zwergen
        ist: “Ihr seid die Reisenden, die das Artefakt des Feuers wieder
        herstellen wollen? Dabei werde ich euch zum Wohle unserer Insel auf
        jeden Fall helfen! Der Weg durch das Gebirge kann sehr verzwickt sein,
        lasst mich euch auf dieser Reise begleiten!”
      </Riddle>
      <Riddle
        index={1}
        chapter={3}
        heading="Am Fuß der Berge"
        question="Wie lautet das Passwort?"
        answer={"63"}
      >
        Gemeinsam startet ihr eure Wanderung durch die Gebirge. Der Zwerg zückt
        eine Wegbeschreibung raus, der euch durch die Berge zur Zwergenstadt
        führt.
        <br />
        <br />
        Geht dabei auf die folgende Seite (Google Maps) und versucht euch, an
        die Wegbeschreibung zu halten:
        <br />
        <br />
        <a href="https://goo.gl/maps/nu7CucpUmXegqMsf7" target="_blank">
          Die Wegbeschreibung (Google Maps)
        </a>
        <br />
        <br />
        Ihr beginnt am Bright Angel Trail Head. Den Bright Angel Trail folgt ihr
        dann geduldig durch das Gebirge. Bei einer öffentlichen Toilette
        angekommen, steht ihr vor einer Weggabelung, wo ihr den rechten Weg
        einschlägt. An der nächsten Weggabelung könnt ihr dann wieder den
        gewohnten Pfad nehmen, bis ihr am Fluss angelangt seid. Den Fluss folgt
        ihr Richtung Westen, an vier kleinen Buchten vorbei: Horn, Ninetyone
        Mile, Trinity und Salt. Noch ein Stück weiter dann, mitten in Gesteinen
        und Mineralien, liegt der Camp der Zwerge, wo ihr den Zugang zur
        Zwergenstadt vorfindet. Für den Einlass benötigt ihr ein Passwort (ein
        2-stelliger Zahlencode), dabei könnt ihr euch an schwimmende Gefährte
        orientieren.
      </Riddle>
      <Riddle
        index={2}
        chapter={3}
        heading="Ein zwergiges Abenteuer"
        question="Wie viele verschiedene Quadrate könnt ihr finden?"
        answer="11"
      >
        “Um mir das Passwort zu merken, habe ich mir folgendes Rätsel
        ausgedacht:
        <br />
        <br />
        In diesem Brett befinden sich zwölf Nägel. Man muss sie so miteinander
        verbinden, dass so viele Quadrate wie möglich entstehen.
        <br />
        <br />
        Einzelne Nägel dürfen mehrfach umspannt werden, und die Quadrate können
        beliebig im Raum ausgerichtet sein. Allerdings muss jede der vier Ecken
        eines Quadrates um einen Nagel gespannt sein.
        <br />
        <br />
        Die Anzahl aller möglichen Quadrate ergibt das Passwort.”
        <br />
        <br />
        <img
          src="img/3_2.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
        <italic>
          Hinweis: Bei einem Quadrat sind alle vier Seiten gleich lang!
        </italic>
      </Riddle>

      <Riddle
        index={3}
        chapter={3}
        heading="Feurio - ein Vulkan!"
        question="Wie lautet der Zahlencode?"
        answer="42381406"
      >
        “Ah, Feurio! So war es gewesen!”, freut sich der Bürgermeister, nachdem
        ihr ihm geholfen habt, sein Tresor zu öffnen,”Ich danke euch vielmals,
        werte Reisende! Jetzt komme ich wieder an das Geburtstagsgeschenk für
        meine Tochter ran, das ich dort versteckt habe.” Nachdem sich der
        Bürgermeister dann wieder beruhigt hat, kann er euch seine volle
        Aufmerksamkeit widmen: “Das Artefakt des Feuers, es liegt recht nah an
        der Spitze des Vulkans. Das Artefakt hält mit seiner Macht normalerweise
        den Vulkan im Gleichgewicht und verhindert einen katastrophalen
        Ausbruch. Aber seitdem die Kräfte des Artefakts schwinden, befürchten
        wir, dass der Vulkan bald anfangen wird, auszubrechen. Es macht sich
        schon bemerkbar anhand der Rauchschwaden, die der Vulkan ausstößt, und
        der gestiegenen Temperatur. Ihr seid unsere Rettung, wenn ihr das
        Artefakt des Feuers wieder zu seinen alten Kräften bringt.”
        <br />
        <br />
        Ihr begebt euch gemeinsam mit einigen Zwergen, die vom Bürgermeister
        beauftragt wurden, euch zu begleiten, von der Zwergenstadt aus zum
        Vulkan. Ihr merkt, wie die Hitze immer stärker wird, je näher ihr euch
        zum Vulkan begebt. Es führen euch mehrere kleine Pfade langsam zur
        Vulkanspitze, teilweise müsst ihr über Felsen und Geröll klettern. Doch
        irgendwann seht ihr einen kleinen Höhleneingang, der euch in das innere
        des Vulkans bringt. Dort sollte sich die Kammer befinden, wo das
        Artefakt des Feuers aufbewahrt wird. Ihr begebt euch in die Höhle hinein
        und durchquert einen Tunnel mit feurig leuchtenden Felswänden. Am Ende
        steht ihr vor einem verriegelten Steintor, dahinter wird sich das
        Artefakt befinden. Doch erst müsst ihr es schaffe, das Steintor zu
        öffnen.
        <br />
        <br />
        Um das Steintor öffnen zu können, benötigt ihr ein Zahlencode. Doch
        findet ihr am Steintor selbst keine Hinweise darauf. Ihr erinnert euch
        aber, dass ihr auf dem Weg zum Tor sonderliche Symbole an der Felswand
        gesehen habt. Haben etwa diese Symbole vielleicht damit etwas zu tun?
        <br />
        <br />
        <img
          src="img/3_3.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Riddle>

      <Riddle
        index={4}
        chapter={3}
        heading="Das Artefakt des Feuers"
        question="Lösungswort gibt es gegen Vorlage der Lösung im Infocafe (Im Club oder via Mail)"
        answer="Eldur"
      >
        {/* Feuer in Isländisch  */}
        Langsam öffnet sich das Steintor und euch kommt ein starker Hitzeschwall
        entgegen. In der Mitte des Kammers ein Podest auf einer Felsplattform
        umringt von Lava. Ein Felspfad führt durch das Lava zum Podest, worauf
        sich das Artefakt des Feuers in Form eines stählernen Hammers befindet.
        Vorsichtig überquert ihr diesen Pfad in einer unerträglichen Hitze, um
        zum Artefakt zu gelangen.
        <br />
        <br />
        Nachdem ihr es geschafft habt und unbeschadet am Artefakt angekommen
        seid, berührt ihr es mit der Intention, die Kräfte wieder herzustellen.
        Ein orange-rotes Licht blitzt auf und voller Entschlossenheit macht ihr
        euch auf die kommende Aufgabe gefasst.
        <br />
        <br />
        Vor euch erscheinen Flammen, in denen merkwürdige Felder zu sehen sind.
        Um die Aufgabe zu lösen und die Kräfte des Artefakts des Feuers wieder
        herzustellen, müsst Zahlen von Eins bis neun in diese Felder setzen, und
        zwar so, dass das Produkt der drei Zahlenreihen - der horizontalen und
        der beiden vertikalen - stets dasselbe ist. Das heißt, wenn ihr die
        Zahlen in den drei Reihen miteinander malnimmt, muss dreimal dasselbe
        Ergebnis herauskommen.
        <br />
        <br />
        Es gibt neun Zahlen, aber nur sieben Felder, also zwei Zahlen nicht
        benötigt.
        <br />
        <br />
        Schickt uns eure Lösungsvorschläge (es gibt mehrere Lösungen) und ihr
        bekommt von uns das Lösungswort, womit ihr euer Abenteuer fortsetzen
        könnt.
        <br />
        <br />
        <img
          src="img/3_4.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Riddle>

      <Riddle chapter={3} index={5} epilog>
        Nachdem das Artefakt des Feuers seine Kräfte wiedererlangt hat, zieht
        sich der See an Lava um euch zurück, sodass nur noch ein warmes Leuchten
        an den Rändern des Kammers wahrzunehmen ist. Die unerträgliche Hitze
        hier verwandelt sich in eine angenehm sommerliche Wärme. Der Hammer
        beginnt in einem rötlichen Glanz zu leuchten Ihr habt es wieder
        geschafft, ein weiteres Artefakt ist wieder hergestellt.
        <br />
        <br />
        Ihr begebt euch gemeinsam mit den zwergen wieder zurück zur Zwergenstadt
        und berichtet dem Bürgermeister von eurem Erlebnis. “Habt vielen Dank
        für das, was ihr unserer Insel alles geleistet habt. Wenn ich mich
        richtig entsinne, bleibt nur noch ein einziges Artefakt über, welches
        wieder seine alten Kräfte erlangen muss.”, entgegnet euch der
        Bürgermeister, “Das Artefakt der Luft befindet sich auf einer fliegenden
        Insel, hoch oben in den Lüften, versteckt zwischen den riesigen Wolken.
        Die dort lebenden Vogelmenschen werden euch sicherlich dabei
        weiterhelfen können. Um auf die fliegende Insel zu gelangen, müsst ihr
        auf die Spitze des höchsten Berges hier in unserem Gebirge. Ich wünsche
        euch alles Gute auf eure weitere Reise!”
        <br />
        <br />
        Bald habt ihr es geschafft, das letzte Artefakt wartet auf euch. Euer
        nächstes Ziel ist die fliegende Insel. Und so begebt ihr euch auf die
        Reise zum Gipfel des höchsten Bergs.
        <br />
        <br />
        Fortsetzung folgt ...
        <br />
        <br />
        <H4>16.08.2020</H4>
      </Riddle>
      <BackToHome />
    </Parchment>
  );
};
