import { Api } from "../service/config/axiosConfig";

import { useNavigate } from "react-router-dom";

import { useState } from "react";

import "../styles/New.css";

const New = () => {
    const navigate = useNavigate()

    const [nome, setNome] = useState('')
    const [descricao, setDescricao] = useState('')
    const [quantidade, setQuantidade] = useState('')	

   const createRemedio = async (e: React.FormEvent<HTMLFormElement>) => {
     e.preventDefault();
     const remedio = {
       nome,
       descrição:descricao,
       quantidade: parseFloat(quantidade)
     };
    
console.log(remedio)
try{
   const response = await Api.post("", remedio);
   if (response.status === 200) {
       navigate('/');
   } else {
       console.log('Request failed');
   }
} catch(error){
   console.log(error);
}}


  return (
    <div className="novo-remedio">
      <h2>Inserir um novo Remédio:</h2>
      <form onSubmit={(e) => createRemedio(e)}>
        <div className="containerform">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            name="nome"
            placeholder="Digite o nome do remédio"
            id="nomeRemedio"
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="containerform">
          <label htmlFor="descrição">Descrição:</label>
          <textarea
            name="descrição"
            id="descrição"
            placeholder="Descrição"
            onChange={(e) => setDescricao(e.target.value)}
          ></textarea>
        </div>
        <div className="containerform">
          <label htmlFor="qnt">Quantidade:</label>
          <input
            type="number"
            name="qntRemedio"
            placeholder="Digite a quantidade"
            id="qntRemedio"
            onChange={(e) => setQuantidade(e.target.value)}
          />
        </div>
        <input type="submit" value="Salvar Remédio" className="btn"></input>
      </form>
    </div>
  );
};


export default New;
