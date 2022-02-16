import { Side_menu } from "./side_items";

export function Page(props) {
  return <div className="silence_page">{props.children}</div>;
}

export function Side(props) {
  return <div className="silence_side">{props.children}</div>;
}

export function SideMenu({ selected, select }) {
  return (
    <Side>
      <Side_menu selected={selected} select={select} />
    </Side>
  );
}

export function Main(props) {
  return <div className="silence_main">{props.children}</div>;
}

export function Selection_area(props) {
  return <div className="silence_selection_area">{props.children}</div>;
}

export function List(props) {
  return <div className="silence_list">{props.children}</div>;
}

export function CategoryBtn({ selected, item, onClick }) {
  const is_selete = selected.toLowerCase() === item.toLowerCase();
  const category_button = (
    <button
      className={
        is_selete ? "silence_category_btn_selected" : "silence_category_btn"
      }
      onClick={() => onClick(item.toUpperCase())}
    >
      <img
        className="silence_category_btn_img"
        src={is_selete ? `${item}_selected.png` : `${item}.png`}
        alt={item}
      />
    </button>
  );

  return category_button;
}
