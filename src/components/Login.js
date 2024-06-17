import React, { useState } from 'react'
import { FaEnvelope, FaKey, FaLock } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Loginvalidation'
import axios from 'axios'
const Login = () => {

    const [values, setValues] = useState({ email: '', password: '' });
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }));
    }
    // Update React login component
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values))

        if (errors.email === "" && errors.password === "") {
            axios.post('http://127.0.0.1:5000/login', values, {
            headers: {
                'Content-Type': 'application/json' // Set the Content-Type header to JSON
            }
        })
                .then(res => {
                    if (res.data.message === 'Login successful') {
                        console.log("loggedin Successfully", res.data);
                        navigate('/');
                    } else {
                        alert('Invalid email or password');
                    }
                })
                .catch(err => {
                    console.error('Login Error:', err);
                    alert('An error occurred during login. Please try again later.');
                });
        }
    };
    return (
        <div>
            <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
                <div className='bg-blue p-3 rounded w-50 p-5'>
                    <h3 className='p-4 rounded w-25s text-white text-center'>Login your credential</h3>
                    <form id='form' className='col-md-3 mx-auto w-50' method='post' onSubmit={handleSubmit}>
                        <div className='input-group' >
                            <div className='input-group-prepend mb-2'>
                                <span className='input-group-text'> <i className='fa fa-envelope'> <FaEnvelope /> </i> </span>
                            </div>
                            <input type='email' className='form-control mb-2' name='email' placeholder='Email' onChange={handleInput}  autoComplete="current-email"/>
                        </div>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                        <div className='input-group'>
                            <div className='input-group-prepend mb-2'>
                                <span className='input-group-text'> <i className='fa fa-key'> <FaKey /> </i> </span>
                            </div>
                            <input type='password' className='form-control mb-2' name='password' placeholder='Password' onChange={handleInput} autoComplete="current-password" />
                        </div>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}
                        <div>
                            <button type='submit' className='btn btn-success mb-4 my-2 w-100 rounded-0 fs-5'>
                                <i className='fa fa-lock'> <FaLock /> </i><strong>Login</strong></button>
                        </div>
                        <div>
                            <p className='text-center text-lg text-white fs-5'><b>Don't have an account?</b></p>
                            <Link to='/Signup' className='btn btn-Link border w-100 rounded-0 p-3 text-white fs-5'>Create Account</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
}

export default Login
