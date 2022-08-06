import React from "react";
import { config } from "../../config";
import { StoreContext } from "../../helper/store";
import { TableOfContents } from "../molecules/TableOfContents";

export const ConfiguredTableOfContents = ({ unlocked = Infinity, dev }) => {
  const { getChapterState } = React.useContext(StoreContext);
  const chapters = config.chapters;
  let content = [];
  chapters.forEach((c, i) => {
    const hidden = dev? false:  i >= unlocked  ;
    const state = dev? "ACTIVE":  (hidden ? "DISABLED" : getChapterState(i + 1)  );
    content.push({
      label: !hidden ? `Woche ${i + 1}` : "????",
      disabled: state === "DISABLED",
      solved: state === "SOLVED",
      to: `Woche${i + 1}`,
    });
  });

  return <TableOfContents content={content} />;
};
