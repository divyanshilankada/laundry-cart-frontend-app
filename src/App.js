import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserHomePage from './components/user/userHomePage';
import CreateOrderPage from './components/createOrder/createOrdersPage';
import LoginPage from './components/login/loginPage';
import RegisterPage from './components/register/registerPage';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path='/' element={<LoginPage />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                <Route path='/user' element={<UserHomePage />}></Route>
                <Route path='/user/create-order' element={<CreateOrderPage />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
