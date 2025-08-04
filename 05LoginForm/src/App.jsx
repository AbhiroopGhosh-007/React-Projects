import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setshowPassword] = useState(false);
  // const showPassword=false;
  const [submitted, setSubmitted] = useState(false);
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const isValidEmail = regex.test(email);
  const isValidPassword = password.length >= 8;
  const isValidForm = isValidEmail && isValidPassword;

  return (
    <div className="flex flex-col items-center justify-center gap-3 h-screen bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Login Form</h1>
      <input
        type="text"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        placeholder="Enter Email"
        className="border p-2 rounded w-64"
      />
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(event) => setPassword(event.target.value)}
        placeholder="Enter Password"
        className="border p-2 rounded w-64"
      />
      <button
        onClick={() => {
          setshowPassword(!showPassword);
        }}
        className="border p-2 rounded w-auto"
      >
        {showPassword ? "Hide" : "Show"}
      </button>
      <button
        disabled={!isValidForm}
        onClick={() => {
          setSubmitted(true);
          setEmail("");
          setPassword("");
          setshowPassword(false);
        }}
        className={`px-4 py-2 mt-4 text-white rounded transition ${
          isValidForm
            ? "bg-green-500 hover:bg-green-600"
            : "bg-gray-400 cursor-not-allowed"
        }`}
      >
        Submit
      </button>
      {email && !isValidEmail && (
        <p className="text-red-500 text-sm mt-1">
          Email should contain "." & "@"
        </p>
      )}
      {password && !isValidPassword && (
        <p className="text-red-500 text-sm mt-1">
          Password should be at least 8 characters long
        </p>
      )}
      {submitted && (
        <p className="text-green-500 mt-4 font-semibold">
          Congratulations!Form successfully submitted!
        </p>
      )}
   
    </div>
  );
}
export default App;
