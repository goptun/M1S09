import { useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";
import ListItem from "./components/ListItem";

function App() {
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = (texto) => {
    if (texto === "") {
      alert("É necessário escrever uma tarefa.");
      return;
    }
    const novaTarefa = {
      id: listaTarefas.length + 1,
      textoTarefa: texto,
      finalizado: false,
    };
    setListaTarefas([...listaTarefas, novaTarefa]);
  };

  const finalizarTarefa = (id) => {
    const novaLista = listaTarefas.map((item) =>
      item.id === id ? { ...item, finalizado: !item.finalizado } : item
    );
    setListaTarefas(novaLista);
  };

  const removerTarefa = (id) => {
    const novaLista = listaTarefas.filter((item) => item.id !== id);
    setListaTarefas(novaLista);
  };

  return (
    <>
      <CardAdicionar adicionarTarefa={adicionarTarefa} />

      <h2>Lista de Tarefas</h2>
      <div>
        {listaTarefas.map((tarefa) => (
          <ListItem
            textoTarefa={tarefa.textoTarefa}
            key={tarefa.id}
            id={tarefa.id}
            finalizado={tarefa.finalizado}
            finalizarTarefa={finalizarTarefa} // Passa a função de finalizar
            removerTarefa={removerTarefa}
          />
        ))}
      </div>
    </>
  );
}

export default App;
