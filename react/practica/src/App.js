//Impports
import logo from './logo.svg';
import './App.css';
import Component from './Component';
import Component2 from './Component2';
import Component3 from './Component3';
//Funciones
function App() {
  return (
    <div className="App">
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          {/*Este es mi primer componente*/}
          <div className="Componentes">
            <Component/>
            <hr/>
            <Component2/>
            <hr/>
            <Component3 nombre="Victor" edad="21"/>
          </div>
      </header>
    </div>
  );
}

//Exports
export default App;
