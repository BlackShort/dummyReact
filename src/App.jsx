import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './app/home/Home';
import { About } from './app/about/About';
import { Contact } from './app/contact/Contact';
import { Help } from './app/help/Help';
import { Courses } from './app/courses/Courses';

const App = () => {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <div className='mainsection'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/courses" element={<Courses />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App