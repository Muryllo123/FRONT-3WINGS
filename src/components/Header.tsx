
import '../styles/Header.css'
import { Link } from 'react-router-dom';
interface HeaderProps {
    logo: string;
}

const Header = ({ logo }: HeaderProps) => {
return (
  <header>
    <nav>
      <img src={logo} alt="Logo da Empresa 3Wings" />
      <ul>
        <li>
          <Link to={`/`}>Home</Link>
        </li>
        <li>
          <Link to={`/sobre`}>Sobre</Link>
        </li>
        <li>
          <Link to={`/`}>Contato</Link>
        </li>
        <li className="Criar">
          <Link to={`/novo`}>Novo Post</Link>
        </li>
        <li className="Editar"><a>Editar Post</a></li>
      </ul>
    </nav>
  </header>
);
};

export default Header;