import { useState, useEffect } from "react";
// Pake yang axios dan response.data.data.courts dan auth dari token
const useCourts = (initialPage = 1, limit = 8) => {
  const [courts, setCourts] = useState([]);
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [totalItems, setItems] = useState();
  const [totalPages, setTotalPages] = useState();
  const [facilities, setFacilities] = useState([]);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    const fetchCourts = async () => {
      try {
        const response = await fetch(`http://localhost:1323/api/courts?page=${currentPage}&limit=${limit}`);
        const data = await response.json();
        console.log("Courts", data.data.courts);
        setCourts(data.data.courts);
        setItems(data.data.totalItems);
        setFacilities(data.data.facilities);
        setLocations(data.data.locations);
        setTotalPages(data.data.totalPage);
      } catch (error) {
        console.error("Failed to fetch courts", error);
      }
    };
    fetchCourts();
  }, [currentPage, limit]);
  return { courts, currentPage, totalItems, totalPages, setCurrentPage, facilities,locations };
};

export default useCourts;
