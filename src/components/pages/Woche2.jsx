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
      <H1>Woche 2 - Erde </H1>

      <img
        src="img/earth.png"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle
        index={1}
        chapter={2}
        heading="Durch ein waldiges Labyrinth"
        question="Wie lautet der Zahlencode?"
        answer="2051"
      >
        Von der Siedlung aus wandert ihr am Fluss entlang zu eurem nächsten
        Ziel. Nach einer Weile seht ihr in der Ferne einen riesigen Wald.
        Inmitten des Waldes steht ein einzelner gigantischer Baum, viel höher
        und riesiger als die ganzen Bäume drumherum. Dort muss sich das Dorf der
        Elfen befinden, von dem der Älteste der Fischmenschen gesprochen hat.
        Voller Entschlossenheit macht ihr euch auf dem Weg zum Waldanfang.
        <br />
        <br />
        Als ihr euch in den Wald begebt, bemerkt ihr, dass die Wege beschildert
        sind. Doch als ihr versucht, den Wegweisern zu folgen, kommt ihr nicht
        wirklich weit voran. Egal welchen Weg ihr einschlägt, es sieht überall
        gleich aus und ihr bekommt langsam das Gefühl, euch in einem Labyrinth
        verirrt zu haben. Die Schilder zeigen in die verschiedensten Richtungen
        und scheinen zu keinem konkreten Ziel zu führen - zumindest auf den
        ersten Blick…
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
        chapter={2}
        heading="Das Dorf der Elfen"
        question="Wie lautet wohl das Lösungswort?"
        answer="EIBE"
      >
        Endlich aus dem Labyrinth rausgekommen, findet ihr euch in einer
        riesigen Waldlichtung wieder, inmitten sich ein gigantischer Baum in den
        Himmel erstreckt. Seine gewaltigen und massiven Wurzeln ragen ringsum
        aus dem Erdboden. Das Licht der Sonne scheint durch seine majestätische
        Baumkrone, sodass ein Wechselspiel aus Licht und Schatten auf den Boden
        geworfen wird. Den kleinen Holzhütten und Pilz-Häusern zu urteilen,
        welche um und teilweise auf dem Baum stehen, scheint dieser Ort hier
        bewohnt zu sein. Ihr schließt daraus, dass sich hier das Dorf der Elfen
        befinden muss. Erleichtert schaut ihr euch in der Gegend um und hofft,
        auf die Elfen anzutreffen. Doch weit und breit ist niemand zu sehen.
        Auch als ihr versucht, an den Türen zu klopfen, scheint niemand da zu
        sein. Ihr wundert euch, wo alle bloß stecken. Sind alle momentan
        unterwegs oder gar verschwunden? Doch lässt euch das merkwürdige Gefühl
        nicht los, dass ihr eigentlich die ganze Zeit beobachtet werdet...
        <br />
        <br />
        Als ihr euch weiter umschaut, entdeckt ihr eine kleine Holztafel mit
        einer Inschrift. Darauf steht geschrieben:
        <br />
        “Nur diejenigen, die vom Baum der Weisheit anerkannt werden, ist es
        gewährt, das Volk der Elfen entgegenzutreten. Nur mit reinem Herzen wird
        ein Blick in die Schönheit der Flora das Geheimnis lüften.”
        <br />
        Kann es sein, dass sich die Elfen vor euch verstecken? Nur ein genauerer
        Blick in die Natur kann euch dabei helfen sie zu finden. Vier Buchstaben
        sind jeweils in diesen Stereogrammen verborgen, die das Lösungswort (in
        Großbuchstaben!) bilden. Schafft ihr es, den Durchblick zu haben?
        <br />
        <br />
        <img
          src="img/2_21.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
        <img
          src="img/2_22.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
        <img
          src="img/2_23.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
        <img
          src="img/2_24.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
        <br />
        <div
          style={{
            fontStyle: "italic",
          }}
        >
          (Hinweis: Falls ihr nicht weiterkommt, hilft vielleicht eine kleine{" "}
          {/* Funktioniert das? Ich hab ka... ggf nen "Tip" style oder atom oder whatever ? */}
          Recherche im Internet über “Stereogramme”)
        </div>
      </Riddle>
      <Riddle
        index={3}
        chapter={2}
        heading="Ein wirklich großer Baum"
        question="Wie lautet das Lösungswort?"
        answer="Feldahorn"
      >
        Ihr nehmt aufmerksam die Natur um euch wahr. Ihr bemerkt, wie sich
        langsam kleine Silhouetten im ganzen Dorf bilden und um euch
        herumfliegen. Ihr hört leises Getuschel und Gekicher im Hintergrund. Und
        siehe da, plötzlich erscheint eine Elfe vor euch! Sie spricht zu euch:
        “Liebe Reisende, ihr habt uns gefunden! Der Baum der Weisheit hat euch
        die Erlaubnis erteilt, unser Dorf betreten zu dürfen. Wir wissen bereits
        um die Lage Bescheid und warum ihr hier seid. Der Älteste der
        Fischmenschen hat uns die Botschaft zukommen lassen, dass ihr die
        Auserwählten seid, die die Kräfte der vier heiligen Artefakte
        wiederherstellen werden. Und dafür sind wir euch zutiefst dankbar!”
        <br />
        <br />
        Die Elfen bitten euch, ihnen zum riesigen Baum im Zentrum des Dorfes zu
        folgen. Eine der Elfen erklärt: “Das ist der Baum der Weisheit. Er
        schenkt der Natur, den ganzen Pflanzen auf der gesamten Insel Leben und
        Vitalität. Doch seit die Artefakte ihre Macht verlieren, wie ihr
        sicherlich schon wisst, schwindet auch seine Kraft und er kann die
        wunderschöne Flora auf der Insel nicht mehr mit Lebensenergie versorgen.
        Vielleicht habt ihr schon gemerkt, dass die Pflanzen und Bäume in den
        entfernteren Gebieten auf der Insel welk und kraftlos aussehen. Unser
        Wald hier bleibt vorerst verschont, da er sich direkt in der Nähe des
        Baums der Weisheit befindet. Aber wer weiß, wie lange der Baum noch
        seine letzte Kraft aufrecht halten kann? Nur wenn das Artefakt der Erde
        seine Macht zurückerlangt, kann der Baum gerettet werden.”
        <br />
        <br />
        Entschlossen den Elfen zu helfen, schildern sie euch, dass das Artefakt
        der Erde sich mitten in der Baumkrone des Baums der Weisheit befindet.
        Doch bevor der Baum euch Einlass zu seiner Krone gewährt, müsst ihr eine
        kleine Prüfung absolvieren.
        <br />
        Der Baum der Weisheit stellt euch vor einem Rätsel: Ihr seht vor euch
        Bäume in verschiedenen Größen. Wenn ihr sie nach der Größe sortiert,
        erhaltet ihr das gesuchte Lösungswort, um die Prüfung zu bestehen.
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
      <Riddle
        index={4}
        chapter={2}
        heading="Das Artefakt der Erde"
        question="Screenshots von den erfüllten Aufgaben an uns für das Lösungswort"
        answer="Te Ao"
      >
        {/* Erde in maori */}
        Nachdem ihr die Prüfung des Baums der Weisheit bestanden habt, schießen
        riesige Äste und Blätter ringsum aus dem Stamm und bilden eine
        Wendeltreppe nach oben. Das ist ein Zeichen, dass der Baum der Weisheit
        euch zu seiner Krone einlädt. Ihr lauft die hölzerne Treppe hoch und
        nach einiger Zeit findet ihr euch in schwindelerregender Höhe wieder.
        Ihr könnt über den kompletten Wald hinweg auf die Insel blicken. Von der
        atemberaubenden Aussicht beeindruckt, erklimmt ihr weiter die Treppen,
        die euch zum Artefakt der Erde führen.
        <br />
        <br />
        Als ihr oben auf der Baumkrone ankommt, erblickt ihr einen steinernen
        Podest inmitten den des Geflechts der riesigen Äste. Auf diesem Podest
        liegt ein hölzerner Ring, die in einem leichten Grün glimmert. Das ist
        das heilige Artefakt der Erde! Ihr geht zum Artefakt und versucht dieses
        zu berühren. Ähnlich wie beim Artefakt des Wassers, blitzt ein helles
        Licht auf, diesmal in einem leuchtenden Hellgrün. Es gilt die nächste
        Aufgabe zu lösen, um die Kraft des Artefakts wieder herzustellen.
        <br />
        <br />
        Damit das Artefakt der Erde wieder zu seiner ursprünglichen Kraft kommt,
        müsst ihr die folgende Aufgabe lösen: <br />
        <br />
        Begebt euch auf die folgende Seite und spielt das Minispiel:{" "}
        <Link to="/">https://elfragms.itch.io/gravitaze1</Link>
        <br />
        <br /> Mithilfe der Leertaste oder einem Mausklick könnt ihr die
        Gravitation nach oben bzw. unten hin verändern und so den Ball rollen
        lassen. Euer Ziel besteht darin, den Ball in den jeweiligen Leveln 3, 6
        und 9 auf die markierte Position zu führen, wie auf den Bilder
        dargestellt. (Demnach sollt ihr nicht das Ziel in der Mitte ansteuern!)
        <br />
        <br /> Schickt uns die jeweiligen Screenshots von den erfüllten Aufgaben
        und ihr bekommt von uns ein Lösungswort, um euer Abenteuer fortzusetzen.
        <br />
        <br /> Hinweis: Ihr könnt im Menü die jeweiligen Levels auswählen,
        sodass ihr nicht unbedingt die gesamten Levels durchspielen müsst.
        (Klickt dazu das Pause-Symbol und dann auf das Haus, so gelangt ihr
        wieder ins Levelauswahl-Menü)
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
      </Riddle>
      <Riddle chapter={2} index={5} epilog>
        Glückwunsch bis hier hin! Nachdem ihr die Kraft des Artefakts wieder
        hergestellt habt, beginnt der Baum der Weisheit in einem satten Hellgrün
        zu leuchten. Dann stößt er einen Lichtpuls in den Erdboden aus, der sich
        über die gesamte Insel erstreckt. Euch umhüllt ein gleißendes Licht, der
        euch zurück auf dem Boden zum Dorf der Elfen teleportiert. Ihr werdet
        von jubelnden und tanzenden Elfen empfangen: “Hurra! Hurra! Unser Dorf
        ist gerettet!”
        <br />
        <br />
        Eine der Elfen spricht zu euch: “Liebe Reisende, vielen vielen Dank für
        eure Hilfe! Ihr habt die Kraft des Artefakts der Erde und somit die
        Macht von zwei der vier heiligen Artefakte wieder hergestellt! Ihr habt
        sicherlich, als ihr oben auf den Baum ward, den riesigen Vulkan
        innerhalb der Gebirge in der Ferne gesehen. Das nächste Artefakt wartet
        dort auf euch. Die Zwerge, die in den Gebirgen leben, werden euch
        sicherlich weiterhelfen können.”
        <br />
        <br />
        Nun wisst ihr, wo euer nächstes Ziel ist. Die Elfen begleiten euch aus
        dem Wald heraus und zeigen euch, auf welchem Weg ihr am besten zu den
        Gebirgen hin kommt. So geht eure Reise weiter zum Artefakt des Feuer.
        <br />
        <br />
        Fortsetzung folgt...
        <br />
        <br />
        <H4>09.08.2021</H4>
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
