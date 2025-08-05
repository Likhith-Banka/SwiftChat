import React, { useContext, useState } from 'react'
import { AuthContext } from '../../context/AuthContext'
import arrowIcon from '../assets/arrow_icon.png';


const LoginPage = () => {
  const [currState, setCurrState] = useState("Sign up")
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [bio, setBio] = useState("")
  const [isDataSubmitted, setIsDataSubmitted] = useState(false);

  const { login } = useContext(AuthContext)

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (currState === 'Sign up' && !isDataSubmitted) {
      setIsDataSubmitted(true)
      return;
    }
    login(currState === "Sign up" ? 'signup' : 'login', { fullName, email, password, bio })
  }

  return (
    <div
      className='min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#ff0050] via-[#ff7a00] to-[#ffe600] text-white px-4'
    >
      {/* SwiftChat Heading */}
      <h1 className='text-4xl font-bold mb-6'>SwiftChat</h1>

      {/* Form */}
      <form
        onSubmit={onSubmitHandler}
        className='bg-white/20 backdrop-blur-md text-white p-8 flex flex-col gap-6 rounded-xl shadow-2xl w-full max-w-md'
      >
     <div className="mb-2 relative">
  {isDataSubmitted && (
    <img
      onClick={() => setIsDataSubmitted(false)}
      src={arrowIcon}
      alt="back"
      className='w-5 cursor-pointer absolute left-0 top-1/2 -translate-y-1/2'
    />
  )}
  <h2 className='font-bold text-3xl text-center w-full'>{currState}</h2>
</div>


        {currState === "Sign up" && !isDataSubmitted && (
          <input
            onChange={(e) => setFullName(e.target.value)}
            value={fullName}
            type="text"
            className='p-3 border border-gray-300 rounded-md focus:outline-none text-black'
            placeholder="Full Name"
            required
          />
        )}

        {!isDataSubmitted && (
          <>
            <input
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
              placeholder='Email Address'
              required
              className='p-3 border border-gray-300 rounded-md focus:outline-none text-black'
            />
            <input
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              type="password"
              placeholder='Password'
              required
              className='p-3 border border-gray-300 rounded-md focus:outline-none text-black'
            />
          </>
        )}

        {currState === "Sign up" && isDataSubmitted && (
          <textarea
            onChange={(e) => setBio(e.target.value)}
            value={bio}
            rows={4}
            className='p-3 border border-gray-300 rounded-md focus:outline-none text-black'
            placeholder='Provide a short bio...'
            required
          ></textarea>
        )}

        <button
          type='submit'
          className='py-3 bg-gradient-to-r from-[#ff0050] via-[#ff7a00] to-[#ffe600] text-white font-semibold rounded-md cursor-pointer shadow-lg'
        >
          {currState === "Sign up" ? "Create Account" : "Login Now"}
        </button>

        {/* Centered link */}
        <div className='text-sm text-white text-center'>
          {currState === "Sign up" ? (
            <p>
              Already have an account?{" "}
              <span
                onClick={() => {
                  setCurrState("Login");
                  setIsDataSubmitted(false);
                }}
              className='font-semibold text-white underline underline-offset-2 cursor-pointer hover:text-yellow-100'
              >
                Login here
              </span>
            </p>
          ) : (
            <p>
              Don't have an account?{" "}
              <span
                onClick={() => setCurrState("Sign up")}
                className='font-semibold text-yellow-300 cursor-pointer'
              >
                Click here
              </span>
            </p>
          )}
        </div>
      </form>
    </div>
  )
}

export default LoginPage
