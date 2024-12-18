import React, { useState, useEffect } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

interface BuildingInfo {
  _id?: string;
  name: string;
  photoname: string;
  info: string;
  imagesrc: string;
  location: string;
}

const Admin: React.FC = () => {
  const [buildings, setBuildings] = useState<BuildingInfo[]>([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalData, setModalData] = useState<BuildingInfo | null>(null);
  const [logout, setLogout] = useState(false); // State to handle logout

  useEffect(() => {
    fetchBuildings();
  }, []);

  const fetchBuildings = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/buildingInfo"
      );
      setBuildings(response.data);
    } catch (error) {
      console.error("Error fetching building information", error);
    }
  };

  const handleOpenModal = (building?: BuildingInfo) => {
    setModalData(
      building || {
        name: "",
        photoname: "",
        info: "",
        imagesrc: "",
        location: "",
      }
    );
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setModalData(null);
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    if (modalData) {
      setModalData({
        ...modalData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const formData = new FormData();
      formData.append("image", e.target.files[0]);

      try {
        const response = await axios.post(
          "http://localhost:5000/api/upload",
          formData,
          {
            headers: { "Content-Type": "multipart/form-data" },
          }
        );
        if (modalData) {
          setModalData({ ...modalData, imagesrc: response.data.imagePath });
        }
      } catch (error) {
        console.error("Error uploading file", error);
      }
    }
  };

  const handleSubmit = async () => {
    try {
      if (modalData?._id) {
        // Update existing building
        await axios.put(
          `http://localhost:5000/api/buildingInfo/${modalData._id}`,
          modalData
        );
      } else {
        // Create new building
        await axios.post("http://localhost:5000/api/buildingInfo", modalData);
      }
      fetchBuildings();
      handleCloseModal();
    } catch (error) {
      console.error("Error saving building information", error);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this item?"
    );
    if (!confirmDelete) return;

    try {
      await axios.delete(`http://localhost:5000/api/buildingInfo/${id}`);
      fetchBuildings(); // Refresh the list after deletion
    } catch (error) {
      console.error("Error deleting building information", error);
    }
  };

  const handleLogout = () => {
    // Clear any authentication data (e.g., localStorage or sessionStorage)
    localStorage.removeItem("isAdmin");
    setLogout(true);
  };

  if (logout) {
    return <Navigate to="/login" />; // Redirect to login page after logout
  }

  return (
    <div className="relative p-5">
      {/* Logout Button at the top-right */}
      <button
        onClick={handleLogout} // Logout button
        className="absolute top-5 right-5 px-4 py-2 font-semibold text-white bg-gray-500 rounded"
      >
        Logout
      </button>

      <h2 className="text-2xl font-bold mb-4">
        Building Information Management
      </h2>
      <button
        onClick={() => handleOpenModal()}
        className="px-4 py-2 mb-4 font-semibold text-white bg-blue-500 rounded"
      >
        Add New Information
      </button>
      <table className="w-full text-left border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2 border">Name</th>
            <th className="p-2 border">Photo</th>
            <th className="p-2 border">Photo Name</th>
            <th className="p-2 border">Information</th>
            <th className="p-2 border">Location</th>
            <th className="p-2 border">Actions</th>
          </tr>
        </thead>
        <tbody>
          {buildings.map((building) => (
            <tr key={building._id}>
              <td className="p-2 border">{building.name}</td>
              <td className="p-2 border">
                <img
                  src={building.imagesrc}
                  alt={building.photoname}
                  className="w-16 h-16 object-cover"
                />
              </td>
              <td className="p-2 border">{building.photoname}</td>
              <td className="p-2 border">{building.info}</td>
              <td className="p-2 border">{building.location}</td>
              <td className="p-2 border">
                <button
                  onClick={() => handleOpenModal(building)}
                  className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(building._id!)}
                  className="px-2 py-1 text-white bg-red-500 rounded"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
          <div className="bg-white p-6 rounded-md shadow-md w-80">
            <h2 className="text-xl font-bold mb-4">
              {modalData?._id
                ? "Update Building Info"
                : "Create New Building Info"}
            </h2>
            <input
              name="name"
              value={modalData?.name || ""}
              onChange={handleInputChange}
              placeholder="Name"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              name="photoname"
              value={modalData?.photoname || ""}
              onChange={handleInputChange}
              placeholder="Photo Name"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />

            <textarea
              name="info"
              value={modalData?.info || ""}
              onChange={handleInputChange}
              placeholder="Information"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <input
              name="location"
              value={modalData?.location || ""}
              onChange={handleInputChange}
              placeholder="Location"
              className="w-full p-2 border border-gray-300 rounded mb-2"
            />
            <div className="flex justify-end">
              <button
                onClick={handleCloseModal}
                className="px-4 py-2 mr-2 text-white bg-gray-500 rounded"
              >
                Cancel
              </button>
              <button
                onClick={handleSubmit}
                className="px-4 py-2 text-white bg-blue-500 rounded"
              >
                {modalData?._id ? "Update" : "Create"}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Admin;
