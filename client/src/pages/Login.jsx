import axios from 'axios';
import React from 'react'
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import proxy from '../proxy';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setError("");
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const api = axios.create({
        baseURL: `${proxy}`,
        withCredentials: true,
    });
      const res = await api.post('/auth/login', inputs);
      console.log(res)
      navigate('/');
    } catch (error) {
      setError(error.response.data)
    }
  };
  return (
    <div className='auth'>
    <h1>Login</h1>
    <form>
    <input type='text' placeholder='username' name='username' onChange={handleChange}/>
      <input type='password' placeholder='password' name='password' onChange={handleChange}/>
      <button onClick={handleSubmit}>Login</button>
      {error && <p>{error}</p>}
      <span> Don't you have an account? <Link to='/register'>Register</Link></span>
    </form>
    </div>
  )
}

export default Login