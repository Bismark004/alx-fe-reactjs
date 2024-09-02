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
<<<<<<< HEAD

=======
            <Route path="/blog/:id" element={<BlogPost />} />
>>>>>>> be83553f4aeb9cf658e486019f04a5fd58d4c438
        </Routes>
      </Router>
    );
  }
  
  export default App;
