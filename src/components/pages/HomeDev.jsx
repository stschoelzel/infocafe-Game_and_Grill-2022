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

export const HomeDev = () => {
  return (
    <Parchment>
      <Logo />

      <Story>
        <b>* DEVELOPER MODE * </b>
        Wenn du diese Nachricht liest hast du bewiesen das du uns helfen kannst.
        Irgendetwas stimmt nicht im Land und nur du kannst uns helfen! Wir
        werden am 13.7. den ersten Hinweis geben können damit du herausfinden
        kannst was passiert ist. Das hier ist übrigens ein magischer Brief der
        seinen Inhalt ändern kann…
      </Story>

      <Divider />
      <ConfiguredTableOfContents unlocked={5} dev={true}/>

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
