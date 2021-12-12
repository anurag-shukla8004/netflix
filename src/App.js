import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SinInPage from './components/sinpage/sinIn';
import SinUpPage from './components/sinpage/sinup';
import HomePage from './components/homePage.js/homePage';
import MovieDetailsPage from './components/movieDetails.js/movieDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<HomePage />} />
          <Route exact path="/MovieDetails" element={<MovieDetailsPage />} />
          <Route exact path="/SinInPage" element={<SinInPage />} />
          <Route exact path="/SinUpPage" element={<SinUpPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;