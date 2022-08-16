import './App.css';
import { Routes, Route, Link } from "react-router-dom";
import store from './Redux';
import {Provider} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './Page/Login/Login.js';
import Register from './Page/Register/Register.js';
import AdSubmission from './Page/AdSubmission/AdSubmission';
import Favourite from './Page/Favourite/Favourite.js'; 
import SparePartCategory from './Page/SparePartCategory/SparePartCategory.js'; 
import TireDisk from './Page/TireDisk/TireDisk.js';
import CarForScrab from './Page/CarForScrab/CarForScrab.js';
import MyAds from './Page/MyAds/MyAds.js';
import Home from './Page/Home/Home.js';  
import Settings from './Page/Settings/Settings.js'; 
import ProductDetails from './Page/Settings/ProductDetails.js';  
import ChatPage from './Components/ChatPage/ChatPage.js';

function App() {

  return (
    <div className="App">
      <Provider store={store}>
        <Routes >
          <Route path='/' element={<Login />} />
          <Route path='Register' element={<Register />} />
          <Route path='Home' element={<Home />} />
          <Route path='AdSubmission' element={<AdSubmission />} />
          <Route path='TireDisk' element={<TireDisk />} />
          <Route path='SparePartCategory' element={<SparePartCategory />} />
          <Route path='CarForScrab' element={<CarForScrab />} />
          <Route path='MyAds' element={<MyAds />} />
          <Route path='ProductDetails' element={<ProductDetails />} />
          <Route path='ChatPage' element={<ChatPage />} />

          <Route path='Favourite' element={<Favourite />} />
          <Route path='Settings' element={<Settings />} />
        </Routes>
    </Provider>
    </div>
  );
}

export default App;
