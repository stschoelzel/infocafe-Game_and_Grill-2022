import React from "react";

import { Parchment } from "../atoms/Parchment";
import { H1 } from "../atoms/H1";
import { Story } from "../molecules/Story";
import { H4 } from "../atoms/H4";
import { StoreContext, storedValue } from "../../helper/store";
// import { config } from "../config";

export const UnlockChapterTemplate = ({ chapter, date }) => {
  const { solveChapter } = React.useContext(StoreContext);
  const day = date.split(".");

  React.useEffect(() => {
    // if (
    //   new Date().getDate() >= day[0] &&
    //   storedValue.progress[{ chapter }][config.chapters[{ chapter } - 1]]
    // ) {
    if (new Date().getDate() >= day[0]) {
      solveChapter(chapter);
    }
  }, []);

  return (
    <p>
      Ihr habt die {chapter}. Woche des Abenteuers abgeschlossen! Gönnt euch
      eine wohlverdiente Rast, bald geht es weiter.
      <br />
      <br />
      Weiter geht es am:
      <br />
      <br />
      <H4>{date}</H4>
    </p>
  );
};
