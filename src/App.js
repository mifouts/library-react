import Nav from './components/Nav';
import Footer from './components/Footer';
import { BrowserRouter as Router, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
      <Route />
  <Nav />
  
  <Footer />
    </div>
    </Router>
  );
}




export default App;
