# Monitor de APIs

Este projeto consiste em um sistema de monitoramento de APIs, responsável por exibir o status de cada API, indicando se estão ativas, offline ou banidas. O objetivo principal é fornecer de maneira clara e eficiente as informações relacionadas às APIs para o time de suporte técnico.

## Stacks Utilizadas

O sistema foi desenvolvido utilizando a biblioteca **React**, juntamente com algumas outras bibliotecas de estilização, garantindo uma interface amigável e responsiva. Para simular uma API-REST foi utilizado o **Json-Server**.

## Configuração do Ambiente

Antes de começar, certifique-se de ter o **Node.js** e o **npm** instalados em sua máquina.

#### Clone o repositório para sua máquina local:
```
git clone https://github.com/danbolotaro/IPSolution-Project.git
```

#### Acesse o diretório do projeto:

```
cd IPSolution-Project
```

#### Instale as dependências do projeto:

```
npm install
```

## Simulação do Backend

O sistema atualmente não possui um back-end real. Em vez disso, foi utilizado um Json-Server para simular uma API REST. Os dados são consumidos e exibidos na aplicação a partir do arquivo **db.json**, localizado na pasta **simulated-backend**.

#### Para iniciar o Json-Server, execute o seguinte comando:

```
npx json-server --watch simulated-backend/db.json --port 3001
```

Isso iniciará o servidor na porta **3001**.

*Este comando precisa ser executado dentro da pasta 'simulated-backend'*

## Executando a Aplicação

Após configurar o ambiente e iniciar o servidor simulado, retorne à pasta principal do projeto e execute a aplicação React com o seguinte comando:

```
npm run dev
```

A aplicação estará disponível em *http://localhost:3000*.

Mantenha o Json-Server em execução enquanto estiver utilizando a aplicação para garantir o correto funcionamento do sistema.
