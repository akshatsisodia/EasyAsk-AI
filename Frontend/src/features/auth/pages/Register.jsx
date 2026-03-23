import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";

const Register = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { handleRegister } = useAuth();

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username,
      email,
      password,
    };

    await handleRegister(payload);

    navigate("/");
  };

  if (!loading && user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] p-6">
      <div className="w-full flex flex-col items-center max-w-md bg-[#F9FAFB] rounded-3xl p-8 shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold text-slate-900 mb-1">Create your account</h2>
        <p className="text-sm text-slate-500 mb-6">Start your intellectual journey. </p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-6 py-3 rounded-md bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d948985]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-6 py-3 rounded-md bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d948985]" placeholder="Your email" />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-6 py-3 rounded-md bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d948985]"
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="w-full mt-3 bg-[#0D9488]  text-white py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition cursor-pointer">
            Sign Up
          </button>
        </form>

        {/* <div className="flex items-center my-6 w-full">
          <div className="grow h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        <button className="w-full flex items-center justify-center gap-5 bg-linear-to-r bg-[#F1F4F5] text-black text-center py-3 rounded-full font-semibold shadow-md cursor-pointer active:scale-[0.98] select-none">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <p>Sign up with Google</p>
        </button> */}

      </div>
      <div className="mt-6 text-center text-md text-slate-500">
        Already have an account?{" "}
        <Link to="/login" className="text-[#0D9488] font-medium hover:underline">
          Sign In
        </Link>
      </div>
    </div>
  );
};

export default Register;
