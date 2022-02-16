import useAxios from "../../API/useAxios";
import { getNotion } from "../../Utils";

const mkTableForm2 = (contents_h) => {
  if (contents_h[0]) {
    const indent = [0, 0];
    const table_of_contents = contents_h.map((data) => {
      console.log("table_of_contents_id", data.id);
      switch (data.type) {
        case "heading_1": {
          indent[0] = 10;
          indent[1] = 10;
          return Table({ indent: 0, data });
        }
        case "heading_2": {
          indent[1] = indent[0] + 10;
          return Table({ indent: indent[0], data });
        }
        case "heading_3": {
          return Table({ indent: indent[1], data });
        }
      }
    });

    return table_of_contents;
  }
};

const Table = ({ indent, data }) => {
  const onScroll = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView();
  };

  return (
    <p
      className="notion_table_of_contents"
      style={{ textIndent: indent + "px" }}
      onClick={() => onScroll(data.id)}
      key={data.id}
    >
      {data.text}
    </p>
  );
};

export const TableOfContents = ({ parents_id }) => {
  const { loading, data, error } = useAxios(
    getNotion(`/table_of_contents?id=${parents_id}`)
  );

  let table_of_contents = "목차...Loading";
  if (error !== null) console.log("error!!", error);
  if (!loading) table_of_contents = mkTableForm2(data.data);

  return (
    <div className="notion_table_of_contents_wrap " key={parents_id}>
      {table_of_contents}
    </div>
  );
};
