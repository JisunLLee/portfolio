import { CategoryBtn } from "./base";

export function Sort({ sort }) {
  return (
    <select className="silence_selection_sort">
      <option selected onSelect={() => sort("New")}>
        최신순
      </option>
      <option onSelect={() => sort("Old")}>오래된순</option>
      <option onSelect={() => sort("Recomend")}> 추천순</option>
    </select>
  );
}

export function Kind({ selected, onClick }) {
  return (
    <div className="silence_write_select_category_btn">
      <CategoryBtn selected={selected} onClick={onClick} item="cat" />
      <CategoryBtn selected={selected} onClick={onClick} item="dog" />
    </div>
  );
}
