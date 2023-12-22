import { useParams } from "react-router-dom";
import { Api } from "../service/config/axiosConfig";
import { useEffect, useState } from "react";
import '../styles/ler.css';


export interface LerMais {
  id: number;
  nome: string;
  descrição: string;
  quantidade: number;
}
const Ler  = () => {
 const [ler,setLer] = useState<LerMais>();
    const {id} = useParams()
    const getLerMais = async () => {
        try{
            const {data} = await Api.get<LerMais>(`/${id}`)
            setLer(data)
           console.log(data, ler)
        }catch(error){
            console.log(error)
        }
    };
    
    useEffect(() => {
        getLerMais().then(() => {console.log("Sucesso")})
    },[]);
        
    return (
      <div className="container">
        <div className="contentLer">
          <div className="boxLer">
            <h1 className="nome">{ler?.nome}</h1>
            <p className="descricao">{ler?.descrição}</p>
            
            <p className="quantidade">
              <h4>Quantidade:</h4>
              {ler?.quantidade}
            </p>
          </div>
        </div>
      </div>
    );
}
export default Ler;