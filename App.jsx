// import Button from './components/button/Button';
// import logo from './logo.svg';
import './App.css';
import Button from './component/Button';
import Img from './component/Img';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {
          <div>
            <Img p={'Facebook post website'} i={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfM_PSY23w3exP_CVzj4fwbSM1CsaG61zXkA&s'} />

          <div style={{display:'flex',justifyContent:'space-around'}}>

      
        <Button c={'black'} t={'likes'} />
        <Button c={'blue'} t={'shares'} />
        <Button c={'red'} t={'comments'} />
  
          </div>
        </div>
        }
      </header>
    </div>
  );
}

export default App;
/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */