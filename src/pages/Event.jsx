import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button, Box, TextField, Modal } from "@mui/material";


// import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton, Typography, Button, Box, TextField, Modal } from "@mui/material";
// import EditIcon from "@mui/icons-material/Edit";
// import DeleteIcon from "@mui/icons-material/Delete";
// import AddIcon from "@mui/icons-material/Add";
// import { useState } from "react";
// import { useMediaQuery } from "@mui/material";

// const data = [
//   { id: 1, title: "First Post", date: "2025-03-03", content: "This is the first post. It contains a lot of text to demonstrate how it will look in the table when the content is large." },
//   { id: 2, title: "Second Post", date: "2025-03-02", content: "This is the second post with even more content. We need to make sure that the table cells expand as needed." },
//   { id: 3, title: "Third Post", date: "2025-03-01", content: "This is the third post. Another example of a long content section that should wrap properly in the table layout." }
// ];

const Event = () => {
  // const [open, setOpen] = useState(false);
  // const [newData, setNewData] = useState({ title: "", date: "", content: "" });
  // const isMobile = useMediaQuery("(max-width:600px)");

  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  // const handleChange = (e) => {
  //   setNewData({ ...newData, [e.target.name]: e.target.value });
  // };
  // const handleSubmit = () => {
  //   console.log("New Data Submitted:", newData);
  //   handleClose();
  // };

  const [products, setProducts] = useState([
    { id: 1, name: "Product 1", price: "$101", category: "Category 1", stock: 5 },
    { id: 2, name: "Product 2", price: "$102", category: "Category 2", stock: 10 },
    { id: 3, name: "Product 3", price: "$103", category: "Category 3", stock: 15 },
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    category: "",
    stock: "",
  });

  const [editProduct, setEditProduct] = useState(null);

  // Handle input change for both add and edit forms
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };

  // Add Product
  const handleAddProduct = () => {
    if (!newProduct.name || !newProduct.price || !newProduct.category || !newProduct.stock) {
      alert("Please fill all fields!");
      return;
    }

    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setModalOpen(false);
    setNewProduct({ name: "", price: "", category: "", stock: "" });
  };

  // Open Edit Modal
  const handleEditClick = (product) => {
    setEditProduct(product);
    setEditModalOpen(true);
  };

  // Update Product
  const handleUpdateProduct = () => {
    setProducts(products.map((p) => (p.id === editProduct.id ? editProduct : p)));
    setEditModalOpen(false);
    setEditProduct(null);
  };

  // Delete Product
  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((product) => product.id !== id));
    }
  };

  return (
    // <Box className="my-5 mx-3 md:my-10 md:mx-5">
    //   <Paper className="shadow-lg rounded-2xl overflow-hidden border border-gray-300">
    //     <Box className="flex justify-between items-center p-4 bg-gray-700 text-white rounded-t-xl">
    //       <Typography variant="h6"><b>Data Table</b></Typography>
    //       <Button variant="contained" color="success" startIcon={<AddIcon />} onClick={handleOpen}>
    //         Add
    //       </Button>
    //     </Box>
    //     <TableContainer>
    //       <Table size={isMobile ? "small" : "medium"}>
    //         <TableHead>
    //           <TableRow>
    //             <TableCell><b>Title</b></TableCell>
    //             <TableCell><b>Date</b></TableCell>
    //             <TableCell><b>Content</b></TableCell>
    //             <TableCell><b>Action</b></TableCell>
    //           </TableRow>
    //         </TableHead>
    //         <TableBody>
    //           {data.map((row) => (
    //             <TableRow key={row.id}>
    //               <TableCell>{row.title}</TableCell>
    //               <TableCell>{row.date}</TableCell>
    //               <TableCell sx={{ whiteSpace: "normal", wordBreak: "break-word" }}>{row.content}</TableCell>
    //               <TableCell>
    //                 <IconButton color="primary">
    //                   <EditIcon />
    //                 </IconButton>
    //                 <IconButton color="error">
    //                   <DeleteIcon />
    //                 </IconButton>
    //               </TableCell>
    //             </TableRow>
    //           ))}
    //         </TableBody>
    //       </Table>
    //     </TableContainer>
    //     <Modal open={open} onClose={handleClose}>
    //       <Box sx={{
    //         position: "absolute",
    //         top: "50%",
    //         left: "50%",
    //         transform: "translate(-50%, -50%)",
    //         width: isMobile ? "90%" : 500,
    //         maxHeight: "80vh",
    //         bgcolor: "white",
    //         p: 3,
    //         boxShadow: 24,
    //         borderRadius: 2,
    //         overflow: "auto"
    //       }}>
    //         <Typography variant="h6" gutterBottom>Add New Entry</Typography>
    //         <TextField fullWidth margin="normal" label="Title" name="title" value={newData.title} onChange={handleChange} />
    //         <TextField fullWidth margin="normal" label="Date" type="date" name="date" value={newData.date} onChange={handleChange} InputLabelProps={{ shrink: true }} />
    //         <TextField fullWidth margin="normal" label="Content" name="content" multiline rows={4} value={newData.content} onChange={handleChange} />
    //         <Box mt={2} display="flex" justifyContent="flex-end">
    //           <Button onClick={handleClose} color="error" sx={{ mr: 2 }}>Cancel</Button>
    //           <Button onClick={handleSubmit} variant="contained" color="success">Submit</Button>
    //         </Box>
    //       </Box>
    //     </Modal>
    //   </Paper>
    // </Box>
    <>
      <div className="container mx-auto mt-8">
      <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold">Products</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Add Product
          </button>
        </div>

        <div className="flex items-center space-x-2 mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded w-full"
          />
          <button className="bg-gray-300 p-2 rounded">🔍</button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr className="bg-gray-200">
                <th className="border border-gray-300 px-4 py-2">#</th>
                <th className="border border-gray-300 px-4 py-2">Name</th>
                <th className="border border-gray-300 px-4 py-2">Price</th>
                <th className="border border-gray-300 px-4 py-2">Category</th>
                <th className="border border-gray-300 px-4 py-2">Stock</th>
                <th className="border border-gray-300 px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product) => (
                <tr key={product.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 px-4 py-2">{product.id}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.name}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.price}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.category}</td>
                  <td className="border border-gray-300 px-4 py-2">{product.stock}</td>
                  <td className="border border-gray-300 px-4 py-2 space-x-2">
                  <IconButton color="primary">
                      <EditIcon />
                    </IconButton>
                    <IconButton color="error">
                       <DeleteIcon />
                    </IconButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Add Product Modal */}
        {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 mt-16 bg-opacity-50">
            <div className="bg-white p-6 w-3xl ml-44 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add Product</h2>
              <input type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} className="border p-2 w-full mb-2" />
              <input type="text" name="price" placeholder="Price" value={newProduct.price} onChange={handleChange} className="border p-2 w-full mb-2" />
              <input type="text" name="category" placeholder="Category" value={newProduct.category} onChange={handleChange} className="border p-2 w-full mb-2" />
              <input type="number" name="stock" placeholder="Stock" value={newProduct.stock} onChange={handleChange} className="border p-2 w-full mb-2" />
              <button onClick={handleAddProduct} className="bg-blue-500 text-white px-4 py-2 rounded">Add</button>
              <button onClick={() => setModalOpen(false)} className="ml-2 bg-gray-300 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        )}

        {/* Edit Product Modal */}
        {editModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 mt-16 bg-opacity-50">
            <div className="bg-white p-6 w-3xl ml-44 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Edit Product</h2>
              <input type="text" name="name" value={editProduct.name} onChange={handleEditChange} className="border p-2 w-full mb-2" />
              <input type="text" name="price" value={editProduct.price} onChange={handleEditChange} className="border p-2 w-full mb-2" />
              <input type="text" name="category" value={editProduct.category} onChange={handleEditChange} className="border p-2 w-full mb-2" />
              <input type="number" name="stock" value={editProduct.stock} onChange={handleEditChange} className="border p-2 w-full mb-2" />
              <button onClick={handleUpdateProduct} className="bg-green-500 text-white px-4 py-2 rounded">Update</button>
              <button onClick={() => setEditModalOpen(false)} className="ml-2 bg-gray-300 px-4 py-2 rounded">Cancel</button>
            </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Event;