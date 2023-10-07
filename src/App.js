
import './App.css';
import Navbar from './components/navbar';
import RoutePath from './routes/routes';
import Footer from './components/footer';

function App() {
  return (
    <>
      <div className="bg-yellow">
        <Navbar />
        <RoutePath />
        <Footer />
      </div>
    
    </>
  );
}

export default App;
