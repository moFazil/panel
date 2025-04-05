import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Event = () => {
  const [products, setProducts] = useState([
    { id: 1, name: "Dua for healthy body", category: "Dua for healthy body",titleenglish:"Dua for healthy body",
      titlearabic:"دعاء لصحة الجسم",titleurdu:"صحت مند جسم کے لیے دعا",titletamil:"ஆரோக்கியமான உடலுக்கு துவா",
      duaarabic:"يا الله! وهب لي العافية في جسدي. يا الله! وهب لي العافية في سمعي. يا الله! وهب لي العافية في عيني. لا إله حق إلا أنت. -أبو داود",
      duaenglish:"Oh Allah! Grant me well-being in my body. Oh Allah! Grant me well-being in my hearing. Oh Allah! Grant me well-being in my sight. There is no true God but You. -Abu Dawud",
      duaurdu:"ابوداؤد- اے اللہ! مجھے میرے جسم میں عافیت عطا فرما۔ اے اللہ! مجھے میری سماعت میں عافیت عطا فرما۔ اے اللہ! مجھے میری نظر میں عافیت عطا فرما۔ تیرے سوا کوئی",
      duatamil:"யா அல்லாஹ்! என் உடலில் எனக்கு நல்வாழ்வை வழங்குவாயாக. யா அல்லாஹ்! என் செவிகளில் எனக்கு நல்வாழ்வை வழங்குவாயாக. யா அல்லாஹ்! என் பார்வையில் எனக்கு நல்வாழ்வை வழங்குவாயாக. உன்னைத் தவிர உண்மையான கடவுள் இல்லை. -அபு தாவூத்", date: "2/4/2025"},
    { id: 2, name: "Product 2", category: "Category 2", date: "2/4/2025", },
    { id: 3, name: "Product 2", category: "Category 3", date: "2/4/2025", },
    { id: 4, name: "Product 2", category: "Category 4", date: "2/4/2025", },
    { id: 5, name: "Product 2", category: "Category 5", date: "2/4/2025", },
    { id: 6, name: "Product 2", category: "Category 6", date: "2/4/2025", },
    { id: 7, name: "Product 2", category: "Category 7", date: "2/4/2025", },
    { id: 8, name: "Product 2", category: "Category 8", date: "2/4/2025", },
    { id: 9, name: "Product 2", category: "Category 9", date: "2/4/2025", },
    { id: 10, name: "Product 2", category: "Category 10", date: "2/4/2025", },
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
    name: "",
    category: "",
    titlearabic:"",
    titleenglish:"",
    titleurdu:"",
    titletamil:"",
    duaarabic:"",
    duaenglish:"",
    duaurdu:"",
    duatamil:"",
    date: "",
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
    if (!newProduct.name || !newProduct.category || !newProduct.date || !newProduct.titlearabic || !newProduct.titleenglish
      || !newProduct.titleurdu || !newProduct.titletamil || !newProduct.duaarabic || !newProduct.duaenglish || !newProduct.duaurdu
      || !newProduct.duatamil
    ) {
      alert("Please fill all fields!");
      return;
    }

    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setModalOpen(false);
    setNewProduct({ name: "", category: "", date: "",titlearabic: "",titleenglish: "",titleurdu: "",titletamil: "",
      duaarabic: "", duaenglish: "", duaurdu: "", duatamil: ""});
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
      <div className="container mx-auto md:w-full  md:text-base tablewidth text-[14px]  p-5">
      <div className="bg-white  p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-4">
          <h1 className="md:text-2xl text-[14px] font-semibold">Dua List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-black cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95"
          >
            Add Dua
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
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[150px]">Name</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[180px]">Category</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[180px]">Dua</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[120px]">Date</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[120px]">Actions</th>
      </tr>
    </thead>
    <tbody>
      {currentProducts.map((product) => (
        <tr key={product.id} className="hover:bg-gray-100 text-sm">
          <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{product.id}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[150px]">{product.name}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[180px]">{product.category}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[180px]">{product.duaenglish}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[120px]">{product.date}</td>
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
            <form className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 max-h-[80vh] overflow-y-auto rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Add Dua</h2>
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-6">
                <label htmlFor="" >Category</label>
                <select name="category" value={newProduct.category} onChange={handleChange} className="border p-2 border-gray-300 rounded-md mt-2  w-full mb-2">
                  <option value="">Select Category</option>
                  <option value="Dua for forgiveness of all sins">Dua for forgiveness of all sins</option>
                  <option value="Dua for healthy body">Dua for healthy body</option>
                  <option value="Dua for preservation">Dua for preservation</option>
                  <option value="Dua for the sick">Dua for the sick</option>
                </select>
                </div>
                <div className="col-span-6">
                <label htmlFor="title">Title (English)</label>
                <input type="text" name="titleenglish" placeholder="Dua for every day" value={newProduct.titleenglish} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-6"> 
                <label htmlFor="title">Title (Arabic)</label>
                <input type="text" name="titlearabic" placeholder="Dua for every day" value={newProduct.titlearabic} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />      
                </div>
                <div className="col-span-6">
                <label htmlFor="title">Title (Urdu)</label>
                <input type="text" name="titleurdu" placeholder="Dua for every day" value={newProduct.titleurdu} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-6">
                <label htmlFor="title">Title (Tamil)</label>
                <input type="text" name="titletamil" placeholder="Dua for every day" value={newProduct.titletamil} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-12">
                <label htmlFor="dua">Dua Arabic</label>
                <textarea type="text" name="duaarabic" placeholder="Enter dua in arabic" value={newProduct.duaarabic} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-12">
                <label htmlFor="dua">Dua English</label>
                <textarea type="text" name="duaenglish" placeholder="Enter dua in english" value={newProduct.duaenglish} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-12">
                <label htmlFor="dua">Dua Urdu</label>
                <textarea type="text" name="duaurdu" placeholder="Enter dua in urdu" value={newProduct.duaurdu} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-12">
                <label htmlFor="dua">Dua Tamil</label>
                <textarea type="text" name="duatamil" placeholder="Enter dua in tamil" value={newProduct.duatamil} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
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
          <div className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg">
            <h2 className="text-lg font-semibold mb-4">Dua Details</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {selectedProduct.id}</p>
              <p><strong>Name:</strong> {selectedProduct.name}</p>
              <p><strong>Date:</strong> {selectedProduct.date}</p>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <p><strong>Dua:</strong> {selectedProduct.duaenglish}</p>
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
            <div className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 max-h-[80vh] overflow-y-auto  rounded shadow-lg">
              <h2 className="text-xl font-semibold mb-4">Edit Dua</h2>
              <div className="grid grid-cols-12 gap-3 items-center">
                <div className="col-span-6">
                <label htmlFor="" >Category</label>
                <select name="category" value={editProduct.category} onChange={handleChange} className="border p-2 border-gray-300 rounded-md mt-2  w-full mb-2">
                  <option value="">Select Category</option>
                  <option value="Sahih Bukhari">Sahih Bukhari</option>
                  <option value="Sahih Muslim">Sahih Muslim</option>
                  <option value="Sunan Abu Dawood">Sunan Abu Dawood</option>
                  <option value="Tirmidhi">Tirmidhi</option>
                </select>
                </div>
                <div className="col-span-6">
                <label htmlFor="title">Title (English)</label>
                <input type="text" name="titleenglish" placeholder="Dua for every day" value={editProduct.titleenglish} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-6"> 
                <label htmlFor="title">Title (Arabic)</label>
                <input type="text" name="titlearabic" placeholder="Dua for every day" value={editProduct.titlearabic} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />      
                </div>
                <div className="col-span-6">
                <label htmlFor="title">Title (Urdu)</label>
                <input type="text" name="titleurdu" placeholder="Dua for every day" value={editProduct.titleurdu} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-6">
                <label htmlFor="title">Title (Tamil)</label>
                <input type="text" name="titletamil" placeholder="Dua for every day" value={editProduct.titletamil} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-12">
                <label htmlFor="dua">Dua Arabic</label>
                <textarea type="text" name="duaarabic" placeholder="Enter dua in arabic" value={editProduct.duaarabic} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-12">
                <label htmlFor="dua">Dua English</label>
                <textarea type="text" name="duaenglish" placeholder="Enter dua in english" value={editProduct.duaenglish} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-12">
                <label htmlFor="dua">Dua Urdu</label>
                <textarea type="text" name="duaurdu" placeholder="Enter dua in urdu" value={editProduct.duaurdu} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
                <div className="col-span-12">
                <label htmlFor="dua">Dua Tamil</label>
                <textarea type="text" name="duatamil" placeholder="Enter dua in tamil" value={editProduct.duatamil} onChange={handleChange} className="border border-gray-300 rounded-md mt-2 p-2 w-full mb-2" />
                </div>
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
            </div>
          </div>
        )}
       
        {deleteModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-gray-500 mt-16 bg-opacity-50">
            <div className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg text-center">
              <h2 className="text-xl font-semibold mb-4">Are you sure?</h2>
              <p className="mb-4">Do you really want to delete this Dua?</p>
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