🌾 Farm Producer Management Frontend

Este é o frontend da aplicação Farm Producer Management, construída com React e integrada a uma API FastAPI (backend) para gerenciar produtores rurais.

Este frontend exibe uma lista de produtores, permite adicionar e remover produtores e visualiza dados no dashboard.

🛠 Tecnologias Utilizadas

	•	React: Biblioteca JavaScript para construção da interface de usuário.
	•	Axios: Utilizada para realizar requisições HTTP à API.
	•	Docker: Containerização do frontend.
	•	NGINX: Servidor web para servir o aplicativo React em produção.

🚀 Como Rodar o Frontend e Backend Juntos com Docker

Este projeto foi projetado para rodar junto com o backend da API FastAPI usando Docker Compose.

Passo 1: Estrutura de Diretórios

Certifique-se de que sua estrutura de projetos esteja assim:
```
/backend               # Diretório do backend FastAPI
  /Dockerfile          # Dockerfile do backend
  /app
    /...

/frontend              # Diretório do frontend React (este projeto)
  /Dockerfile          # Dockerfile do frontend
  /src
    /...

/docker-compose.yml    # Arquivo docker-compose para rodar ambos os projetos
````

Passo 2: Configurar o docker-compose.yml

Na raiz do diretório (onde backend e frontend estão localizados), crie um arquivo docker-compose.yml com o seguinte conteúdo:
```
version: "3.9"
services:
  backend:
    build: ./backend
    ports:
      - "8000:8000"  # Porta do backend
    depends_on:
      - db
    environment:
      - DATABASE_URL=postgresql://user:password@db/producers_db
    restart: always

  frontend:
    build: ./frontend
    ports:
      - "3000:80"  # Porta do frontend (React)
    depends_on:
      - backend
    restart: always

  db:
    image: postgres
    environment:
      - POSTGRES_USER=user
      - POSTGRES_PASSWORD=password
      - POSTGRES_DB=producers_db
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    restart: always

volumes:
  postgres_data:
````

Passo 3: Rodar os Serviços

Na raiz do diretório que contém o docker-compose.yml, rode o seguinte comando:

docker-compose up --build

Este comando vai:

	•	Backend (FastAPI): Rodar na porta 8000.
	•	Frontend (React): Rodar na porta 3000, servido pelo NGINX.
	•	Banco de Dados (PostgreSQL): Rodar na porta 5432.

Passo 4: Acessar a Aplicação

	•	O frontend estará disponível em: http://localhost:3000
	•	O backend FastAPI estará disponível em: http://localhost:8000

Passo 5: Documentação da API

A documentação da API do FastAPI pode ser acessada em: http://localhost:8000/docs