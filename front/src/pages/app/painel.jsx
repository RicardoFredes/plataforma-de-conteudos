import PageTemplate from "../../components/templates/page-template/page-template.component";

export async function getServerSideProps(context) {
  return {
    props: {
      meta: {},
      body: {
        type: "list",
        title: "Cursos",
        list: [
          {
            type: "heading",
            title: "FrontEnd",
            text: "",
          },
          {
            type: "list",
            title: "JavaScript",
            text: "",
            path: "/cursos/front-end/javascript",
            thumbnail: {
              url: "",
              width: 400,
              height: 300
            }
          }
        ]
      },
    },
  }
}

export default function Dashboard({ body }) {
  return (
    <PageTemplate>
      <h2>{body.title}</h2>
      {body.list.map(({ title }, key) => (
        <div key={key}>{title}</div>
      ))}
    </PageTemplate>
  )
}
