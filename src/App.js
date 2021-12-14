import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from 'react-router-dom';
import SinInPage from './components/sinpage/sinIn';
import SinUpPage from './components/sinpage/sinup';
import HomePage from './components/homePage.js/homePage';
import MovieDetailsPage from './components/movieDetails.js/movieDetails';
import { Provider } from 'react-redux';
import { store } from './store';

function App() {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
