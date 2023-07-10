// import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Routes , Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import Login from './COMPONENTS/Login';
import Table from './COMPONENTS/Table';
import store from './STORE/Store';


function App() {
  return (
    <div>
      <Provider store={store}>
      <BrowserRouter>

      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/table' element={<Table/>}/>
      </Routes>
      
      </BrowserRouter>
      </Provider>
     
    </div>
  );
}

export default App;
