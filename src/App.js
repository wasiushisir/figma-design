
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Footer/Footer';
import Header from './Header/Header';
import AccountDetails from './pages/AccountDetails';
import Dashboard from './pages/Dashboard';
import Orders from './pages/Orders';
import Wallet from './pages/Wallet';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Header></Header>
     <Routes>
      <Route path='/' element={<Dashboard></Dashboard>}></Route>
      <Route path='/orders' element={<Orders></Orders>}></Route>
      <Route path='/wallet' element={<Wallet></Wallet>}></Route>
      <Route path='/account' element={<AccountDetails></AccountDetails>}></Route>

     </Routes>
      <Footer></Footer>
      
      
    </div>
  );
}

export default App;
//#F0F5FA
//
