- Criar uma biblioteca de conteúdos
- Cada conteúdo é acessível através de uma hash
  - Cenário:
    - Adiciono um conteúdo
    - Informar o tipo primário: um vídeo
    - o id é um hash: https://localhost:8081/api/v1/conteudos?path=/cursos/frontend/html/nome-da-lista
    - Onde ele está? https://localhost:3003/cursos/frontend/html/nome-da-lista

  Exemplo de lista de curso 
```json
{
  "status": 200,
  "message": "ok",
  "meta": {
    "type": "list",
    "id": "",
    "path": "",
    "rate": 5,
    "isCompleted": false,
    "thumbnail": {
      "title": "",
      "url": "",
      "width": "800px",
      "height": "600px",
      "sm": {
        "url": "",
        "width": "400px",
        "height": "300px",
      },
      "md": {},
      "lg": {}
    }
  },
  "body": {
    "title": "",
    "description": "",
    "items": [
      {
        "path": "",
        "title": "",
        "isComplete": false,
        "type": "video",
        "image": {
          "title": "",
          "url": "",
          "height": "600px",
          "width": "800px"
        }
      },
      {
        "path": "",
        "title": "",
        "isComplete": false,
        "type": "text",
        "image": null
      },
      {
        "path": "",
        "title": "",
        "isComplete": false,
        "type": "exercise",
        "total": 5,
        "image": null
      },
    ]
  },
  "pagination": {
    "totalPages": 1,
    "itemsPerPage": 20,
    "currentPage": 1,
    "next": null,
    "previous": null,
  }
}
```

Aula: video
```json
{
  "status": 200,
  "message": "ok",
  "meta": {
    "type": "video",
    "id": "",
    "path": "",
    "rate": 5,
    "isCompleted": true,
  },
  "body": {
    "title": "",
    "type": "video", // text, exercises
    "text": "<p>okok</p>",
    "image": {
      "title": "",
      "url": "",
      "height": "600px",
      "width": "800px"
    },
    "video": {
      "title": "",
      "url": "",
      "provider": "youtube",
      "ratio": "16by9"
    }
  },
  "pagination": {
    "totalPages": 1,
    "itemsPerPage": 20,
    "currentPage": 1,
    "next": null,
    "previous": null,
  }
}
```

Aula: exercise
```json
{
  "status": 200,
  "message": "ok",
  "meta": {
    "type": "exercise",
    "id": "",
    "path": "",
    "rate": 3,
    "isCompleted": false,
  },
  "body": {
    "title": "",
    "type": "exercise", // text, exercises
    "text": "<p>okok</p>",
    "image": {
      "title": "",
      "url": "",
      "height": "600px",
      "width": "800px"
    },
    "questions": [
      {
        "question": "<p>Qual é o nome de uma função que tem a seguinte estrutura: const nomeDaFuncao = () => {};</p>",
        "aswers": [
          {
            "answer": "Arrow function",
            "alternative": "A",
            "isCorrect": true
          },
          {
            "answer": "Lexical function",
            "alternative": "B",
            "isCorrect": false
          }
        ],
        "correction": {
          "text": "A letra A é a correta...",
          "alternative": "A"
        }
      }
    ]
  },
  "pagination": {
    "totalPages": 1,
    "itemsPerPage": 20,
    "currentPage": 1,
    "next": null,
    "previous": null,
  }
}
```