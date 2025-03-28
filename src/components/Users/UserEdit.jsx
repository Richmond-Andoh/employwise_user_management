
import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUsers, updateUser } from '../../services/api';
import { useAuth } from '../../context/AuthContext';
import {
  TextField,
  Button,
  Container,
  Typography,
  Box,
  CircularProgress,
} from '@mui/material';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { token } = useAuth();
  const [user, setUser] = useState({
    first_name: '',
    last_name: '',
    email: '',
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  useEffect(() => {
    if (!token) {
      navigate('/login');
      return;
    }

    const fetchUser = async () => {
      try {
        setLoading(true);
        const data = await getUsers(1); // Assuming user is on first page
        const foundUser = data.data.find((u) => u.id === parseInt(id));
        if (foundUser) {
          setUser({
            first_name: foundUser.first_name,
            last_name: foundUser.last_name,
            email: foundUser.email,
          });
        } else {
          setError('User not found');
        }
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUser();
  }, [id, token, navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      await updateUser(id, user);
      setSuccess('User updated successfully!');
      setTimeout(() => {
        navigate('/users');
      }, 1500);
    } catch (err) {
      setError(err.message);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Typography color="error" align="center" sx={{ mt: 4 }}>
        {error}
      </Typography>
    );
  }

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Typography component="h1" variant="h5">
          Edit User
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="first_name"
            label="First Name"
            name="first_name"
            value={user.first_name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="last_name"
            label="Last Name"
            name="last_name"
            value={user.last_name}
            onChange={handleChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            value={user.email}
            onChange={handleChange}
          />
          {error && (
            <Typography color="error" variant="body2">
              {error}
            </Typography>
          )}
          {success && (
            <Typography color="success.main" variant="body2">
              {success}
            </Typography>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Update User
          </Button>
          <Button
            fullWidth
            variant="outlined"
            onClick={() => navigate('/users')}
          >
            Cancel
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default EditUser;