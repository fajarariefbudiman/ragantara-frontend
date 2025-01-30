import React from "react";
import { ArrowLeft } from "lucide-react";
import FormLogin from "layouts/auth/FormLogin";

const Auth = () => {

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-green-50 flex">
     
      {/* Right Side - Auth Forms */}
      <div className="flex-1 flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="w-full max-w-md">
          <button
            onClick={() => window.history.back()}
            className="flex items-center text-gray-600 hover:text-emerald-600 mb-8"
          >
            <ArrowLeft className="h-5 w-5 mr-2" />
            Kembali
          </button>

          <FormLogin />

          {/* {isLogin ? <FormLogin /> : <RegisterForm />} */}

          {/* <p className="mt-8 text-center text-sm text-gray-600">
            {isLogin ? "Belum punya akun? " : "Sudah punya akun? "}
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-emerald-600 hover:text-emerald-500 font-medium"
            >
              {isLogin ? "Daftar sekarang" : "Masuk"}
            </button>
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Auth;
