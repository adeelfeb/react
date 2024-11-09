import React, {useState} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { login as authLogin } from '../store/authSlice'
import {Button, Input, Logo} from './index.js'
import { useDispatch } from 'react-redux'
import authService from '../appwrite/auth'
import {useForm} from 'react-hook-form'

function Login() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const {register, handleSubmit} = useForm()
    const [error, setError] = useState('')

    const login = async(data)=>{
        setError("")
        try{

            // when user data is provided a session meaning loging the user in the website is being done here
            //since in appwriteauth the function has been written with provided template from the appwrite
            const session = await authService.login(data)
            if(session){

                //We simply get the data from appwrite after the session has been created with the user credentials
                const userData = await authService.getCurrentUser()


                // This will send a dispatch that means it will update the whole redux global variables
                if(userData) dispatch(authLogin(userData))


                //we use naviagte since using Link we would require the user to click the link navigate will simple 
                //move it as it is 
                navigate('/')
            }
        }
        catch(error){
            setError(error.messsage)
        }
    }

  return (
    <div>Login</div>
  )
}

export default Login