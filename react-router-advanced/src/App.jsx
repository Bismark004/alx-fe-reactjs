import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import {useState} from 'react';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
  
    return (
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/profile/*"
            element={<ProtectedRoute isAuthenticated={isLoggedIn} element={<Profile />} />}
          />
        </Routes>
      </Router>
    );
  }
  
  export default App;