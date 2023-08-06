import { useState } from "react";
import "./style.css";

function ListItem(props) {
  const [finalizado, setFinalizado] = useState(props.finalizado);

  return (
    <li className="listItem">
      <input type="checkbox" checked={finalizado} onChange={() => finalizado} />
      <span className={finalizado ? "finalizado" : ""}>
        {props.textoTarefa}
      </span>
      <button onClick={() => setFinalizado(!finalizado)}>Finalizar</button>
      <button onClick={() => props.removerTarefa(props.id)}>Remover</button>
    </li>
  );
}

export default ListItem;
