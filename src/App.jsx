import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ChefProfile from './pages/ChefProfile';
import BookChef from './pages/BookChef';
import MainLayout from './layouts/MainLayout';
import ChefOnboarding from './pages/ChefOnboarding';
import './App.css';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Profile from './pages/Profile';
import Favorites from './pages/Favorites';

const App = () => {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/chef/:id" element={<ChefProfile />} />
          <Route path="/book/:id" element={<BookChef />} />
          <Route path="/chef-onboarding" element={<ChefOnboarding />} />
          <Route path="/book/:id" element={<BookChef />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/favorites" element={<Favorites />} />
          
        </Routes> 
      </MainLayout>
    </Router>
  );
};

export default App;
