
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Auth/Login';
import UserList from './components/Users/UserList';
import EditUser from './components/Users/UserEdit';
import Navbar from './components/Layout/Navbar';
import { Container } from '@mui/material';

function App() {
  return (
    <Router>
      <AuthProvider>
        <Navbar />
        <Container>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/users" element={<UserList />} />
            <Route path="/users/edit/:id" element={<EditUser />} />
            <Route path="/" element={<Login />} />
          </Routes>
        </Container>
      </AuthProvider>
    </Router>
  );
}

export default App;