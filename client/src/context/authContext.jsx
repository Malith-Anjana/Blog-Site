/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import proxy from "../proxy";


export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user") || null)
  );

  const api = axios.create({
    baseURL: `${proxy}`,
    withCredentials: true,
  });

  const login = async (inputs) => {
    const res = await api.post("/auth/login", inputs);
    console.log(res.data)
    setCurrentUser(res.data);
  };

  const logout = async () => {
    await api.post("/auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(currentUser))
  }, [currentUser])

  return(
    <AuthContext.Provider value={{currentUser, login, logout}}>
        {children}
    </AuthContext.Provider>
  )
};
