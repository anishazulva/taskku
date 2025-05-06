import React, { useState } from 'react';
import { Typography, TextField, Button, List, ListItem, ListItemText, IconButton, Box } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const Dashboard = () => {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    if (input.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), text: input, done: false }]);
      setInput('');
    }
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(t => t.id === id ? { ...t, done: !t.done } : t));
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(t => t.id !== id));
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>To-Do List</Typography>
      <Box sx={{ display: 'flex', gap: 2, mb: 3 }}>
        <TextField
          fullWidth
          label="Tambahkan tugas"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <Button variant="contained" onClick={addTask}>Tambah</Button>
      </Box>
      <List>
        {tasks.map(task => (
          <ListItem
            key={task.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => deleteTask(task.id)}>
                <DeleteIcon />
              </IconButton>
            }
            button
            onClick={() => toggleTask(task.id)}
          >
            <ListItemText
              primary={task.text}
              style={{ textDecoration: task.done ? 'line-through' : 'none' }}
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default Dashboard;