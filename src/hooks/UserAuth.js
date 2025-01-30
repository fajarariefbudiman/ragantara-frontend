import { useState } from "react";
import { registerUser, loginUser } from "services/Auth";
import { useNavigate } from "react-router-dom";
import { useUser } from "context/UserContext";

const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setUser } = useUser();
  const navigate = useNavigate();

  const handleRegister = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await registerUser(formData);
      console.log("Data yang dikirim",data)
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      navigate("/");
      return data;
    } catch (error) {
      setError(error);
      // throw error;
    } finally {
      setLoading(false);
    }
  };

  return { handleRegister, loading, error };
};

const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setUser } = useUser();
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async (formData) => {
    setLoading(true);
    setError(null);
    try {
      const data = await loginUser(formData);
      localStorage.setItem("user", JSON.stringify(data));
      setUser(data);
      navigate("/");
    } catch (error) {
      // console.log("User Error :",error);
      setError(error);
      console.error("Error during login:", error);
    } finally {
      setLoading(false);
    }
  };

  return { handleLogin, loading, error };
};

const useLogout = () => {
  const { logout } = useUser();
  const navigate = useNavigate();

  return () => {
    logout();
    navigate("/");
  };
};

export { useRegister, useLogin, useUser, useLogout };
