import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector(state=>state.auth.user);
  const loading = useSelector(state=> state.auth.loading);

  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email, password
    }
    
    await handleLogin(payload);
    navigate("/");
  };

  if(!loading && user){
    return <Navigate to="/" replace/>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br bg-[#ead9d5] p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-md border border-gray-100">
        <h2 className="text-3xl font-semibold text-slate-900 mb-4">Login</h2>
        <p className="text-sm text-slate-500 mb-6">
          By logging in, you agree to our <a className="text-orange-600 font-medium">Terms of Use</a>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Email</label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required className="w-full px-6 py-3 rounded-full bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200" placeholder="Your email" autoComplete="on"/>
          </div>

          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-6 py-3 rounded-full bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-200"
              placeholder="Your password"
            />
          </div>

          <button type="submit" className="w-full mt-3 bg-linear-to-r from-orange-500 to-red-500 text-white py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition">
            Connect
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-slate-500">
          <span className="mx-1">Don't have an account?</span>{" "}
          <Link to="/register" className="text-orange-600 font-medium hover:underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
