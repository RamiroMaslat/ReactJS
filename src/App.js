import './App.css';
import NavBar from './components/NavBar/NavBar';
import Logo from "./components/Logo/Logo";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Pages/ItemListContainter/ItemListContainer';
import ItemDetailContainer from '../src/Pages/ItemDetailContainer/ItemDetailContainter';
import Footer from './components/Footer/Footer';
import CartProvider from './context/cartProvider';
import Cart from './Pages/Cart/Cart';


function App() {
  return (

    <BrowserRouter>
      <CartProvider>
        <div className="App">
          <header className="App-header">
            <section className='App-logo'>
              <Logo />
            </section>
            <nav className='App-navBar'>
              <NavBar />
            </nav>
          </header>

          <Routes>
            <Route path='/' element={<ItemListContainer />} />
            <Route path='/category/:category' element={<ItemListContainer />} />
            <Route path='item/:id' element={<ItemDetailContainer />} />
            <Route path='cart' element={<Cart />}/>
          </Routes>

          <footer>
            <Footer />
          </footer>
        </div>
      </CartProvider>

    </BrowserRouter>

  );
}

export default App;
