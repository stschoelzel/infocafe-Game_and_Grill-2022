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

export const Woche5 = () => {
  return (
    <Parchment>
      <H1>Woche 5 - Finale</H1>

      <img
        src="img/final.png"
        style={{
          height: "100%",
          width: "100%",
        }}
      />
      <Riddle index={1} chapter={5} prolog>
        Ihr kommt mit den Vogelmenschen im Dorf der Fischmenschen an. Der
        Älteste erwartet euch dort, aber nicht nur er. Der Bürgermeister von der
        Zwergenstadt und auch einige Vertreterinnen der Elfen sind auch
        anwesend. Der Älteste spricht zu euch: “Reisende, ihr habt Großes für
        uns geleistet. Ihr habt die Macht der vier heiligen Artefakte wieder
        hergestellt. Und wir dachten alle, dass dadurch unsere Insel vor dem
        Unheil der Bösen Antiken Macht bewahrt werden kann. Doch leider ist die
        Lage beunruhigender als gedacht… Auch wenn die heiligen Artefakte wieder
        vollständig intakt sind, droht die Böse Macht dennoch aus ihrem
        Dimensionsgefängnis auszubrechen. Wir können uns das auch nicht
        erklären… Ob wir zu spät gehandelt haben?”
        <br />
        <br />
        Der Bürgermeister merkt an: “Feurio! Vielleicht ist es doch nicht zu
        spät. Vielleicht können wir diese Gelegenheit nutzen, die Böse Antike
        Macht mithilfe der Artefakte endgültig zu besiegen. Dies ist unsere
        letzte Chance. Reisende, ich weiß, es eine gefährliche Aufgabe die ich
        euch zumute, aber ich frage euch, ob ihr uns ein letztes Mal helfen
        könnt, unsere schöne Insel vor dem Untergang zu bewahren. Die einzigen,
        die die Böse Antike Macht bezwingen können, seid ihr. Ich glaube fest
        daran, dass ihr es schaffen könnt.”
        <br />
        <br />
        Voller Entschlossenheit sagt ihr dem Bürgermeister zu. Alle jubeln vor
        Freude. Die Hohepriesterin spricht zu euch: “Ein weiteres mal erweist
        ihr uns mit euren reinen Herzen euren Mut und eure Stärke. Wir werden
        alles Mögliche tun, um euch zu unterstützen. Liebe Bewohnende der Insel,
        wir müssen den Segen der vier heiligen Artefakte zu uns holen und den
        Reisenden auf dem Weg geben!” Die Hohepriesterin, der Bürgermeister, der
        Älteste und die Elfen fangen an sich zu konzentrieren. Sie beginnen ein
        Gedicht aufzusagen:
        <br />
        <br />
        <b>
          HORCH! HOHE DINGE LEHR’ ICH DICH: VIER ELEMEnTE GATTEN SICH. DIE
          GÖTTER DES LICHTS RIEFEN: ES WERDE! DA WARD WASSER, FEuER, LUFT UND
          ErDE.
          <br />
          DES FEUERS QUELL, dIE SONNE, BRENNT AM BLAUEN HiMMELSFIRMAMeNT. DAS
          WASSER BRAUST kLAR DURCH WAlD UND FeLD iN TAUSEnD ARMe nIMMT’S DIE
          WELT. DIE LUFT UMFÄNGT DEN ERDENbALL, WEHT HIE uND DORT, WEHT ÜBERALL.
          DIE ERDE, NUMMER VIER IN DIESEM BUND TRÄGT DIch GEWIsS AUF FEStEM
          GRUND
          <br />
          SCHAU HIER UND Da! SIEH RUND UM DICH! DIE ELEMENTE LIEbEN SICH. AUS
          SOLCHeM LIEBESTRIEB EMPFAnGEN IST WELT UND LEBEN HERVORGEGANGEN.
        </b>
        <br />
        <br />
        Plötzlich beginnen alle zu leuchten und strecken jeweils ein Hand in den
        Himmel. Es kommen vier Lichtstrahlen herunter geregnet und die vier
        heiligen Artefakte sind aufgetaucht.
        <br />
        <br />
        “Hier nehmt die vier heiligen Artefakte und reist zum Dimensionsspalt im
        Himmel. Mithilfe der Artefakte werdet ihr euch gegen die Böse Antike
        Macht behaupten müssen, aber ihr werdet es schaffen.”, spricht eine der
        Elfen zu euch. Ihr nehmt die vier heiligen Artefakte an und streckt sie
        in den Himmel. Sie beginnen zu leuchten und ihr werdet zum Spalt im
        Himmel teleportiert.
      </Riddle>
      <Riddle
        index={1}
        chapter={4}
        heading="Die Böse Antike Macht"
        question="Wie lautet die Lösung?"
        answer="Nexus der Verdammnis"
      >
        Am Dimensionsspalt angekommen, müsst ihr es schaffen, diese zu betreten
        und zur Bösen Antiken Macht vorzudringen. Am Spalt vernehmt ihr einen
        kryptischer Text, der auf den ersten Blick keinen Sinn ergibt. Doch
        müsst ihr diesen entschlüsseln, damit ihr weiter kommen könnt.
        <br />
        <br />
        Vielleicht hilft euch das Gedicht über die vier Elemente dabei weiter.
        Euch ist sicherlich etwas sonderliches aufgefallen, als die
        Inselbewohnenden das Gedicht aufgesagt haben. Schaut am besten nochmal
        genauer hin.
        <br />
        <br />
        <img
          src="img/5_1.png"
          style={{
            height: "100%",
            width: "100%",
          }}
        />
      </Riddle>
      <Riddle
        index={2}
        chapter={5}
        heading="Die Macht der Vier Elemente"
        question="Wie lautet die Lösung?"
        answer="Phönix"
      >
        Ihr durchdringt den Spalt und werdet in einen Dimesniosnsstrudel
        gesogen. Anschließend findet ihr euch in einer dunklen Galaxie wieder,
        jenseits von Raum und Zeit. Ihr spürt die Präsenz eine enormen Macht um
        euch. Plötzlich spricht eine verzerrte Stimme zu euch:
        <br />
        <br />
        “Ich bin der Nexus der Verdammnis. Äonen von Jahren wurde ich in dieser
        Dimension gefangen gehalten. Äonen von Jahren hatte ich Zeit zu
        überlegen, wie ich aus diesem Gefängnis ausbrechen konnte. Es war nur
        eine Frage der Zeit, bis die vier heiligen Artefakte ihre Macht
        verlieren. Doch ihr, ihr habt ihre Macht wieder hergestellt. Aber so wie
        es scheint, zu meinen Gunsten. Denn in dem Moment, als alle Artefakte
        ihre vollen Kräfte zurückerlangten, wurde für eine kurzen Augenblick
        Raum und Zeit verschoben. Es entstand Riss, ein Spalt, ein kleines
        Schlupfloch aus dieser Dimension heraus. Und nun ist meine Chance
        gekommen. Meine Chance hier auszubrechen, meine Chance auf Rache, meine
        Chance auf Zerstörung. Ich werde die Welt verschlingen. Ich werde die
        Finsternis verbreiten. Und IHR werdet mich dabei NICHT aufhalten!!!”
        <br />
        <br />
        Das letzte Kapitel eurer Reise hat begonnen. Ihr muss den Nexus der
        Verdammnis aufhalten und mit Hilfe der vier heiligen Artefakte
        bezwingen. Wasser, Erde, Feuer, Luft. Nutzt das ganze Wissen, was ihr
        auf eurer Reise gelernt habt und kombiniert die vier Elemente auf der
        folgenden Seite: https://littlealchemy.com
        <br />
        <br />
        Wenn ihr die vier Elemente auf folgender Weise kombiniert, könnt ihr mit
        Hilfe einer neu entstandenen Macht den Nexus der Verdammnis den finalen
        Schlag geben und endgültig vernichten:
        <br /> <br />
        <img
          src="img/5_2.png"
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

      <Riddle chapter={3} index={5} epilog>
        Ihr kombiniert die Mächte der vier heiligen Artefakte und es entsteht
        ein göttliches, vogelähnliches Wesen umhüllt in goldenen Flammen. Dieser
        schieß hinauf und explodiert in einen Lichtregen. Ihr hört die Schreie
        des Nexus der Verdammnis, die allmählich verstummen. Plötzlich werden
        ihr von einem Sog mitgenommen, der euch aus dieser Dimension zurück auf
        die Insel befördert. Der Dimensionsspalt im Himmel fängt an zu verzerren
        und zerberstet in ein leuchtendes Feuerwerk. Der Nexus der Verdammnis
        ist besiegt.
        <br />
        <br />
        Ihr landet auf das Dorf der Fischmenschen, wo euch die Inselbewohnenden
        alle erwarten. Mit Jubel und Freude werdet ihr empfangen. Der Älteste
        der Fischmenschen spricht zu euch: “Ihr habt es geschafft! Die Böse
        Antike Macht wurde endgültig vernichtet. Unsere Insel ist endgültig
        gerettet! Das muss gefeiert werden!” Auch die aufgekommenen
        Naturkatastrophen sind verschwunden und die Insel erblüht wieder in
        ihrer idyllischen Pracht.
        <br />
        <br />
        Gemeinsam feiert ihr noch bis in die Nacht hinein, ihr werdet von allen
        Inselbewohnenden mit Dank überschüttet. Doch eine Frage bleibt noch
        ungeklärt: Wie gelangt ihr wieder zurück in eure Welt? Auch wenn das
        harmonische Leben hier auf der Insel wieder gesichert ist, so wollt ihr
        wieder zurück auf eure ursprünglichen Reise auf dem Schiff. Ihr erklärt
        den Inselbewohnenden eure Situation. Etwas traurig aber verständnisvoll
        bringen sie euch zu eurem Schiff auf der Bucht, wo es gestrandet liegt.
        Sie helfen euch, das Schiff wieder quietschfidel zu machen. Ihr setzt
        die Segel und verabschiedet euch von der Insel und ihre Bewohnenden.
        <br />
        <br />
        So endet eurer Abenteuer auf der Insel der vier Elemente. Doch das ist
        noch lange nicht das Ende. Denn ihr setzt die Reise zu eurem
        ursprünglichen Ziel fort: das infocafe.
        <br />
        <br />
        Eure Belohung könnt ihr an einem dieser Tage im infocafe abholen!
        <br />
        <br />
        <H4>31.08.2020</H4>
        <H4>2.09.2020</H4>
        <H4>3.09.2020</H4>
      </Riddle>

      <BackToHome />
    </Parchment>
  );
};
