import Footer from "../Footer";
import Header from "../Header";
import { useEffect, useState } from "react";
import axios from "axios";

interface BuildingInfo {
  _id: string;
  name: string;
  photoname: string;
  info: string;
  imagesrc: string;
  location: string;
}

const MyComponent = () => {
  const [sceneName, setSceneName] = useState<string | null>(null);
  const [isInfoVisible, setIsInfoVisible] = useState<boolean>(true);
  const [buildingData, setBuildingData] = useState<BuildingInfo | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>("");

  useEffect(() => {
    const fetchBuildings = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/buildingInfo"
        );
        const buildings: BuildingInfo[] = response.data;

        // Listen for messages from Unity
        const handleMessage = (event: MessageEvent) => {
          if (event.data.type === "SCENE_NAME") {
            const matchingBuilding = buildings.find(
              (building) => building.photoname === event.data.name
            );
            if (matchingBuilding) {
              setSceneName(matchingBuilding.name);
              setBuildingData(matchingBuilding);
            } else {
              setSceneName(null);
              setBuildingData(null);
            }
          }
        };

        window.addEventListener("message", handleMessage);

        return () => {
          window.removeEventListener("message", handleMessage);
        };
      } catch (error) {
        console.error("Error fetching building information", error);
      }
    };

    fetchBuildings();
  }, []);

  const toggleInfoVisibility = () => {
    setIsInfoVisible(!isInfoVisible);
  };
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div>
      <Header />
      <div className="relative flex-grow flex justify-center items-center p-5">
        <button
          onClick={toggleInfoVisibility}
          className="absolute top-0 right-4 m-4 p-2 bg-blue-500 text-white rounded-md shadow-md"
        >
          {isInfoVisible ? "Hide Info" : "Show Info"}
        </button>
        <input
          type="text"
          placeholder="Search anchor points..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="absolute top-0 right-28 m-4 p-2 border border-gray-300 rounded-md shadow-sm"
        />
        {sceneName && isInfoVisible && buildingData && (
          <div className="absolute top-0 left-0 m-4 p-4 bg-white text-black rounded-md shadow-md max-w-xs">
            <img
              src={buildingData.imagesrc}
              alt="Location Thumbnail"
              className="w-full h-32 object-cover rounded-md mb-2"
            />
            <div className="font-semibold text-lg mb-1">{sceneName}</div>
            <p className="text-sm text-gray-700">{buildingData.info}</p>
            <div className="text-xs text-gray-500 mt-1">
              <span className="font-semibold">Location:</span>{" "}
              {buildingData.location}
            </div>
          </div>
        )}
        <iframe
          title="WebGL Demo"
          src="/WebGL_v2.0_fixbug/index.html"
          className="w-11/12 h-[700px] border-none shadow-lg rounded-lg md:w-full md:h-[900px]"
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      </div>
      <Footer />
    </div>
  );
};

export default MyComponent;
