import { useState, useEffect } from 'react';
import './App.css';
import Navbar from '../navbar/navbar';
import Contact from '../contact/contact'
import Projects from '../projects/projects'
import About from '../about/about';
import Footer from '../footer/footer';
import Loader from '../loader/loader';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <div className={`App ${loading ? 'hidden' : 'slide-in'}`}>
      {loading ? <Loader /> : (
        <>
          <Navbar className="slide-in" />
          <About className="slide-in" />
          <Projects className="slide-in" />
          <Footer className="slide-in" />
        </>
      )}
    </div>
  );
}


export default App;
