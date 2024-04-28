import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Body';

function App() {
  return (
    <div className="App">
      <div className='innerNav'>
        <Navbar />
      </div>
      <div className='innerMain'>
        <Home />
      </div>
    </div>
  );
}

export default App;