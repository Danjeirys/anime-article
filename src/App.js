import Header from './components/Header/header';
import './App.css';
import Body from './components/Body/body';
import Footer from './components/Footer/footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <Body></Body>
      <footer className='footer'>
        <Footer></Footer>
        </footer>
      
    </div>
  );
}

export default App;
