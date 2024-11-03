import React from 'react'
import {Container, Logo, LogOutBtn} from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'




function Header() {
  const authStatus = useSelector((state) =>state.auth.status)
  const navigate = useNavigate()
  const navItem = [
    {
      name: 'Home',
      slug: "/",
      active: true
    }, 
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
  },
  {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
  },
  {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
  },
  {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
  },
  ]

  return (
    <header className='py-4 shadow bg-gray-500 '>
      <Container>
        <nav></nav>
      </Container>
    </header>
  )
}
import { formatProdErrorMessage } from '@reduxjs/toolkit'

export default Header