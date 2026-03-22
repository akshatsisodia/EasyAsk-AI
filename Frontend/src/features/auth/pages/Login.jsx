import { useState } from "react";
import { Link, useNavigate, Navigate } from "react-router";
import { useAuth } from "../hooks/useAuth";
import { useSelector } from "react-redux";
import ForgetPassword from "../components/ForgetPassword";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const user = useSelector((state) => state.auth.user);
  const loading = useSelector((state) => state.auth.loading);

  const navigate = useNavigate();
  const { handleLogin } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      email,
      password,
    };

    await handleLogin(payload);
    navigate("/");
  };

  if (!loading && user) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-linear-to-br bg-[#F8F9FA] p-6">
      <div className="h-fit flex gap-2">
        <svg width="30" height="30" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg">
          <g fill="#2CA58D" stroke="#2CA58D" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
            <path
              d="M40 15 
             L48 35 
             L68 43 
             L48 51 
             L40 71 
             L32 51 
             L12 43 
             L32 35 Z"
            />

            <path
              d="M78 10 
             L82 20 
             L92 24 
             L82 28 
             L78 38 
             L74 28 
             L64 24 
             L74 20 Z"
            />

            <path
              d="M95 45 
             L99 55 
             L109 59 
             L99 63 
             L95 73 
             L91 63 
             L81 59 
             L91 55 Z"
            />

            <path
              d="M70 75 
             L74 85 
             L84 89 
             L74 93 
             L70 103 
             L66 93 
             L56 89 
             L66 85 Z"
            />
          </g>
        </svg>
        <h2 className="mb-5 text-lg">Aetheric Intelligence</h2>
      </div>
      <div className="w-full max-w-md flex flex-col items-center justify-center bg-[#F9FAFB] rounded-3xl p-8 shadow-md border border-gray-100">
        <h2 className="text-3xl font-semibold text-slate-900 mb-2">Welcome Back</h2>
        <p className="text-sm text-slate-500 mb-6">resume your intellectual disclosure</p>

        <form onSubmit={handleSubmit} className="space-y-4 w-full">
          <div>
            <label className="block text-xs font-medium text-slate-500 mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-6 py-3 rounded-md bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d948985]"
              placeholder="Your email"
              autoComplete="on"
            />
          </div>

          <div>
            <div className="flex items-center justify-between">
              <label className="block text-xs font-medium text-slate-500 mb-2">Password</label>
              <Link to="/forgetpassword" className="text-xs text-[#0D9488] font-bold">
                Forget Password?
              </Link>
            </div>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-6 py-3 rounded-md bg-gray-100 text-slate-800 border border-gray-100 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#0d948984]"
              placeholder="Your password"
            />
          </div>

          <button type="submit" className="w-full mt-3 flex items-center justify-center gap-4 bg-linear-to-r bg-[#0D9488] text-white py-3 rounded-full font-semibold shadow-md hover:opacity-95 transition cursor-pointer select-none active:scale-[0.98]">
            <p>Sign In</p>
            <svg height="20" width="20" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1.99974 12.9999L1.9996 11L15.5858 11V5.58582L22 12L15.5858 18.4142V13L1.99974 12.9999Z"></path>
            </svg>
          </button>
        </form>

        <div className="flex items-center my-6 w-full">
          <div className="grow h-px bg-gray-300"></div>
          <span className="mx-4 text-gray-500 text-sm font-medium">OR</span>
          <div className="grow h-px bg-gray-300"></div>
        </div>

        <div className="w-full flex items-center justify-center gap-5 bg-linear-to-r bg-[#F1F4F5] text-black text-center py-3 rounded-full font-semibold shadow-md cursor-pointer active:scale-[0.98] select-none">
          <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
            <path
              fill="#FFC107"
              d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
            ></path>
            <path fill="#FF3D00" d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"></path>
            <path fill="#4CAF50" d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"></path>
            <path fill="#1976D2" d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"></path>
          </svg>
          <p>Sign in with Google</p>
        </div>
      </div>
      <div className="mt-6 text-center text-sm text-slate-500">
        <span className="mx-1">Don't have an account?</span>{" "}
        <Link to="/register" className="text-[#0D9488] font-medium hover:underline">
          Sign up
        </Link>
      </div>
    </div>
  );
};

export default Login;
