import './App.css';
import { Header } from './component/Header';
import Body from './component/Body';
import { Footer } from './component/Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/AboutUs';
import WhatWeDo from './pages/WhatWeDo';
import Technologies from './pages/Technologies';
import TalkToUs from './pages/TalkToUs';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/what-we-do" element={<WhatWeDo />} />
            <Route path="/technologies" element={<Technologies />} />
            <Route path="/talk-to-us" element={<TalkToUs />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>

        <div className='bg-yellow'>
          <div className='reserved'>
            <span>© 2024-2025 Code Brew. All Rights Reserved.</span>
          </div>
        </div>  
      </div>
    </Router>
  );
}

export default App;
