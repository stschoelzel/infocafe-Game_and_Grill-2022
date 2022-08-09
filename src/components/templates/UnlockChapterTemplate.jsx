import React from "react";

import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Story } from "../molecules/Story";
import { H4 } from "../atoms/H4";
import { StoreContext } from "../../helper/store";

export const UnlockChapterTemplate = ({ chapter, date }) => {
  const { solveChapter } = React.useContext(StoreContext);
  const day = date.split(".");

  React.useEffect(() => {
    if (new Date().getDate() >= day[0]) {
      solveChapter(chapter);
      console.log("1");
    }
  }, []);

  return (
    <p>
      Ihr habt das {chapter}. Woche des Abenteuers abgeschlossen! Gönnt euch
      eine wohlverdiente Rast, bald geht es weiter.
      <br />
      <br />
      Das nächste Woche offenbart sich euch am:
      <br />
      <br />
      <H4>{date}</H4>
    </p>
  );
};
