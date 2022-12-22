import { BrowserRouter, Route, Routes } from 'react-router-dom';
import UserHomePage from './components/userHomePage';
import CreateOrderPage from './components/createOrdersPage';

function App() {
  return (
    <div className="App">
         <BrowserRouter>
            <Routes>
                <Route path='/homepage' element={<UserHomePage />}></Route>
                <Route path='/create-order' element={<CreateOrderPage />}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
