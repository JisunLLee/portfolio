export const getTitle = (title) => {
  if (title === null) {
    title = {
      cover: {
        external: {
          url: "",
        },
      },
      icon: {
        emoji: "🏄🏻‍♀️",
      },
      title: {
        title: [{ plain_text: "이지선 | RESUME" }],
      },
    };
  } else {
    if (title.cover === null)
      title.cover = {
        external: {
          url: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=3600",
        },
      };
    if (title.icon === null)
      title.icon = {
        emoji: null,
      };
  }
  return (
    <section>
      <img className="notion-page-cover" src={title.cover.external.url} />
      <div className="notion-page">
        <div className="notion-page-has-cover">
          <div className="notion-page-icon-wrapper">
            <span className="notion-page-icon">{title.icon.emoji}</span>
          </div>
        </div>
        <div className="notion-title">{title.title.title[0].plain_text}</div>
      </div>
    </section>
  );
};
