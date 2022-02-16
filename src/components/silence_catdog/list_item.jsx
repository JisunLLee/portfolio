export default function List_item({ item, user }) {
  return (
    <div className="silence_item">
      <img className="silence_item_content" src={item.img} />
      <button
        className={
          item.likes ? "silence_item_like_selected" : "silence_item_like"
        }
      ></button>
    </div>
  );
}
