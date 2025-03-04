import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import AddIcon from "@mui/icons-material/Add";
import {
  Box,
  Button,
  IconButton,
  Modal,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useState } from "react";

const data = [
  { id: 1, name: "Item 1", category: "Category A", content: "Sample content 1" },
  { id: 2, name: "Item 2", category: "Category B", content: "Sample content 2" },
  { id: 3, name: "Item 3", category: "Category C", content: "Sample content 3" },
];

const RegisteredUsers = () => {
  const [open, setOpen] = useState(false);
  const [newData, setNewData] = useState({ title: "", date: "", content: "" });

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md")); // Targets xs, sm, and md breakpoints

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleChange = (e) => {
    setNewData({ ...newData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    console.log("New Data Submitted:", newData);
    handleClose();
  };
  const handleEdit = (id) => {
    console.log("Edit clicked for ID:", id);
  };
  const handleDelete = (id) => {
    console.log("Delete clicked for ID:", id);
  };

  return (
    <Box className="my-5 mx-3 md:my-10 md:mx-5">
      <Paper className="shadow-lg rounded-2xl overflow-hidden border border-gray-300">
        {/* Header Section */}
        <Box className="flex justify-between items-center p-4 bg-gray-700 text-white rounded-t-2xl">
          <Typography variant="h6" className="font-bold">Hadith List</Typography>
          <Button
            variant="contained"
            color="success"
            startIcon={<AddIcon />}
            onClick={handleOpen}
            className="bg-white text-blue-500 hover:bg-gray-200"
            size={isMobile ? "small" : "medium"}
          >
            Add
          </Button>
        </Box>

        {/* Table Section */}
        <TableContainer component={Paper}>
          <Table size={isMobile ? "small" : "medium"}>
            <TableHead>
              <TableRow>
              <TableCell sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" }, fontWeight: "bold" }}>
  Sl.no
</TableCell>
<TableCell sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" } }}>
  Name
</TableCell>
<TableCell sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" } }}>
  Category
</TableCell>
<TableCell sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" } }}>
  Content
</TableCell>
<TableCell sx={{ fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" } }}>
  Action
</TableCell>

              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row, index) => (
                <TableRow key={row.id}>
                  <TableCell>{index + 1}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.content}</TableCell>
                  <TableCell>
                    <IconButton onClick={() => handleEdit(row.id)} color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(row.id)} color="error">
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        {/* Modal Section */}
        <Modal open={open} onClose={handleClose}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: isMobile ? "90vw" : "80vw",
              maxWidth: "600px",
              maxHeight: "80vh",
              bgcolor: "white",
              p: 3,
              boxShadow: 24,
              borderRadius: 2,
              overflowY: "auto",
            }}
          >
            <Typography variant="h6" gutterBottom>
              Add New Hadith
            </Typography>

            <TextField fullWidth margin="normal" label="Narrated By" name="narratedby" value={newData.title} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Reference Book" name="referencebook" value={newData.title} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Category" name="category" value={newData.title} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Hadith in Arabic" name="content" multiline rows={3} value={newData.content} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Hadith in English" name="content" multiline rows={3} value={newData.content} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Hadith in Tamil" name="content" multiline rows={3} value={newData.content} onChange={handleChange} />
            <TextField fullWidth margin="normal" label="Hadith in Urdu" name="content" multiline rows={3} value={newData.content} onChange={handleChange} />

            {/* Buttons with Added Spacing */}
            <Box mt={3} mb={2} display="flex" justifyContent="flex-end">
              <Button onClick={handleClose} color="error" sx={{ mr: 2 }}>
                Cancel
              </Button>
              <Button onClick={handleSubmit} variant="contained" color="success">
                Submit
              </Button>
            </Box>
          </Box>
        </Modal>
      </Paper>
    </Box>
  );
};

export default RegisteredUsers;
