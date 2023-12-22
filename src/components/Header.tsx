
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
        <li className="Criar">
          <Link to={`/novo`}>Novo Post</Link>
        </li>
      </ul>
    </nav>
  </header>
);
};

export default Header;