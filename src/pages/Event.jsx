import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Event = () => {
  const [products, setProducts] = useState([
    { id: 1, title: "Sahih al-Bukhari", date: "2/4/2025", content: "The best among you are those who have the best manners and character."},
    { id: 2, title: "Product 2", date: "2/4/2025", content: "Category 2" },
    { id: 3, title: "Product 3", date: "2/4/2025", content: "Category 3"},
    { id: 4, title: "Product 4", date: "2/4/2025", content: "Category 1"},
    { id: 5, title: "Product 5", date: "2/4/2025", content: "Category 2"},
    { id: 6, title: "Product 6", date: "2/4/2025", content: "Category 3"},
    { id: 7, title: "Product 7", date: "2/4/2025", content: "Category 1"},
    { id: 8, title: "Product 8", date: "2/4/2025", content: "Category 2"},
    { id: 9, title: "Product 9", date: "2/4/2025", content: "Category 3" },
    { id: 10, title: "Product 10", date: "2/4/2025", content: "Category 1" },
  ]);

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 4;

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const currentProducts = products.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    );

  const [modalOpen, setModalOpen] = useState(false);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [newProduct, setNewProduct] = useState({
    title: "",
    date: "",
    content: "",
  });
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleViewClick = (product) => {
    setSelectedProduct(product);
    setViewModalOpen(true);
  };

  const [editProduct, setEditProduct] = useState(null);
  const [deleteProductId, setDeleteProductId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditProduct({ ...editProduct, [name]: value });
  };


  const handleAddProduct = () => {
    if (!newProduct.title || !newProduct.date || !newProduct.content) {
      alert("Please fill all fields!");
      return;
    }

    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setModalOpen(false);
    setNewProduct({ title: "", date: "", content: ""});
  };

  const handleEditClick = (product) => {
    setEditProduct(product);
    setEditModalOpen(true);
  };

  const handleUpdateProduct = () => {
    setProducts(products.map((p) => (p.id === editProduct.id ? editProduct : p)));
    setEditModalOpen(false);
    setEditProduct(null);
  };

  const handleDeleteClick = (id) => {
    setDeleteProductId(id);
    setDeleteModalOpen(true);
  };

  const handleConfirmDelete = () => {
    setProducts(products.filter((product) => product.id !== deleteProductId));
    setDeleteModalOpen(false);
  };

  return (
    <>
      <div className="container mx-auto w-full   md:text-base tablewidth text-[14px] mt-1 p-5">
      <div className="bg-white  p-2 sm:p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="md:text-2xl text-[14px] font-semibold">Event List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-black cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95"
          >
            Add Event
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

        <div className="w-full overflow-x-auto">
  <table className="w-full border-collapse border border-gray-300 table-auto">
    <thead>
      <tr className="bg-gray-200 text-sm">
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap w-[50px]">#</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[150px]">Title</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[120px]">Date</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[180px]">Content</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[120px]">Actions</th>
      </tr>
    </thead>
    <tbody>
      {currentProducts.map((product) => (
        <tr key={product.id} className="hover:bg-gray-100 text-sm">
          <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{product.id}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[150px]">{product.title}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[120px]">{product.date}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[180px]">{product.content}</td>
          <td className="border border-gray-300 px-4 py-2 flex  space-x-2 ">
            <IconButton color="primary" onClick={() => handleViewClick(product)}>
              <VisibilityIcon />
            </IconButton>
            <IconButton color="primary" onClick={() => handleEditClick(product)}>
              <EditIcon />
            </IconButton>
            <IconButton color="error" onClick={() => handleDeleteClick(product.id)}>
              <DeleteIcon />
            </IconButton>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>

<div className="px-4 py-2 flex sm:hidden justify-center font-semibold">{`Page ${currentPage} of ${totalPages}`}</div>
<div className="flex mx-4 justify-center items-center mt-4">
  <button
    className={`px-4 py-2 mx-2 cursor-pointer rounded transition-all duration-300 ease-in-out transform 
      ${
        currentPage === 1
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-black text-white hover:scale-105 hover:bg-gray-900 active:scale-95"
      }`}
    onClick={() => setCurrentPage(currentPage - 1)}
    disabled={currentPage === 1}
  >
    Prev
  </button>
  <div className="px-4 py-2 hidden sm:block font-semibold">{`Page ${currentPage} of ${totalPages}`}</div>

  <button
    className={`px-4 py-2 mx-2 cursor-pointer rounded transition-all duration-300 ease-in-out transform 
      ${
        currentPage === totalPages
          ? "bg-gray-300 cursor-not-allowed"
          : "bg-black text-white hover:scale-105 hover:bg-gray-900 active:scale-95"
      }`}
    onClick={() => setCurrentPage(currentPage + 1)}
    disabled={currentPage === totalPages}
  >
    Next
  </button>
</div>
  
  {modalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 mt-16 bg-opacity-50">
            <div className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add New Entry</h2>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" placeholder="Title" value={newProduct.title} onChange={handleChange} className="border border-gray-400 rounded-md p-2 w-full mb-2" />
              <label htmlFor="date">Date</label>
              <input type="date" name="date" placeholder="Date" value={newProduct.date} onChange={handleChange} className="border border-gray-400 rounded-md p-2 w-full mb-2" />
              <label htmlFor="content">Content</label>
              <input type="text" name="content" placeholder="Content" value={newProduct.content} onChange={handleChange} className="border border-gray-400 rounded-md p-2 w-full mb-2" />
              <button 
                onClick={handleAddProduct} 
                className="bg-black cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95"
              >
                Add
              </button>
              <button 
                  onClick={() => setModalOpen(false)} 
                  className="ml-2 bg-gray-300 cursor-pointer text-black px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-400 active:scale-95"
                >
                  Cancel
              </button>
           </div>
          </div>
        )}

     {viewModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 p-4">
          <div className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Event Details</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {selectedProduct.id}</p>
              <p><strong>Title:</strong> {selectedProduct.title}</p>
              <p><strong>Date:</strong> {selectedProduct.date}</p>
              <p><strong>Content:</strong> {selectedProduct.content}</p>
            </div>
            <div className="flex justify-end mt-4">
            <button 
              onClick={() => setViewModalOpen(false)} 
              className="bg-black text-white cursor-pointer px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95"
            >
              Close
            </button>
            </div>
          </div>
        </div>
      )}

        
        {editModalOpen && editProduct && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 mt-16 bg-opacity-50">
            <div className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Edit Event</h2>
              <label htmlFor="title">Title</label>
              <input type="text" name="title" value={editProduct.title} onChange={handleEditChange} className="border border-gray-400 rounded-md p-2 w-full mb-2" />
              <label htmlFor="date">Date</label>
              <input type="date" name="price" value={editProduct.date} onChange={handleEditChange} className="border border-gray-400 rounded-md p-2 w-full mb-2" />
              <label htmlFor="content">Content</label>
              <input type="text" name="content" value={editProduct.content} onChange={handleEditChange} className="border border-gray-400 rounded-md p-2 w-full mb-2" />
              <button 
                  onClick={handleUpdateProduct} 
                  className="bg-black cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95"
                >
                  Update
              </button>
              <button 
                onClick={() => setEditModalOpen(false)} 
                className="ml-2 bg-gray-300 cursor-pointer text-black px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-400 active:scale-95"
              >
                Cancel
              </button>
            </div>
          </div>
        )}
       
        {deleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 mt-16 bg-opacity-50">
            <div className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
              <p className="mb-4">Do you really want to delete this Event?</p>
              <button 
                onClick={handleConfirmDelete} 
                className="bg-red-600 cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-red-700 active:scale-95"
              >
                Yes
              </button>
              <button 
                onClick={() => setDeleteModalOpen(false)} 
                className="ml-2 bg-black cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95"
              >
                No
              </button>
           </div>
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default Event;