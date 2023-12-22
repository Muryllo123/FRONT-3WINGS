import { useEffect, useState } from "react";
import { Api } from "../service/config/axiosConfig";
import "../styles/Remedios.css";
import { Link } from "react-router-dom";
//import DeleteIcon from "@mui/icons-material/Delete";
import { FaEdit } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

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
      const { data } = await Api.get<Api[]>("");

      setRemedios(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getRemedios();
  }, []);
  
  const deletarItem = async (id: number) => {
    try {
      await Api.delete(`/${id}`);
      setRemedios(remedios.filter((remedio) => remedio.id !== id));
    } catch (error) {
      console.log(error);
    }
  };


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
                  <div className="content">
                 <Link className="LerMais" to={`/ler/${remedio.id}`}>
                Ler Mais
                 </Link>
                 <div className="EditDelete">
                 <Link to={{ pathname: `/item/${remedio.id}/edit` }}>
                  <FaEdit size={23} className="Editar" />
                 </Link>
                 <FaTrashAlt
                  size={23}
                  className="Deletar"
                  onClick={() => deletarItem(remedio.id)}
                />
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Remedios;
