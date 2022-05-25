import './App.css';
import Landing from './components/landing/Landing.jsx'
import Header from './components/header/Header.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/Header' element={<Header />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
