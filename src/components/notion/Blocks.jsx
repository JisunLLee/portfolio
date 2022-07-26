import { NotionContentsForm, repeatText } from './NotionForm';
import useAxios from '../../API/useAxios';
import { getNotion } from '../../Utils';

export const Blocks = ({ data, parents_id }) => {
  console.log('blocks!!!', data);
  if (data === undefined) return <div key={parents_id}></div>;
  if (data.length === 0) return <div key={parents_id}></div>;
  let data_form;
  let is_list = false;
  let list_type = {};
  if (data[0]) {
    data_form = data.map((data_form_, idx) => {
      const with_children = { ...data_form_ };
      if (with_children.has_children && !('childrenForm' in with_children)) {
        const children = GetChildren({ parents: data_form_ });
        with_children.childrenForm = (
          <Blocks data={children} parents_id={data_form_.id} />
        );
      }
      const form = (
        <NotionContentsForm v={with_children} parents_id={parents_id} />
      );
      if (form.type === 'li') {
        is_list = true;
        list_type[idx] = data_form_.type;
      }
      return form;
    });
  } else {
    data_form = NotionContentsForm({ v: data, parents_id: parents_id });
  }
  if (is_list) data_form = mkListForm({ data_form, list_type });
  return (
    <div className="notion_data_form" key={parents_id}>
      {data_form}
    </div>
  );
};

const mkListForm = ({ data_form, list_type }) => {
  let list_bundle = [];
  let new_data_form = [];

  data_form.forEach((data, i) => {
    if (list_bundle[0]) {
      const now_type = list_type[i];
      const prv_type = list_type[i - 1];
      if (data.type === 'li') {
        //지금 리스트타입과 비교해서 같은 리스트에 묶여있는지 확인.
        if (now_type === prv_type) {
          list_bundle.push(data);
        }
        //지금 리스트타입과 비교해서 다른 리스트라면, 이전거 리스트로 묶어주고 새로 리스트 만들기.
        else {
          //mk_list 만들어서 new_data_form에 추가
          new_data_form.push(mk_list(prv_type, list_bundle, data.id));
          //list_bundle 비우기
          list_bundle = [];
          //현재 번들에 본인 추가 (새로운 리스트 번들 만들기)
          list_bundle.push(data);
        }
      } else {
        //지난 idx 까지 만들어진 리스트 번들로 mk_list 만들어서 new_data_form에 추가
        new_data_form.push(mk_list(prv_type, list_bundle.data.id));
        //list_bundle 비우기
        list_bundle = [];
        // new_data_form에 본인 추가
        new_data_form.push(data);
      }
    } else {
      if (data.type === 'li') {
        list_bundle.push(data);
      } else {
        new_data_form.push(data);
      }
    }
  });
  return new_data_form;
};

const mk_list = (prv_type, list_bundle, key) => {
  let list;
  switch (prv_type) {
    case 'bulleted_list_item': {
      list = (
        <ul className="list_item_bundle" key={key}>
          {list_bundle}
        </ul>
      );
      break;
    }
    case 'numbered_list_item': {
      list = (
        <ol className="list_item_bundle" key={key}>
          {list_bundle}
        </ol>
      );
      break;
    }
  }
  return list;
};

export const resumeInfo = (data) => {
  const data_form = data.children.map((data_form_) => {
    const contents = data_form_.contents.map((contents_) => {
      switch (contents_.type) {
        case 'paragraph': {
          return (
            <p className="notion-blank" key={contents_.id}>
              {repeatText(contents_.paragraph.text)}
            </p>
          );
        }
        case 'image': {
          return (
            <img
              className="notion_resume_info_image"
              key={contents_.id}
              src={contents_.image.file.url}
            />
          );
        }
      }
    });
    return (
      <div className="notion_column_block" key={data_form_.id}>
        {contents}
      </div>
    );
  });
  return (
    <div className="notion_column" key={data.id}>
      {data_form}
    </div>
  );
};

export const notionDBform = (data_form_) => {
  const children = data_form_.children;
  const title = data_form_.child_database.title;
  return { title, children };
};

export const resumeCareer = (career_data) => {
  if (career_data) {
    let data_form;
    if (career_data[0]) {
      data_form = career_data.map((data_form_) => {
        return notionDBform(data_form_);
      });
    } else {
      data_form = notionDBform(career_data);
    }
    return data_form;
  }
};

export default Blocks;

export const GetChildren = ({ parents }) => {
  const { loading, data, error } = useAxios(
    getNotion(`children?id=${parents.id}`)
  );
  if (error !== null) console.log('useGetChildren | error!!', error);
  if (data) return data.data;
};
