import './App.css';
import BestDesigns from './components/BestDesigns/BestDesigns';
import CreateProduct from './components/CreateProduct/CreateProduct';
import Header from './components/Header/Header';
import StateProduct from './components/StateProductList/StateProductList';

function App() {
  return (
    <div className='wrapper'>
    <Header/>
    <StateProduct/>
    <CreateProduct/>
    <BestDesigns/>
    </div>
  );
}

export default App;
