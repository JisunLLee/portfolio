import { useState } from "react";
import {
  Main,
  Page,
  Selection_area,
  Side,
  SideMenu,
} from "../components/silence_catdog/base";
import { Kind } from "../components/silence_catdog/slection_items";
import Write from "../components/silence_catdog/write";
export default function SilenceWrite() {
  const [category, setCategory] = useState("ALL");
  const onClick = (select) => setCategory(select);
  return (
    <Page>
      <SideMenu selected="ADD" />
      <MainContents category={category} onClick={onClick} />
      <Side />
    </Page>
  );
}

function MainContents({ category, onClick }) {
  const selection_item = <Kind selected={category} onClick={onClick} />;
  return (
    <Main>
      <Selection_area>{selection_item}</Selection_area>
      <Write category={category} />
    </Main>
  );
}
