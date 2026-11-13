import './App.css';
import Testimonio from './componentes/Testimonio'

function App() {
  return (
    <div className="App">
      <div className="contenedor-principal">
        <h1>Selecciona la cancha que quieres jugar.</h1>
        <Testimonio
          imagen='bernabeu'
          nombre="Cancha Santiago bernabeu."
          precio="$ 150.000"
          cargo="Cancha para 11 vs 11."
          texto="Consectetur proident sit amet sint reprehenderit nostrud non. Dolore consequat exercitation laborum exercitation aliqua velit veniam sint elit dolor cupidatat laborum. Laboris qui ad esse ipsum commodo commodo dolor aliqua veniam do fugiat fugiat enim. Dolor consequat ex consequat qui culpa. "
        />
        <Testimonio
          imagen='camp nou'
          nombre="Camp Nou"
          precio=" $ 120.000"
          cargo="Cancha para 10 vs 10."
          texto="Consectetur proident sit amet sint reprehenderit nostrud non. Dolore consequat exercitation laborum exercitation aliqua velit veniam sint elit dolor cupidatat laborum. Laboris qui ad esse ipsum commodo commodo dolor aliqua veniam do fugiat fugiat enim. Dolor consequat ex consequat qui culpa. "
        />
        <Testimonio
          imagen='metropolitano'
          nombre="Metropolitano de Barranquilla"
          precio=" $ 100.000"
          cargo="Cancha para 09 vs 09."
          texto="Consectetur proident sit amet sint reprehenderit nostrud non. Dolore consequat exercitation laborum exercitation aliqua velit veniam sint elit dolor cupidatat laborum. Laboris qui ad esse ipsum commodo commodo dolor aliqua veniam do fugiat fugiat enim. Dolor consequat ex consequat qui culpa. "
        />
      </div>
    </div>
  );
}

export default App;
