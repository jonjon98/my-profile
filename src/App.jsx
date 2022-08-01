import Landing from './pages/landing/Landing.jsx'
import About from './pages/about/About.jsx'
import Projects from './pages/projects/Projects.jsx'
import Experience from './pages/experience/Experience.jsx'
import Contact from './pages/contact/Contact.jsx'
import Thankyou from './pages/thankyou/Thankyou.jsx'
import NotFound from './pages/notFound/NotFound.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
          <Routes>
              <Route path='/' element={<Landing />} />
              <Route path='/About' element={<About />} />
              <Route path='/Experience' element={<Experience />} />
              <Route path='/Projects' element={<Projects />} />
              <Route path='/Contact' element={<Contact />} />
              <Route path='/Thankyou' element={<Thankyou />} />
              <Route path='*' element={<NotFound />} />
          </Routes>
      </Router>
    </>
  );
}

export default App;
