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
  "body": [
    {
      "type": "meta",
      "title": "",
      "hash": "",
      "slug": "",
      "description": "",
      "image": null
    },
    {
      "type": "list",
      "slug": "",
      "title": "",
      "description": "",
      "image": null,
      "list": [
        {
          "type": "list",
          "slug": "",
          "title": "Java com Spring",
          "description": "",
          "image": null,
          "count": [
            {
              "type": "video",
              "length": 5,
              "durantionInMs": 500000,
            }
          ]
        },
        {
          "type": "document",
          "slug": "",
          "title": "Aula 1",
          "description": "",
          "image": null,
        }
      ]
    }
  ],
  "pagination": {
    "totalPages": 1,
    "itemsPerPage": 20,
    "currentPage": 1,
    "next": null,
    "previous": null,
  }
}
```

Document
```json
{
  "status": 200,
  "message": "ok",
  "body": [
    {
      "hash": "f783fa55-7280-4e73-b33a-7c80bc339a13",
      "type": "meta",
      "title": "Aula 1",
      "slug": "aula-1",
      "description": "<p>Aula 1</p>",
      "image": {
        "title": "",
        "list": [
          {
            "size": "sm",
            "url": "",
            "height": 400,
            "width": 300,
          },
          {
            "size": "lg",
            "url": "",
            "height": 600,
            "width": 800,
          }
        ]
      },
      "list": [
        {
          "type": "video", // text, exercises
          "title": "",
          "image": null,
          "url": "",
          "ratio": "16by9",
          "provider": "youtube",
          "durationInMs": 3000
        },
        {
          "type": "text",
          "title": "",
          "text": "<p>olá</p>"
        },
        {
          "type": "exercise",
          "title": "",
          "text": "<p>olá</p>",
          "aswers": [
            {
              "text": "Arrow function",
              "alternative": "A",
              "isCorrect": true
            },
            {
              "text": "Lexical function",
              "alternative": "B",
              "isCorrect": false
            }
          ],
          "correction": {
            "text": "A letra A é a correta...",
            "alternative": "A",
            "video": {
              "url": "",
              "provider": "youtube",
              "ratio": "16by9",
            },
            "image": null
          }
        }
      ],
    }
  ]
}
```
