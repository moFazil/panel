import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button, Box, TextField, Modal } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useState } from "react";
import { useMediaQuery } from "@mui/material";

const data = [
  { id: 1, title: "First Post", date: "2025-03-03", content: "This is the first post. It contains a lot of text to demonstrate how it will look in the table when the content is large." },
  { id: 2, title: "Second Post", date: "2025-03-02", content: "This is the second post with even more content. We need to make sure that the table cells expand as needed." },
  { id: 3, title: "Third Post", date: "2025-03-01", content: "This is the third post. Another example of a long content section that should wrap properly in the table layout." }
];

const Event = () => {
  const [open, setOpen] = useState(false);
  const [newData, setNewData] = useState({ title: "", date: "", content: "" });
  const isMobile = useMediaQuery("(max-width:600px)");

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("New Data Submitted:", newData);
    handleClose();
  };

  return (
    <Box className="my-5 mx-3 md:my-10 md:mx-5">
      <Paper className="shadow-lg rounded-2xl overflow-hidden border border-gray-300">
        <Box className="flex justify-between items-center p-4 bg-gray-700 text-white rounded-t-xl">
          <Typography variant="h6"><b>Data Table</b></Typography>
          <Button variant="contained" color="success" startIcon={<AddIcon />} onClick={handleOpen}>
            Add
          </Button>
        </Box>
        <TableContainer>
          <Table size={isMobile ? "small" : "medium"}>
            <TableHead>
              <TableRow>
                <TableCell><b>Title</b></TableCell>
                <TableCell><b>Date</b></TableCell>
                <TableCell><b>Content</b></TableCell>
                <TableCell><b>Action</b></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.title}</TableCell>
                  <TableCell>{row.date}</TableCell>
                  <TableCell sx={{ whiteSpace: "normal", wordBreak: "break-word" }}>{row.content}</TableCell>
                  <TableCell>
                    <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <Modal open={open} onClose={handleClose}>
          <Box sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: isMobile ? "90%" : 500,
            maxHeight: "80vh",
            bgcolor: "white",
            p: 3,
            boxShadow: 24,
            borderRadius: 2,
            overflow: "auto"
          }}>
            <Typography variant="h6" gutterBottom>Add New Entry</Typography>
            <TextField fullWidth margin="normal" label="Title" name="title" value={newData.title} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Date" type="date" name="date" value={newData.date} onChange={handleChange} InputLabelProps={{ shrink: true }} />
            <TextField fullWidth margin="normal" label="Content" name="content" multiline rows={4} value={newData.content} onChange={handleChange} />
            <Box mt={2} display="flex" justifyContent="flex-end">
              <Button onClick={handleClose} color="error" sx={{ mr: 2 }}>Cancel</Button>
              <Button onClick={handleSubmit} variant="contained" color="success">Submit</Button>
            </Box>
          </Box>
        </Modal>
      </Paper>
    </Box>
  );
};

export default Event;