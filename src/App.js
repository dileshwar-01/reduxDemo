
import './App.css';
import Navbar from './components/Navbar';
import Shop from './components/Shop';

function App() {
  return (
    <>
    <div className="App">
      <Navbar/>
      <div className="container my-4">
         <Shop/>
      </div>
    
    </div>
    </>
  );
}

export default App;
