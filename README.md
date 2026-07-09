# 💰 Sistema de Controle de Gastos Residenciais

Sistema desenvolvido como solução para um desafio técnico de estágio em desenvolvimento, com o objetivo de gerenciar pessoas e suas transações financeiras (receitas e despesas), permitindo consultar saldos individuais e o total geral da residência.

## 📋 Sobre o Projeto

A aplicação permite:

- **Cadastro de pessoas** (criação, listagem e deleção, com exclusão em cascata das transações vinculadas);
- **Cadastro de transações** (criação e listagem, vinculadas a uma pessoa existente);
- **Consulta de totais**, exibindo receitas, despesas e saldo por pessoa, além do total geral da residência.

Os dados são persistidos e permanecem disponíveis após o fechamento da aplicação.

## 🚀 Tecnologias Utilizadas

### Back-end
- [.NET](https://dotnet.microsoft.com/) / C#
- Entity Framework Core (ORM)
- *(Banco de dados: especifique aqui — ex. SQL Server / SQLite / PostgreSQL)*

### Front-end
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- *(Bibliotecas adicionais: especifique aqui — ex. React Router, Axios, TailwindCSS)*

## 📐 Regras de Negócio

- Cada pessoa possui um identificador único gerado automaticamente, nome e idade.
- Ao deletar uma pessoa, **todas as transações associadas a ela são removidas automaticamente**.
- Cada transação possui identificador único gerado automaticamente, descrição, valor, tipo (`despesa` ou `receita`) e o identificador da pessoa vinculada.
- O identificador de pessoa informado em uma transação **precisa existir** previamente no cadastro de pessoas.
- **Pessoas menores de 18 anos só podem ter transações do tipo despesa cadastradas** (não é permitido cadastrar receitas para menores de idade).
- A consulta de totais lista, para cada pessoa: total de receitas, total de despesas e saldo (receitas − despesas).
- Ao final da listagem, é exibido o total geral, somando receitas, despesas e saldo líquido de todas as pessoas.

## 🗂️ Estrutura do Projeto

```
.
├── backend/                # API .NET / C#
│   ├── src/
│   ├── ...
│   └── README.md
├── frontend/                # Aplicação React + TypeScript
│   ├── src/
│   ├── ...
│   └── README.md
└── README.md                 # Este arquivo
```

> *(Ajuste a estrutura acima de acordo com a organização real das pastas do seu repositório.)*

## ⚙️ Como Executar o Projeto

### Pré-requisitos

- [.NET SDK](https://dotnet.microsoft.com/download) (versão X.X ou superior)
- [Node.js](https://nodejs.org/) (versão X.X ou superior)
- *(Outros pré-requisitos, se houver — ex. Docker, banco de dados local)*

### Back-end

```bash
cd backend
dotnet restore
dotnet ef database update   # aplica as migrations, se aplicável
dotnet run
```

A API estará disponível em `http://localhost:XXXX`.

### Front-end

```bash
cd frontend
npm install
npm run dev
```

A aplicação estará disponível em `http://localhost:XXXX`.

## 🔌 Endpoints Principais da API

| Método | Rota                     | Descrição                                  |
|--------|--------------------------|---------------------------------------------|
| POST   | `/api/pessoas`           | Cadastra uma nova pessoa                    |
| GET    | `/api/pessoas`           | Lista todas as pessoas cadastradas          |
| DELETE | `/api/pessoas/{id}`      | Remove uma pessoa e suas transações         |
| POST   | `/api/transacoes`        | Cadastra uma nova transação                 |
| GET    | `/api/transacoes`        | Lista todas as transações cadastradas       |
| GET    | `/api/totais`            | Retorna os totais por pessoa e o total geral|

> *(Ajuste rotas, verbos e nomes conforme a implementação final da sua API.)*

## 🧪 Testes

*(Descreva aqui, se houver, como executar os testes automatizados do projeto.)*

```bash
dotnet test
```

## 🖼️ Screenshots

*(Opcional: inclua imagens da aplicação em funcionamento.)*

## 👤 Autor

Desenvolvido por **Lucas da Silva Gomes**.

- [LinkedIn](#)
- [GitHub](#)