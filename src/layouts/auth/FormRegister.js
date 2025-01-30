import React, { useState } from "react";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { useRegister } from "hooks/UserAuth";
import FacebookLogo from 'assets/images/facebook.png'
import GoogleLogo from 'assets/images/google.png'

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const { handleRegister, loading, error } = useRegister();
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    password: "",
    email: "",
  });
  const [validationErrors, setValidationErrors] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
  });

  const validateForm = () => {
    const errors = {};

    if (!formData.firstname) {
      errors.firstname = "firstname is required";
    }
    if (!formData.lastname) {
      errors.lastname = "lastname is required";
    }

    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Please enter a valid email address";
    }

    if (!formData.password) {
      errors.password = "Password is required";
    } else if (formData.password.length < 8) {
      error.password = "Password must be at least 8 characters";
    }

    setValidationErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setValidationErrors({});
    if (validateForm()) {
      try {
        await handleRegister(formData);
        setFormData({
          email: "",
          password: "",
        });
      } catch (err) {
        console.error("Submit error:", err);
      }
    }
    await handleRegister(formData);
  };
  const getInputClassName = (fieldName) => `
  w-full px-4 py-3 pr-11 border rounded-lg 
  transition-colors focus:ring-2
  ${validationErrors[fieldName] ? "border-red-500 focus:ring-red-200 focus:border-red-500" : "border-gray-300 focus:ring-emerald-200 focus:border-emerald-500"}
`;

  return (
    <div className="w-full max-w-md space-y-6">
      <div className="text-center">
        <h2 className="text-3xl font-serif text-gray-900">Create Account</h2>
        <p className="mt-2 text-gray-600">Join With Us</p>
      </div>

      <form
        className="space-y-4"
        onSubmit={handleSubmit}
      >
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Firstname</label>
          <div className="relative">
            <input
              type="text"
              className={getInputClassName("firstname")}
              placeholder="Enter your firstname"
              value={formData.firstname}
              name="firstname"
              onChange={handleChange}
            />
            {validationErrors.firstname && <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />}
          </div>
          {validationErrors.firstname && <p className="mt-1 text-sm text-red-500 flex items-center">{validationErrors.firstname}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Lastname</label>
          <div className="relative">
            <input
              type="text"
              className={getInputClassName("lastname")}
              placeholder="Enter your lastname"
              value={formData.lastname}
              name="lastname"
              onChange={handleChange}
            />
            {validationErrors.lastname && <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />}
          </div>
          {validationErrors.lastname && <p className="mt-1 text-sm text-red-500 flex items-center">{validationErrors.lastname}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
          <div className="relative">
            <input
              type="email"
              className={getInputClassName("email")}
              placeholder="Enter your email"
              value={formData.email}
              name="email"
              onChange={handleChange}
            />
            {/* <Mail className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${validationErrors.email ? "text-red-500" : "text-gray-400"}`} /> */}
            {validationErrors.email && <AlertCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-red-500" />}
          </div>
          {validationErrors.email && <p className="mt-1 text-sm text-red-500 flex items-center">{validationErrors.email}</p>}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              className={getInputClassName("password")}
              placeholder="Create password"
              value={formData.password}
              onChange={handleChange}
              name="password"
            />
            {/* <Lock className={`absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 ${validationErrors.password ? "text-red-500" : "text-gray-400"}`} /> */}
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
        </div>

        <div className="flex items-start">
          <input
            type="checkbox"
            className="mt-1 h-4 w-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
          />
          <label className="ml-2 text-sm text-gray-600">
            Saya setuju dengan{" "}
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-500"
            >
              Syarat & Ketentuan
            </a>{" "}
            dan{" "}
            <a
              href="#"
              className="text-emerald-600 hover:text-emerald-500"
            >
              Kebijakan Privasi
            </a>
          </label>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-emerald-600 text-white py-3 rounded-lg hover:bg-emerald-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {loading ? "Mendaftar..." : "Daftar Sekarang"}
        </button>
      </form>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4">
          <p className="text-emerald-600 text-sm flex items-center">
            <AlertCircle className="h-4 w-4 mr-2" />
            {error.message || String(error)}
          </p>
        </div>
      )}

      {/* Login With Google or Facebook */}
      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
          <img
            src={GoogleLogo}
            alt="Google"
            className="h-6 w-6 mr-2"
          />
          Google
        </button>
        <button className="flex items-center justify-center py-3 border border-gray-300 rounded-lg hover:border-gray-400 transition-colors">
          <img
            src={FacebookLogo}
            alt="Facebook"
            className="h-6 w-8 mr-2"
          />
          Facebook
        </button>
      </div>

    </div>
  );
};

export default RegisterForm;
