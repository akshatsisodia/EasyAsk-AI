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

  const user  = useSelector(state=> state.auth.user);
  const loading = useSelector(state=> state.auth.loading);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      username, email, password
    }

    await handleRegister(payload);

    navigate("/");
  };

  if(!loading && user){
    return <Navigate to="/" replace/>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br bg-[#ead9d5] p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold text-slate-900 mb-1">Create your account</h2>
        <p className="text-sm text-slate-500 mb-6">Start using the platform with a free account</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
              className="w-full px-6 py-3 rounded-full bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
              placeholder="Your display name"
            />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-6 py-3 rounded-full bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200" placeholder="Your email" />
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-6 py-3 rounded-full bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
              placeholder="Create a password"
            />
          </div>

          <button type="submit" className="w-full mt-3 bg-linear-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition">
            Create account
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          Already have an account?{" "}
          <Link to="/login" className="text-orange-600 font-medium hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
