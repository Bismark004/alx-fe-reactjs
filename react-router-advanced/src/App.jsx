import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './components/BlogPost';
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
            <Route path="/blog/:id" element={<BlogPost />} />
        </Routes>
      </Router>
    );
  }
  
  export default App;
