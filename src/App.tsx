import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import '.././src/App.css'
import Remedios from './components/Remedios';
         
const App =() => {
  return (
    <div className="App">
      <Header logo="https://static.wixstatic.com/media/7bead1_e666fc41eae54034a107c40ad6ebf058~mv2.png/v1/fill/w_350,h_110,al_c,lg_1,q_85,enc_auto/logo_original_eps_bco_semfundo_small.png" />
      <div className="container">
        <Outlet />
      </div>
    </div>
  );
}

export default App
