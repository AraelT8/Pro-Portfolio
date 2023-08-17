import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Resume from './components/Resume';
import Projects from './components/Projects';
function App() {
  return (
   <div>
      <Navbar/>
      <About/>
      <Resume/>
      <Projects/>
      <Contact/>
      <Footer/>
  </div>
  );
}

export default App;
