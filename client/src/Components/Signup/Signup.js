import axios from 'axios';
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
    const [error, setError] = useState("")
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
    })
    const navigate = useNavigate()
    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

    //api for craeting new users...
        const url = "http://localhost:5000/api/users";
         axios.post(url, data).then((response, error) => {
            navigate("/login")
            

        }).catch(error => {
            console.log(error)
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        })
    };

    return (
        <div className='signup_container'>
            <div className='signup_form_container'>
                <div className='left'>
                    <h1>Welcome Back</h1>
                    <Link to="/login">
                        <button type='button' className='white_btn'>
                            Sign in
                        </button>
                    </Link>
                </div>
                <div className='right'>
                    <form className='form_container' onSubmit={handleSubmit}>
                        <h1>Create Account</h1>
                        <input
                            className='input'
                            type="text"
                            placeholder='First Name'
                            name="firstName"
                            value={data.firstName}
                            required
                            onChange={handleChange}
                        />
                        <input
                            className='input'
                            type="text"
                            placeholder='Last Name'
                            name="lastName"
                            value={data.lastName}
                            required
                            onChange={handleChange}
                        />
                        <input
                            className='input'
                            type="email"
                            placeholder='Email'
                            name="email"
                            value={data.email}
                            required
                            onChange={handleChange}
                        />
                        <input
                            className='input'
                            type="password"
                            placeholder='password'
                            name="password"
                            value={data.password}
                            required
                            onChange={handleChange}
                        />
                        {error && <div className='error_msg'>{error}</div>}
                        <button type='submit' className='green_btn'>
                            Sign Up
                        </button>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Signup;