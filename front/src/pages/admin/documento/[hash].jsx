import { useRouter } from "next/router";
import { useState } from "react";
import AdminTemplate from "../../../components/templates/admin-template/admin-template";

const contents = [
  {
    type: "text",
    label: "Adicionar Texto",
  },
  {
    type: "exercise",
    label: "Adicionar Exercício",
  },
  {
    type: "video",
    label: "Adicionar Vídeo",
  },
];

const translateType = {
  text: { label: "Texto" },
  exercise: { label: "Exercício" },
  video: { label: "Vídeo" },
};

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

  const moveContent = (position, up = true) => {
    if (typeof position === "undefined") return;

    const currentIndex = content.findIndex(
      (item) => item.position === position
    );
    const newIndex = up ? currentIndex - 1 : currentIndex + 1;

    if (currentIndex < 0 || newIndex < 0 || newIndex === content.length) return;

    const currentItem = content[currentIndex];
    const otherItem = content[newIndex];

    const data = [...content];
    data[currentIndex] = otherItem;
    data[newIndex] = currentItem;

    setContent(data);
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
            {content.map((item, index) => (
              <ContentItem
                key={item.position}
                {...item}
                removeContent={removeContent}
                moveContent={moveContent}
                index={index}
                isFirst={index === 0}
                isLast={index === content.length - 1}
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

function ContentItem({
  type,
  position,
  removeContent,
  moveContent,
  isFirst,
  isLast,
}) {
  const name = `${translateType[type].label} #${position}`
  return (
    <div className="accordion mb-3">
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${position}`}>
          <button
            className="accordion-button"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${position}`}
            aria-expanded="true"
            aria-controls={`collapse${position}`}
          >
            {name}
          </button>
        </h2>
        <div
          id={`collapse${position}`}
          className="accordion-collapse collapse show"
          aria-labelledby={`heading${position}`}
          data-bs-parent="#accordionExample"
        >
          <div className="accordion-body p-0">
            <div className="row g-0">
              <div className="col">
                <div className="p-3">
                  {type === "video" && <ContentVideoItem />}
                  {type === "text" && <ContentTextItem />}
                  {type === "exercise" && <ContentExerciseItem />}
                </div>
              </div>
              <div className="col-1">
                <div className="p-3 d-flex justify-content-end ">
                  <Options
                    name={name}
                    isFirst={isFirst}
                    isLast={isLast}
                    position={position}
                    removeContent={removeContent}
                    moveContent={moveContent}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Options({ removeContent, position, moveContent, isFirst, isLast, name }) {
  return (
    <>
      <div
        className="btn-group-vertical btn-group-md"
        role="group"
        aria-label="First group"
      >
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => moveContent(position, true)}
          disabled={isFirst}
        >
          <i className="bi bi-arrow-up" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          onClick={() => moveContent(position, false)}
          disabled={isLast}
        >
          <i className="bi bi-arrow-down" />
        </button>
        <button
          type="button"
          className="btn btn-outline-secondary"
          data-bs-toggle="modal"
          data-bs-target={`#modal${position}`}
        >
          <i className="bi bi-trash-fill" />
        </button>
      </div>
      <div
        className="modal fade"
        id={`modal${position}`}
        tabIndex="-1"
        aria-labelledby={`modalLabel${position}`}
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id={`modalLabel${position}`}>
                Confirmação
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">Você deseja remover esse item? <strong>{name}</strong></div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Não
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={() => removeContent(position)}
              >
                Sim
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ContentVideoItem() {
  return (
    <div className="content-video-item">
      <div className="input-group mb-3">
        <span className="input-group-text">Título</span>
        <input
          type="text"
          name="title"
          className="form-control"
          placeholder="Título do vídeo"
        />
      </div>

      <div className="row gx-3">
        <div className="col-6">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-link"></i>
            </span>
            <input
              type="text"
              name="url"
              className="form-control"
              placeholder="Url do vídeo"
            />
          </div>
        </div>
        <div className="col-2">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-play"></i>
            </span>
            <select className="form-select">
              <option value="1">Youtube</option>
              <option value="2">Vimeo</option>
              <option value="3">Outro</option>
            </select>
          </div>
        </div>
        <div className="col-2">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-aspect-ratio"></i>
            </span>
            <select className="form-select">
              <option value="1">16x9</option>
              <option value="2">4x3</option>
              <option value="3">16x10</option>
            </select>
          </div>
        </div>
        <div className="col-2">
          <div className="input-group">
            <span className="input-group-text">
              <i className="bi bi-clock"></i>
            </span>
            <input
              type="text"
              name="duration"
              className="form-control"
              placeholder="Duração em milisegundos"
            />
            <span className="input-group-text">ms</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentTextItem() {
  return (
    <div className="content-text-item">
      <textarea
        rows={4}
        autoComplete="off"
        name="text"
        className="form-control"
      ></textarea>
    </div>
  );
}

function ContentExerciseItem() {
  return (
    <div className="content-exercise-item">
      <div className="mb-3">
        <textarea
          rows={3}
          autoComplete="off"
          name="text"
          className="form-control"
        ></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">A</span>
        <textarea className="form-control" rows={1}></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">B</span>
        <textarea className="form-control" rows={1}></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">C</span>
        <textarea className="form-control" rows={1}></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">D</span>
        <textarea className="form-control" rows={1}></textarea>
      </div>
      <div className="input-group mb-3">
        <span className="input-group-text">E</span>
        <textarea className="form-control" rows={1}></textarea>
      </div>
      <div className="input-group">
        <span className="input-group-text">Alternativa correta</span>
        <select className="form-select">
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
          <option value="D">D</option>
          <option value="E">E</option>
        </select>
      </div>
    </div>
  );
}
