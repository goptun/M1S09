# [M1S09] Roteiro de lista de exercícios

Os exercícios dessa semana formam um mini projeto. O projeto consiste na criação de uma lista de tarefas, também conhecida como To Do List.

Você pode seguir o modelo do Figma como base para o projeto:

[Wireframe](https://www.figma.com/file/5RRZV4aRf752aCkOlIiAmX/Wireframe---Mini-projeto-Lista-de-Tarefas?type=design&node-id=0-1&mode=design&t=IoLFlgXGY7liUbcj-0/)

Os próximos exercícios serão uma continuação deste exercício e ao final você terá criado um projeto. Então siga a ordem dos exercícios para conseguir realizar o projeto corretamente.

Você deve criar o projeto em React e subir o seu código do projeto para o GitHub.

Importante: após cada exercício faça o commit e push das alterações para o GitHub.

## Exercício 01

Neste primeiro exercício você deve criar o projeto em React usando o Vite e em seguida subir o seu código do projeto para o GitHub.

## Exercício 02

Vamos criar um componente para criar uma tarefa. Ele deve ser chamado de CardAdicionar. Siga os passos do checklist abaixo para finalizar a tarefa.

- 1 - Crie um useState para guardar o texto da tarefa;
- 2 - Crie um input do tipo text que será usado para receber o texto da tarefa a ser criada;
- 3 - crie um botão para chamar a função de adicionar a tarefa;
- 4 - faça o botão chamar a função de adicionar tarefa

Este componente deve receber como prop a função para criar a tarefa e adicionar a lista de tarefas.

Por fim importe esse componente no App.jsx.

Exemplo de utilização de input tipo text:

```jsx
<input
    placeholder="adicionar tarefa"
    type="text"
    value={//value aqui}
    onChange={//função aqui}
/>
```

## Exercício 03

No app.jsx crie um useState para armazenar um array de objetos(que serão as tarefas).

Ele será utilizado para armazenar todas as tarefas.

## Exercício 04

No App.jsx crie a função de criar uma tarefa como um objeto com os atributos:

- id - number
- texto - string
- finalizado - booleano

Em seguida adicione a tarefa no array de lista de tarefas.

Essa função deve ser passada como props para o componente CardAdicionar que é o responsável por receber o texto da tarefa.

## Exercício 05

Crie um componente para exibir as informações de cada tarefa. Ele deve ser chamado de ListItem. Ele deve receber como props a tarefa a ser exibida.

Nele adicione um useState para guardar o estado da tarefa que está sendo recebida como props (O valor de finalizado).

Em seguida crie uma função para finalizar a tarefa e um botão para chamar essa função.

## Exercício 06

Renderização em Lista das tarefas

## Exercício 07

No App.jsx crie uma função para remover a tarefa. Essa função deve receber como parâmetro a tarefa a ser removida e deve ser passada como prop para o componente de ListItem que chamará essa função.

Exemplo de passagem de prop:

```jsx
<ListItem removerTarefa={removerTarefa} />
```

## Exercício 08

Receba no componente ListItem a função para remover uma tarefa.

Essa função foi criada no exercício anterior e estará sendo passada como props pelo App.jsx.

Em seguida crie um botão para chamar essa função.

Lembrete: essa função deve receber a tarefa a ser removida como parâmetro.
