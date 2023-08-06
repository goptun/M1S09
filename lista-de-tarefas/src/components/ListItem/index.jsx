import { useState } from "react";
import "./style.css";

function ListItem(props) {
  const [finalizado, setFinalizado] = useState(props.finalizado);

  return (
    <div className="container">
      <input type="checkbox" checked={finalizado} onChange={() => finalizado} />
      <h3 className={finalizado ? "marcar-finalizado" : ""}>
        {props.textoTarefa}
      </h3>
      <button
        className="botao-lista"
        onClick={() => setFinalizado(!finalizado)}
      >
        Finalizar
      </button>
      <button
        className="botao-lista"
        onClick={() => props.removerTarefa(props.id)}
      >
        Remover
      </button>
    </div>
  );
}

export default ListItem;
