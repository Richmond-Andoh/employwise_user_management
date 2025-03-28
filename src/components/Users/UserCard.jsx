import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { Edit, Delete } from '@mui/icons-material';

const UserCard = ({ user, onEdit, onDelete }) => {
  return (
    <Card sx={{ mb: 2, display: 'flex', alignItems: 'center' }}>
      <CardMedia
        component="img"
        sx={{ width: 80, height: 80, borderRadius: '50%', m: 2 }}
        image={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
      />
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h6">
          {user.first_name} {user.last_name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {user.email}
        </Typography>
      </CardContent>
      <Box sx={{ mr: 2 }}>
        <Button
          startIcon={<Edit />}
          onClick={() => onEdit(user.id)}
          sx={{ mr: 1 }}
        >
          Edit
        </Button>
        <Button
          startIcon={<Delete />}
          onClick={() => onDelete(user.id)}
          color="error"
        >
          Delete
        </Button>
      </Box>
    </Card>
  );
};

export default UserCard;