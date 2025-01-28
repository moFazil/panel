import { useState } from 'react';
import { TextField, Button } from '@mui/material';

const Notification = () => {
  const [message, setMessage] = useState('');

  const handleUpdateNotification = () => {
    // Logic to handle the update, e.g., sending the message to an API or updating state
    console.log('Notification Updated:', message);
  };

  return (
    <div className='p-4 md:p-6'>
      <TextField
        label="Enter Notification Message"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button 
        variant="contained" 
        color="primary" 
        onClick={handleUpdateNotification}
        style={{ marginTop: '10px' }}
      >
        Update Notification
      </Button>
    </div>
  );
}

export default Notification;
