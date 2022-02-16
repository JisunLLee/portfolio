import { CategoryBtn } from "./base";
export function Side_menu({ selected, select }) {
  return (
    <div className="silence_side_menu">
      <CategoryBtn selected={selected} onClick={select} item="ALL" />
      <CategoryBtn selected={selected} onClick={select} item="CAT" />
      <CategoryBtn selected={selected} onClick={select} item="DOG" />
      <CategoryBtn selected={selected} onClick={select} item="ADD" />
    </div>
  );
}
