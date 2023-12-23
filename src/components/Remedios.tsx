import { useEffect, useState } from "react";
import { Api } from "../service/config/axiosConfig";
import '../styles/Remedios.css'
import { Link } from "react-router-dom";

export interface Api {
  id: number;
  nome: string;
  descrição: string;
  quantidade: number;
}
const Remedios = () => {
  const [remedios, setRemedios] = useState<Api[]>([]);

  const getRemedios = async () => {
    try {
        const {data} = await Api.get<Api[]>('')

     setRemedios(data);
    } catch (error) {
        console.log(error)
    }
  };

  useEffect(() => {
    getRemedios();
  }, []);

return (
  <div className="container">
    <h1>Lista de Remédios</h1>
    {remedios.length === 0 ? (
      <p>Carregando...</p>
    ) : (
      <div className="grid">
        {remedios.map((remedio) => (
          <div className="remedio" key={remedio.id}>
            <h1>{remedio.nome}</h1>
            <p className="descrição">{remedio.descrição}</p>
            <p className="qnt">
              <h4>Quantidade: </h4>
              {remedio.quantidade}
            </p>
            <Link className="LerMais" to={`/item/${remedio.id}`}>Ler Mais</Link>
          </div>
        ))}
      </div>
    )}
  </div>
);

};

 export default Remedios;