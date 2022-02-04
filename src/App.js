import './App.css';
import ItemListContainer from './componentes/ItemListContainer';
import NavBar from './componentes/NavBar';
import ImagenPortada from './media/PortadaApp.jpeg';

function App() {
  return (
    <>
      <NavBar/>
      <ItemListContainer imagen={ImagenPortada}/>
    </>
  );
}

export default App;
