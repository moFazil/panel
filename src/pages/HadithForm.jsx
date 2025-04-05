import React, { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { IconButton} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";

const Event = () => {
  const [products, setProducts] = useState([
    {
      id: 1,name: "Sahih al-Bukhari",
      hadithenglish: "The best among you are those who have the best manners and character.",
      haditharabic: "خيركم من تعلم القرآن وعلمه.",
      hadithurdu: "تم میں سب سے بہتر وہ ہیں جو قرآن سیکھیں اور سکھائیں۔",
      hadithtamil: "உங்களிடையில் சிறந்தவர்கள் அவைகள் என்பவர்கள் தங்கள் ஒப்புக்கூறுகளையும் பண்பையும் கொண்டவர்கள்.",
      referencebook: "Sahih al-Bukhari",category: ""
    },
    {
      id: 2,name: "Sunan al-Tirmidhi",
      hadithenglish: "The strong man is not the one who is able to overpower others, but the one who controls himself when angry.",
      haditharabic: "الْقَوِيُّ مَن غَلَبَ غَضَبَهُ.",
      hadithurdu: "طاقتور وہ نہیں جو دوسروں کو زیر کرے، بلکہ وہ ہے جو غصے کے وقت خود کو قابو میں رکھے۔",
      hadithtamil: "பலவீரன் ஒருவரை தோற்கடிக்க கூடியவர் அல்ல, ஆனால் கோபத்தின் போது தன் கெட்டத்தை கட்டுப்படுத்துகிறவராக இருக்கிறான்.",
      referencebook: "Sunan al-Tirmidhi",category: ""
    },
    {
      id: 3,name: "Sahih Muslim",
      hadithenglish: "None of you truly believes until he wishes for his brother what he wishes for himself.",
      haditharabic: "لَا يُؤْمِنُ أَحَدُكُمْ حَتَّى يُحِبَّ لِأَخِيهِ مَا يُحِبُّ لِنَفْسِهِ.",
      hadithurdu: "تم میں سے کوئی بھی کامل ایمان والا نہیں ہو سکتا جب تک وہ اپنے بھائی کے لیے وہی نہ چاہے جو اپنے لیے چاہتا ہے۔",
      hadithtamil: "உங்களிடையில் யாரும் உண்மையான இருதயம் கொண்டவர் அல்ல, இறுதியில் அவன் தன் சகோதரனுக்காக அவன் விரும்புவதைத் தன்னுடையவையாக விரும்புவதை தவிர.",
      referencebook: "Sahih Muslim",category: ""
    },
    {
      id: 4,name: "Sahih al-Bukhari",
      hadithenglish: "Actions are judged by intention, and every person shall have what they intended.",
      haditharabic: "إِنَّمَا الْأَعْمَالُ بِالنِّيَّاتِ وَإِنَّمَا لِكُلِّ امْرِئٍ مَا نَوَى.",
      hadithurdu: "عملوں کا دارومدار نیتوں پر ہے، اور ہر شخص کو اس کے ارادے کے مطابق ملے گا۔",
      hadithtamil: "செயல்களே நோக்கங்களால் மதிப்பிடப்படுகின்றன, ஒவ்வொரு மனிதனும் அவன் நோக்கின்படி பெற்றுக்கொள்கின்றார்.",
      referencebook: "Sahih al-Bukhari",category: ""
    }]);
  

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
    referencebook: "",
    category: "",
    haditharabic: "",
    hadithenglish: "",
    hadithurdu: "",
    hadithtamil: "",
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
    if (!newProduct.name || !newProduct.referencebook || !newProduct.category|| !newProduct.haditharabic
      || !newProduct.hadithenglish || !newProduct.hadithurdu|| !newProduct.hadithtamil
    ) {
      alert("Please fill all fields!");
      return;
    }

    setProducts([...products, { id: products.length + 1, ...newProduct }]);
    setModalOpen(false);
    setNewProduct({ name: "", referencebook: "", category: "", haditharabic: ""
      , hadithenglish: "", hadithurdu: "", hadithtamil: ""
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
          <h1 className="md:text-2xl text-[14px] font-semibold">Hadith List</h1>
          <button
            onClick={() => setModalOpen(true)}
            className="bg-black cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95"
          >
            Add Hadith
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
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[150px]">Narrated By</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[150px]">Reference Book</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[150px]">Category</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[180px]">Hadith</th>
        <th className="border border-gray-300 px-4 py-2 whitespace-nowrap min-w-[120px]">Actions</th>
      </tr>
    </thead>
    <tbody>
      {currentProducts.map((product) => (
        <tr key={product.id} className="hover:bg-gray-100 text-sm">
          <td className="border border-gray-300 px-4 py-2 whitespace-nowrap">{product.id}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[150px]">{product.name}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[180px]">{product.referencebook}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[120px]">{product.category}</td>
          <td className="border border-gray-300 px-4 py-2 break-words min-w-[120px]">{product.hadithenglish}</td>
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
          <div className="fixed inset-0 flex items-center  justify-center bg-gray-500 mt-16 bg-opacity-50">
            <form className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">Add New Hadith</h2>
              <div className="sm:flex gap-3">
                <div className="w-full">
                  <label  htmlFor="">Narrated By</label>
                  <input  type="text" name="name" placeholder="Name" value={newProduct.name} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
                </div>
                <div className="w-full">
                <label htmlFor="">Reference Book</label>
                <input type="text" name="referencebook" placeholder="Referencebook" value={newProduct.referencebook} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
                </div>
              </div>
              <label htmlFor="" >Category</label>
              <select name="category" value={newProduct.category} onChange={handleChange} className="border p-2 mt-2  w-full mb-2">
                <option value="">Select Category</option>
                <option value="eman">Eman</option>
                <option value="prayer">Prayer</option>
                <option value="ikram">Ikram</option>
                <option value="ilm & Dhikr">Ilm & Dhikr</option>
                <option value="ihlas">Ihlas</option>
                <option value="dhawath">Dhawath</option>
              </select>
              <label htmlFor="">Hadith in Arabic</label>
              <textarea type="text" name="haditharabic" placeholder="Enter hadith in arabic" value={newProduct.haditharabic} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
              <label htmlFor="">Hadith in Urdu</label>
              <textarea type="text" name="hadithurdu" placeholder="Enter hadith in urdu" value={newProduct.hadithurdu} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
              <label htmlFor="">Hadith in English</label>
              <textarea type="text" name="hadithenglish" placeholder="Enter hadith in english" value={newProduct.hadithenglish} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
              <label htmlFor="">Hadith in Tamil</label>
              <textarea type="text" name="hadithtamil" placeholder="Enter hadith in tamil" value={newProduct.hadithtamil} onChange={handleChange} className="border p-2 w-full mt-2 mb-2" />
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
          <div className="bg-white  p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg max-h-[60vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4">Hadith Details</h2>
            <div className="space-y-2">
              <p><strong>ID:</strong> {selectedProduct.id}</p>
              <p><strong>Name:</strong> {selectedProduct.name}</p>
              <p><strong>Referencebook:</strong> {selectedProduct.name}</p>
              <p><strong>Category:</strong> {selectedProduct.category}</p>
              <p><strong>Hadith Arabic:</strong> {selectedProduct.haditharabic}</p>
              <p><strong>Hadith English:</strong> {selectedProduct.hadithenglish}</p>
              <p><strong>Hadith Urdu:</strong> {selectedProduct.hadithurdu}</p>
              <p><strong>Hadith Tamil:</strong> {selectedProduct.hadithtamil}</p>
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
            <form className="bg-white p-6 w-3xl sm:ml-44 ml-10 mx-6 rounded shadow-lg max-h-[80vh] overflow-y-auto">
              <h2 className="text-xl font-semibold mb-4">Edit New Hadith</h2>
              <div className="sm:flex gap-3">
                <div className="w-full">
                  <label  htmlFor="">Narrated By</label>
                  <input  type="text" name="name" placeholder="Name" value={editProduct.name} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
                </div>
                <div className="w-full">
                <label htmlFor="">Reference Book</label>
                <input type="text" name="referencebook" placeholder="Referencebook" value={editProduct.referencebook} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
                </div>
              </div>
              <label htmlFor="" >Category</label>
              <select name="category" value={editProduct.category} onChange={handleChange} className="border p-2 mt-2  w-full mb-2">
                <option value="">Select Category</option>
                <option value="eman">Eman</option>
                <option value="prayer">Prayer</option>
                <option value="ikram">Ikram</option>
                <option value="ilm & Dhikr">Ilm & Dhikr</option>
                <option value="ihlas">Ihlas</option>
                <option value="dhawath">Dhawath</option>
              </select>
              <label htmlFor="">Hadith in Arabic</label>
              <textarea type="text" name="haditharabic" placeholder="Enter hadith in arabic" value={editProduct.haditharabic} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
              <label htmlFor="">Hadith in Urdu</label>
              <textarea type="text" name="hadithurdu" placeholder="Enter hadith in urdu" value={editProduct.hadithurdu} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
              <label htmlFor="">Hadith in English</label>
              <textarea type="text" name="hadithenglish" placeholder="Enter hadith in english" value={editProduct.hadithenglish} onChange={handleChange} className="border p-2 mt-2 w-full mb-2" />
              <label htmlFor="">Hadith in Tamil</label>
              <textarea type="text" name="hadithtamil" placeholder="Enter hadith in tamil" value={editProduct.hadithtamil} onChange={handleChange} className="border p-2 w-full mt-2 mb-2" />
              <button 
                onClick={handleUpdateProduct} 
                className="bg-black cursor-pointer text-white px-4 py-2 rounded transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-gray-900 active:scale-95"
              >
                Add
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
              <p className="mb-4">Do you really want to delete this Hadith List?</p>
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