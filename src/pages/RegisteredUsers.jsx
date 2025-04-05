import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Event = () => {
  const [products, setProducts] = useState([
    { id: 1, headOfFamily: "Abdullah", date: "2/4/2025", members: "5",address: "chennai",phone: "8098548711",
      email: "abdullah@gmail.com",eligibleForZakat: "yes",needAssistance: "",willingToVolunteer: "yes",otherDetails: "just an update"
     },
    { id: 2, headOfFamily: "abubakkar", date: "2/4/2025", members: "4",address: "chennai",phone: "8098548712",
      email: "abubakkar@gmail.com",eligibleForZakat: "yes",needAssistance: "",willingToVolunteer: "yes",otherDetails: "just for testing"
     },
    { id: 3, headOfFamily: "Afridi", date: "2/4/2025", members: "3",address: "chennai",phone: "8098548713",
      email: "afridi@gmail.com",eligibleForZakat: "yes",needAssistance: "",willingToVolunteer: "yes",otherDetails: "justing change"
     },
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
    headOfFamily: '',
    members: '',
    address: '',
    date:"",
    phone: '',
    email: '',
    eligibleForZakat: '',
    needAssistance: '',
    willingToVolunteer: '',
    otherDetails: '',
  });
  const [viewModalOpen, setViewModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  

  const [errors, setErrors] = useState({
    nameError: '',
    membersError: '',
    addressError: '',
    phoneError: '',
    emailError: '',
  });

  const validateForm = () => {
    const newErrors = {};

    if (!newProduct.headOfFamily.trim()) newProduct.nameError = 'Field is required';
    if (!newProduct.members || isNaN(newProduct.members) || newProduct.members <= 0)
      newErrors.membersError = 'Field is required';
    if (!newProduct.address.trim()) newErrors.addressError = 'Field is required';
    if (!/^[0-9]{10}$/.test(newProduct.phone)) newErrors.phoneError = 'Enter a valid phone number';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newProduct.email))
      newErrors.emailError = 'Please enter a valid email';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

 

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
    setEditProduct((prevEditProduct) => ({
      ...prevEditProduct,
      [name]: value,
    }));
  };


  const handleAddProduct = () => {
    if (!newProduct.headOfFamily || !newProduct.members || !newProduct.address || !newProduct.phone
      || !newProduct.email || !newProduct.eligibleForZakat || !newProduct.needAssistance || !newProduct.willingToVolunteer
      || !newProduct.otherDetails 
    ) {
      return;
    }

    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setModalOpen(false);
    setNewProduct({ headOfFamily: "", members: "", address: "", phone: "", email: "", eligibleForZakat: ""
      , needAssistance: "", willingToVolunteer: "", otherDetails: ""
     });
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
      <div className="container mx-auto md:w-full  md:text-base tablewidth text-[14px] mt-1 p-5">
      <div className="bg-white  p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="md:text-2xl text-[14px] font-semibold">Registration List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-black cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95"
          >
            Add
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
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap w-[50px]">Sl.</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[150px]">Head of the Family Name</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[120px]">Date</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[180px]">Email</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[180px]">Phone Number</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[120px]">Actions</th>
      </tr>
    </thead>
    <tbody> 
      {currentProducts.map((product) => (
        <tr key={product.id} className="hover:bg-gray-100 text-sm">
          <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{product.id}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[150px]">{product.headOfFamily}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[120px]">{product.date}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[180px]">{product.email}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[180px]">{product.phone}</td>
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
            <form className="bg-white p-6 w-full max-w-3xl sm:ml-44 ml-10 mx-6 rounded-lg shadow-lg max-h-[80vh] overflow-x-hidden overflow-y-auto">
            <h2 className="text-xl font-semibold mb-4">Add</h2>
          <div className="mb-4">
            <label htmlFor="headOfFamily" className="block text-black  mb-2">
              Head of the Family Name:
            </label>
            <input
              type="text"
              id="headOfFamily"
              name="headOfFamily"
              value={newProduct.headOfFamily}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.nameError && <span className="text-red-500 text-sm">{errors.nameError}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="members" className="block text-black  mb-2">
              How many Members are there in your Family:
            </label>
            <input
              type="number"
              name="members"
              value={newProduct.members}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.membersError && <span className="text-red-500 text-sm">{errors.membersError}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="address" className="block text-black  mb-2">
              Address:
            </label>
            <input
              type="text"
              name="address"
              value={newProduct.address}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.addressError && <span className="text-red-500 text-sm">{errors.addressError}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="phone" className="block text-black  mb-2">
              Phone Number:
            </label>
            <input
              type="text"
              name="phone"
              value={newProduct.phone}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            {errors.phoneError && <span className="text-red-500 text-sm">{errors.phoneError}</span>}
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-black  mb-2">
              Email:
            </label>
              <input
                type="email"
                name="email"
                value={newProduct.email}
                onChange={handleChange}
                className="w-full p-3  border border-gray-300 rounded-md"
                placeholder="Enter your email"
              />
            {errors.emailError && <span className="text-red-500 text-sm">{errors.emailError}</span>}
          </div>

          <div className="mb-4">
          <label className="block  mb-2">Eligible to give Zakat (Yes or No):</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="eligibleForZakat"
                name="eligibleForZakat"
                value="Yes"
                checked={newProduct.eligibleForZakat === "Yes"}
                onChange={handleChange}
                className="form-radio w-4 h-4"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="eligibleForZakat"
                name="eligibleForZakat"
                value="No"
                checked={newProduct.eligibleForZakat === "No"}
                onChange={handleChange}
                className="form-radio w-4 h-4"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Need Assistance Required:</label>
            <div className="relative">
              <select
                id="needAssistance"
                name="needAssistance"
                value={newProduct.needAssistance}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-md"
              >
                <option value="" disabled selected>
                  Select Assistance Type
                </option>
                <option id="needAssistance" name="needAssistance" value="financial">Financial</option>
                <option id="needAssistance" name="needAssistance" value="educational">Educational</option>
                <option id="needAssistance" name="needAssistance" value="medical">Medical</option>
                <option id="needAssistance" name="needAssistance" value="housing">Housing</option>
              </select>
            </div>
          </div>

          <div className="mb-4">
            <label className="block text-black mb-2">Are you willing to volunteer for mosque causes ( Yes or No ) :</label>
            <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="willingToVolunteer"
                name="willingToVolunteer"
                value="Yes"
                checked={newProduct.willingToVolunteer === "Yes"}
                onChange={handleChange}
                className="form-radio w-4 h-4"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="willingToVolunteer"
                name="willingToVolunteer"
                value="No"
                checked={newProduct.willingToVolunteer === "No"}
                onChange={handleChange}
                className="form-radio w-4 h-4"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
          </div>

          <div className="mb-4">
            <label htmlFor="otherDetails" className="block text-black  mb-2">
              Other details
            </label>
            <textarea
              name="otherDetails"
              value={newProduct.otherDetails}
              onChange={handleChange}
              rows="4"
              className="w-full p-3 border border-gray-300 rounded-md"
            ></textarea>
          </div>

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
            </form>
          </div>
        )}

     {viewModalOpen && selectedProduct && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-500 bg-opacity-50 p-4">
          <div className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 max-h-[60vh] overflow-y-auto rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Registration Details</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {selectedProduct.id}</p>
              <p><strong>Head of the Family Name:</strong> {selectedProduct.headOfFamily}</p>
              <p><strong>How many Members are there in your Family:</strong> {selectedProduct.members}</p>
              <p><strong>Address:</strong> {selectedProduct.address}</p>
              <p><strong>Date:</strong> {selectedProduct.date}</p>
              <p><strong>Phone Number:</strong> {selectedProduct.phone}</p>
              <p><strong>Email:</strong> {selectedProduct.email}</p>
              <p><strong>Eligible to give Zakat :</strong> {selectedProduct.eligibleForZakat}</p>
              <p><strong>Need Assistance Required:</strong> {selectedProduct.needAssistance}</p>
              <p><strong>Are you willing to volunteer for mosque causes :</strong> {selectedProduct.willingToVolunteer}</p>
              <p><strong>Other details :</strong> {selectedProduct.otherDetails}</p>
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
          <form className="bg-white p-6 w-full max-w-3xl sm:ml-44 ml-10 mx-6 rounded-lg shadow-lg max-h-[80vh] overflow-x-hidden overflow-y-auto">
          <h2 className="text-xl font-semibold mb-4">Edit Registraion</h2>
        <div className="mb-4">
          <label htmlFor="headOfFamily" className="block text-black  mb-2">
            Head of the Family Name:
          </label>
          <input
            type="text"
            id="headOfFamily"
            name="headOfFamily"
            value={editProduct.headOfFamily}
            onChange={handleEditChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.nameError && <span className="text-red-500 text-sm">{errors.nameError}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="members" className="block text-black  mb-2">
            How many Members are there in your Family:
          </label>
          <input
            type="number"
            id="members"
            name="members"
            value={editProduct.members}
            onChange={handleEditChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.membersError && <span className="text-red-500 text-sm">{errors.membersError}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-black  mb-2">
            Address:
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={editProduct.address}
            onChange={handleEditChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.addressError && <span className="text-red-500 text-sm">{errors.addressError}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="address" className="block text-black  mb-2">
            Date:
          </label>
          <input
            type="date"
            id="address"
            name="address"
            value={editProduct.date}
            onChange={handleEditChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.addressError && <span className="text-red-500 text-sm">{errors.addressError}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-black  mb-2">
            Phone Number:
          </label>
          <input
            type="text"
            id="phone"
            name="phone"
            value={editProduct.phone}
            onChange={handleEditChange}
            className="w-full p-3 border border-gray-300 rounded-md"
          />
          {errors.phoneError && <span className="text-red-500 text-sm">{errors.phoneError}</span>}
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-black  mb-2">
            Email:
          </label>
            <input
              type="email"
              id="email"
              name="email"
              value={editProduct.email}
              onChange={handleEditChange}
              className="w-full p-3  border border-gray-300 rounded-md"
              placeholder="Enter your email"
            />
          {errors.emailError && <span className="text-red-500 text-sm">{errors.emailError}</span>}
        </div>

        <div className="mb-4">
          <label className="block text-black  mb-2">Eligible to give Zakat ( Yes or No ) :</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="eligibleForZakat"
                name="eligibleForZakat"
                value={editProduct?.eligibleForZakat === "Yes"}
                onChange={(e) => handleEditChange(e)}
                className="form-radio w-4 h-4"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="eligibleForZakat"
                name="eligibleForZakat"
                value={editProduct?.eligibleForZakat === "Yes"}
                onChange={(e) => handleEditChange(e)}
                className="form-radio w-4 h-4"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-black mb-2">Need Assistance Required:</label>
          <div className="relative">
            <select
              id="needAssistance"
              name="needAssistance"
              value={editProduct.needAssistance}
              onChange={handleEditChange}
              className="w-full p-3 border border-gray-300 rounded-md"
            >
              <option value="" disabled selected>
                Select Assistance Type
              </option>
              <option id="needAssistance" name="needAssistance" value="financial">Financial</option>
                <option id="needAssistance" name="needAssistance" value="educational">Educational</option>
                <option id="needAssistance" name="needAssistance" value="medical">Medical</option>
                <option id="needAssistance" name="needAssistance" value="housing">Housing</option>
            </select>
          </div>
        </div>

        <div className="mb-4">
          <label className="block text-black mb-2">Are you willing to volunteer for mosque causes ( Yes or No ) :</label>
          <div className="flex items-center space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="willingToVolunteer"
                name="willingToVolunteer"
                value={editProduct.willingToVolunteer === "Yes"}
                onChange={handleChange}
                className="form-radio w-4 h-4"
              />
              <span className="ml-2">Yes</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                id="willingToVolunteer"
                name="willingToVolunteer"
                value={editProduct.willingToVolunteer === "No"}
                onChange={handleChange}
                className="form-radio w-4 h-4"
              />
              <span className="ml-2">No</span>
            </label>
          </div>
        </div>

        <div className="mb-4">
          <label htmlFor="otherDetails" className="block text-black  mb-2">
            Other details
          </label>
          <textarea
            id="otherDetails"
            name="otherDetails"
            value={editProduct.otherDetails}
            onChange={handleEditChange}
            rows="4"
            className="w-full p-3 border border-gray-300 rounded-md"
          ></textarea>
        </div>

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
          </form>
        </div>
        )}
       
        {deleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 mt-16 bg-opacity-50">
            <div className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
              <p className="mb-4">Do you really want to delete this Registration?</p>
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