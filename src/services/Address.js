import axios from "axios";

const API_URL = "http://localhost:1323/api";

export const getAddress = async (userId) => {
  try {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      throw new Error("No user found in localStorage");
    }

    const user = JSON.parse(userStr);

    const response = await axios.get(`${API_URL}/addresses`, {
      params: {
        user_id: userId,
      },
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error fetching addresses:", error);
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};

export const createAddress = async (formData) => {
  try {
    const userStr = localStorage.getItem("user");
    if (!userStr) {
      throw new Error("No user found in localStorage");
    }

    const user = JSON.parse(userStr);
    const response = await axios.post(`${API_URL}/addresses`, formData, {
      headers: {
        Authorization: `Bearer ${user.token}`,
      },
    });
    console.log("response create data", response.data);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data.message : error.message);
  }
};
