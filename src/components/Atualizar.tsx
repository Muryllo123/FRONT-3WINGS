import { useParams } from "react-router-dom";
import { Api } from "../service/config/axiosConfig";
import "../styles/atualizar.css";

import { useEffect, useState } from "react";

export interface Editar {
  id: number;
  nome: string;
  descrição: string;
  quantidade: number;
}

const Atualizar = () => {
  const [inputNome, setInputNome] = useState("");
  const [inputQuantidade, setInputQuantidade] = useState("");
  const [InputDescricao, setInputDescricao] = useState("");

  const { id } = useParams();

  const buscarDadosIniciais = async () => {
    try {
      const { data } = await Api.get<Editar>(`/${id}`);
      setInputNome(data.nome);
      setInputQuantidade(data.quantidade.toString());
      setInputDescricao(data.descrição);
    } catch (error) {
      console.log(error);
    }
  };

  const atualizarDados = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await Api.put(`/${id}`, {
        nome: inputNome,
        quantidade: Number(inputQuantidade),
        descrição: InputDescricao,
      });
      console.log("Post atualizado com sucesso");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    buscarDadosIniciais().then(() => {
      console.log("Sucesso");
    });
  }, []);

  return (
    <div>
      <form onSubmit={atualizarDados}>
        <div className="containerEdit">
          <fieldset>
            <legend className="tituloEdit">Edite Seu Post</legend>

            <input
              className="camposEdit"
              name="name"
              value={inputNome}
              onChange={(e) => setInputNome(e.target.value)}
              placeholder="Digite o Nome"
            />
            <input
              className="camposEdit"
              name="descrição"
              value={InputDescricao}
              onChange={(e) => setInputDescricao(e.target.value)}
              placeholder="Digite a descrição..."
            />

            <input
              className="camposEdit"
              name="quantidade"
              value={inputQuantidade}
              onChange={(e) => setInputQuantidade(e.target.value)}
              placeholder="Digite a quantidade"
            />
            <button className="btnEditar" type="submit">
              Atualizar Remédio
            </button>
          </fieldset>
        </div>
      </form>
    </div>
  );
};

export default Atualizar;
