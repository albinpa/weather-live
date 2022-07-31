import React from 'react';
import './Login.css';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom';


function Login() {
    const [error, setError] = useState("")
    const [data, setData] = useState({

        email: "",
        password: "",
    })

    const handleChange = ({ currentTarget: input }) => {
        setData({ ...data, [input.name]: input.value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
     //api call for login...
        const url = "http://localhost:5000/api/auth";
        const { data: res } = axios.post(url, data).then((response, error) => {
            localStorage.setItem("token", res);
            window.location = "/";

        }).catch(error => {
            console.log(error)
            if (error.response && error.response.status >= 400 && error.response.status <= 500) {
                setError(error.response.data.message)
            }
        })
    }

    return (
        <div className='login_container'>
            <div className='login_form_container'>
                <div className='left'>
                    <form className='form_container' onSubmit={handleSubmit}>
                        <h1>Login to your  Account</h1>

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
                            Sign In
                        </button>
                    </form>
                </div>
                <div className='right'>
                    <h1>New here... </h1>
                    <Link to="/signup">
                        <button type='button' className='white_btn'>
                            Sign Up
                        </button>
                    </Link>

                </div>
            </div>
        </div>

    )

}

export default Login;