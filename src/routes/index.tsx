import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import App from '../App';
import Sobre from '../pages/sobre';
import Buffet from '../pages/buffet';
import Contato from '../pages/contato';

export default function Rotas() {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<App />} />
            <Route path='/sobre' element={<Sobre />} />
            <Route path='/buffet' element={<Buffet />} />
            <Route path='/contato' element={<Contato />} />
        </Routes>
    </Router>
  )
}
