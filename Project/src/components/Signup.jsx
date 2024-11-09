import React, {useState} from 'react'
import authService from '../appwrite/auth'
import { Link, Navigate } from 'react-router-dom'
import { login } from '../store/authSlice'
import { Button, Input, Logo } from './index.js';
import { useDispatch } from 'react-redux';


function Signup() {
  return (
    <div>Signup</div>
  )
}

export default Signup