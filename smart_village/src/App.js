import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Footer from './components/Footer';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Hero/>
            <About/>
            <Footer/>
        </div>
    );
}

export default App;
