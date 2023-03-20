import logo from './logo.svg';
import './App.css';
import Navbar from './Navbar';
import Items from './Items';
import Additem from './Additem';
import Cart from './Cart';
import Footer from './Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {persistStore, persistReducer} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import {PersistGate} from 'redux-persist/integration/react'
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer'
import {Provider} from 'react-redux'


function App() {

  const persistConfig = {
    key : 'root',
    storage
  }

  const persistedReducer = persistReducer(persistConfig, rootReducer)
  const store = createStore(persistedReducer)
  const persistor = persistStore(store)

  return (
    <div className="App">
          <Provider store={store}>
                  <PersistGate persistor={persistor}>
                            <Navbar />
                                        <BrowserRouter>
                                                            <Routes>
                                                                      <Route path='/' element={<Items />} />
                                                                      <Route path='/additem' element={<Additem />} />
                                                                      <Route path='/cart' element={<Cart />} />
                                                            </Routes>
                                        </BrowserRouter>
                                        <Footer/>
                  </PersistGate>
          </Provider>
    </div>
  );
}

export default App;
