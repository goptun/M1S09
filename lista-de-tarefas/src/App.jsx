import { useState } from "react";
import "./App.css";
import CardAdicionar from "./components/CardAdicionar";

function App() {
  const [listaTarefas, setListaTarefas] = useState([]);

  const adicionarTarefa = (texto) => {
    if (texto == "") {
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
  return (
    <>
      <CardAdicionar adicionarTarefa={adicionarTarefa} />
    </>
  );
}

export default App;
