import { useParams } from "react-router-dom";
import { Api } from "../service/config/axiosConfig";

import { useEffect, userEffect, useState } from "react";

export interface Editar {
  id: number;
  nome: string;
  descrição: string;
  quantidade: number;
}

const Atualizar = () => {
  const [atualizar, setAtualizar] = useState<Editar>();
  const [inputNome, setInputNome] = useState();
  const [inputQuantidade, setInputQuantidade] = useState();
  const [InputDescricao, setInputDescricao] = useState();




  const { id } = useParams();
  const getLerMais = async () => {
    try {
      const { data } = await Api.get<Editar>(`/${id}`);
      setAtualizar(data);
      console.log(data, atualizar);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getLerMais().then(() => {
      console.log("Sucesso");
    });
  }, []);

  return (
    <div>
      <form>
        <input name="name" value={}>
        </input>
        <input name="descrição">

        </input>
        <input name="quantidade">

        </input>
      </form>
    </div>
  );
};

export default Atualizar;
