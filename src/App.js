import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { CardComponent } from './components/CardComponent/card';
import { saludarEnConsola } from './utils/funciones';
import { HomeContainer } from './containers/HomeContainer/homeContainer';
import { greeting } from './utils/funciones';

function App() {
  return (
    <div className="App">
      <p>{greeting('Hellou hellou hellou!!')}</p>
      <HomeContainer/>      
      <button className='btn btn-primary btn-lg'>Boostrap</button>

      {/*colocar los parentesis de esta forma para que se ejecute al pinchar en el boton agregar el nombre*/}
      <button onClick = {() => {saludarEnConsola('Pauli')}}>Agregar</button>
      <CardComponent/>
      <CardComponent/>
      <CardComponent/>
    </div>
  );
}

export default App;
