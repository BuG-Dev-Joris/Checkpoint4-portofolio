import './App.css';
import {
  BrowserRouter as Router
} from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Main from './components/Main';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Main />
      <Footer />
    </Router>
  );
}

