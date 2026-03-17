import { useState } from "react";
import { Link } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace with real auth call
    console.log("Login attempt", { email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-50 via-amber-50 to-white p-6">
      <div className="w-full max-w-md bg-white rounded-3xl p-8 shadow-md border border-gray-100">
        <h2 className="text-2xl font-semibold text-slate-900 mb-1">Log in</h2>
        <p className="text-sm text-slate-500 mb-6">
          By logging in, you agree to our <a className="text-orange-600 font-medium">Terms of Use</a>.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
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
            Register
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
