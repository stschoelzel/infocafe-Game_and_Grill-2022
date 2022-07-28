import React from "react";
import { Parchment } from "../atoms/Parchment";
import { Logo } from "../atoms/Logo";
import { H3 } from "../atoms/H3";
import { H4 } from "../atoms/H4";
import { Divider } from "../atoms/Divider";
import { Story } from "../molecules/Story";
import { theme } from "../../theme";
import { DasBrauchtIhrIcons } from "../molecules/DasBrauchtIhrIcons";
import { ConfiguredTableOfContents } from "../organisms/ConfiguredTableOfContents";
import { unlocked } from "../../config";

export const Home = () => {
  return (
    <Parchment>
      <Logo />

      <Story>
        <div
          style={{ textDecoration: "none", color: theme.primary, opactiy: 1 }}
        >
          Die Sommerferien sind da und das diesjährige Game’n’Grill steht wieder
          vor der Tür: Ein neues Abenteuer voller Rätsel, Spiel und Spaß
          beginnt!
          <br />
          <br />
          Vier Wochen mit je Drei Aufgaben.
          <br />
          <br />
          Die Spiele sind eröffnet!
        </div>
      </Story>

      <Divider />
      <ConfiguredTableOfContents unlocked={unlocked} />

      <Divider />
      <H3>Allgemeine Infos</H3>
      <p style={{ marginBottom: "D" }}>
        Bei Rückfragen könnt ihr eine Email an{" "}
        <a
          style={{ textDecoration: "none", color: theme.primary, opactiy: 0.5 }}
          href="mailto:gng@infocafe.org"
        >
          GNG@infocafe.org
        </a>{" "}
        schreiben
      </p>
      <Divider />
      <H4>Was ihr (vielleicht) braucht</H4>
      <DasBrauchtIhrIcons />
      <p>
        Solltet ihr keine mobile Internetverbindung haben, könnt ihr das
        öffentliche wLan der Stadt Neu-Isenburg nutzen, zB am Marktplatz, dem
        Sportpark oder der Bibliothek.
      </p>
      <p>
        Wann ihr was braucht können wir euch noch nicht sagen. Aber denkt daran,
        egal wo Ihr seid, auf euch aufzupassen und Rücksicht auf andere zu
        nehmen. Danke!
      </p>
    </Parchment>
  );
};
