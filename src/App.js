import logo from './logo.svg';
import './App.css';
import Head1 from './components/header';
import Nav from './components/navigation';
import Section1 from './components/sections';
import { Cart } from './components/cart';

function App() {
  return (
    <div className="App">
      <Head1/>
      <Nav/>
      <Section1/>
      <Cart/>
    </div>
  );
}

export default App;
