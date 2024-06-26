import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/authContext';

const Login = () => {
  const [inputs, setInputs] = useState({
    username: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const {login } = useContext(AuthContext);

  const handleChange = (e) => {
    setError("");
    setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      console.log(inputs);
      await login(inputs);
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