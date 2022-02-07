import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import classNames from "classnames";
import AdminTemplate from "../../../components/templates/admin-template/admin-template";

const contents = [
  {
    type: "text",
    label: "Adicionar Texto",
  },
  {
    type: "questions",
    label: "Adicionar Pergunta",
  },
  {
    type: "video",
    label: "Adicionar Vídeo",
  },
];

export default function Document() {
  const [content, setContent] = useState([]);
  const [position, setPosition] = useState(content.length);
  const router = useRouter();
  const hash = router.query.hash;

  const addContent = (newContent) => {
    if (!newContent) return;
    const newPosition = position + 1;
    newContent.position = newPosition;
    const data = [...content, newContent];
    setPosition(newPosition);
    setContent(data);
  };

  const removeContent = (position) => {
    if (typeof position === "undefined") return;
    const data = content.filter((item) => item.position !== position);
    setContent(data);
  };

  const updateContent = (updatedContent, position) => {
    if (typeof position === "undefined") return;
    const data = content.map((item) => {
      if (item.position !== position) return item;
      return { ...item, ...updatedContent };
      setContent(data);
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(hash);
  };

  return (
    <AdminTemplate>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>Documento</legend>
          <div className="mb-3">
            <label htmlFor="title">Título</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="slug">Slug</label>
            <input
              type="text"
              className="form-control"
              id="slug"
              name="slug"
              autoComplete="off"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="description">Descrição</label>
            <textarea
              autoComplete="off"
              id="description"
              name="description"
              className="form-control"
              aria-label="Descrição"
            ></textarea>
          </div>
          <ContentAdder addContent={addContent} />
          <div className="document__content">
            {content.length}
            {content.map((item) => (
              <ContentItem
                key={item.position}
                {...item}
                removeContent={removeContent}
              />
            ))}
          </div>
          <button type="submit" className="btn btn-primary">
            Salvar
          </button>
        </fieldset>
      </form>
    </AdminTemplate>
  );
}

function ContentAdder({ addContent }) {
  return (
    <div className="document-header mb-3">
      <div
        className="btn-group"
        role="group"
        aria-label="Basic checkbox toggle button group"
      >
        {contents.map(({ type, label }) => (
          <button
            key={type}
            name={type}
            type="button"
            className="btn btn-outline-primary"
            onClick={() => addContent({ type })}
          >
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}

function ContentItem({ type, position, removeContent }) {
  const [show, setShow] = useState(false);

  const close = () => {
    setShow(false);
    document.removeEventListener("click", close);
  };

  const toggleShow = (event) => {
    event.stopPropagation();
    const newValue = !show;
    setShow(newValue);
    if (newValue) document.addEventListener("click", close);
  };

  useEffect(() => {
    return () => {
      close();
    };
  }, []);

  return (
    <div className="content-item">
      <div>Content item: {type}</div>
      <div className="btn-group" role="group">
        <button
          id="btnGroupDrop1"
          type="button"
          className="btn btn-primary dropdown-toggle"
          data-bs-toggle="dropdown"
          onClick={toggleShow}
          aria-expanded={show}
        >
          Opções
        </button>
        <ul
          className={classNames("dropdown-menu", { show })}
          aria-labelledby="btnGroupDrop1"
        >
          <li>
            <a className="dropdown-item" href="#">
              Mover para cima
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              Mover para baixo
            </a>
          </li>
          <li>
            <a
              className="dropdown-item"
              onClick={() => removeContent(position)}
            >
              Remover
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

function ContentVideoItem({ type }) {
  return <div className="content-video-item">{type}</div>;
}
