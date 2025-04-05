import { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";

const Notification = () => {
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleUpdateNotification = () => {
    console.log("Notification Updated:", { title, message });
  };

  return (
    <Box
      sx={{
        height: "80vh", 
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        bgcolor: "#f4f4f4", 
      }}
    >
      <Box
        sx={{
          p: { xs: 2, sm: 4 },
          width: "90%",
          maxWidth: 400,
          display: "flex",
          flexDirection: "column",
          gap: 2,
          bgcolor: "white",
          borderRadius: 2,
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontSize: { xs: "1rem", sm: "1.2rem" },
            fontWeight: "bold",
            textAlign: "center",
            color: "#333",
          }}
        >
          Update Notification
        </Typography>

        {/* Title Input */}
        <TextField
          label="Notification Title"
          variant="outlined"
          fullWidth
          size="small"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{
            "& .MuiInputBase-input": { fontSize: "0.85rem" },
            "& .MuiInputLabel-root": { fontSize: "0.8rem" },
          }}
        />

        {/* Message Input */}
        <TextField
          label="Notification Message"
          variant="outlined"
          fullWidth
          multiline
          rows={3}
          size="small"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          sx={{
            "& .MuiInputBase-input": { fontSize: "0.85rem" },
            "& .MuiInputLabel-root": { fontSize: "0.8rem" },
          }}
        />

        {/* Update Button */}
        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{
            fontSize: "0.6rem",
            fontWeight: "bold",
            py: 1,
            bgcolor: "black",  
          color: "white",    
          "&:hover": {
            bgcolor: "#333", 
          },
          }}
          onClick={handleUpdateNotification}
        >
          Update Notification
        </Button>
      </Box>
    </Box>
  );
};

export default Notification;
