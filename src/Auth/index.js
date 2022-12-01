import React from 'react';
import { useLocation, Navigate } from 'react-router-dom';

function Auth() {
  const setToken = (token) => {
    localStorage.setItem('temitope', token); // make up your own token
  };
  const fetchToken = (token) => {
    return localStorage.getItem('temitope');
  };
}

export default Auth;
