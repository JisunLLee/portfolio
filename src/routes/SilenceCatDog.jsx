import { useState } from "react";
import {
  List,
  Main,
  Page,
  Selection_area,
  Side,
  SideMenu,
} from "../components/silence_catdog/base";
import List_item from "../components/silence_catdog/list_item";
import { Sort } from "../components/silence_catdog/slection_items";
export default function SilenceCatDog() {
  const [selected, setSelected] = useState("ALL");
  const select = (select) => setSelected(select);
  return (
    <Page>
      <SideMenu selected={selected} select={select} />
      <MainContents selected={selected} />
      <Side />
    </Page>
  );
}

function MainContents({ selected }) {
  const [sorted, setSort] = useState("New");
  const sort = (sort) => setSort(sort);
  const selection_item = <Sort sort={sort} />;
  const fake_items = [
    fake_item2,
    fake_item2,
    fake_item,
    fake_item2,
    fake_item,
    fake_item,
    fake_item2,
    fake_item2,
    fake_item,
    fake_item,
  ];
  const list_item = fake_items.map((fake_item_) => (
    <List_item item={fake_item_} user={fake_user} />
  ));

  return (
    <Main>
      <Selection_area>{selection_item}</Selection_area>
      <List>{list_item}</List>
    </Main>
  );
}

const fake_user = {
  user_id: 1,
  user_like: [1, 3],
};

const fake_item = {
  img: "base.png",
  likes: true,
};

const fake_item2 = {
  img: "base.png",
  likes: false,
};
