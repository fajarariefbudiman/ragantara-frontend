import { useUser } from "context/UserContext";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { createAddress, getAddress } from "services/Address";

export const useAddress = () => {
  const [addresses, setAddresses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { user } = useUser();

  useEffect(() => {
    if (!user?.auth?.id) return;

    const fetchAddresses = async () => {
      setLoading(true);
      setError(null);

      try {
        const address = await getAddress(user.auth.id);
        // console.log("Data addresses", address);
        setAddresses(address.data);
      } catch (err) {
        console.error("Error in useAddress:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchAddresses();
  }, [user]);

  return { addresses, loading, error };
};

export const useCreateAddress = () => {
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleAddress = async (formData) => {
    try {
      setError(null);
      if (!formData.user_id) {
        throw new Error("User ID is required");
      }

      const data = await createAddress(formData);
      console.log("Create address hooks", data);

      navigate("/addresses");
      return data;
    } catch (error) {
      console.error("Error in useCreateAddress:", error);

      setError(error.message || "Failed to create address");

      throw error;
    }
  };

  const clearError = () => setError(null);

  return {
    handleAddress,
    error,
    clearError,
  };
};
