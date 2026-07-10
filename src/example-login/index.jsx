import { useState } from "react";

export default function Login() {
  console.log("Login");

  const [isLogin, setIsLogin] = useState(false);

  const handelLogin = () => {
    setIsLogin(true);
  };
  const handelLogout = () => {
    setIsLogin(false);
  };

  const renderLogin = () => {
    return (
      <div>
        <h1>Vui Long Login</h1>
        <button
          onClick={handelLogin}
          type="button"
          className="text-white bg-success box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Login
        </button>
      </div>
    );
  };

  const renderLogout = () => {
    return (
      <div>
        <h1>Vui Long Logout</h1>
        <button
          onClick={handelLogout}
          type="button"
          className="text-white bg-danger box-border border border-transparent hover:bg-success-strong focus:ring-4 focus:ring-success-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none"
        >
          Logout
        </button>
      </div>
    );
  };

  return (
    <div>
      <h1>Example Login</h1>

      {isLogin ? renderLogout() : renderLogin()}
    </div>
  );
}
