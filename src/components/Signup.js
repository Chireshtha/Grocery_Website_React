import React, { useState } from 'react'
import { FaRegUser, FaEnvelope, FaKey, FaUnlock } from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'
import Validation from './Signupvalidation'
import axios from 'axios'

const Signup = () => {
    const [values, setValues] = useState({ name: '', email: '', password: '' })
    const [errors, setErrors] = useState({})
    const navigate = useNavigate();

    const handleInput = (e) => {
        setValues(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(Validation(values));

        if (errors.name === "" && errors.email === "" && errors.password === "") {
            axios.post('http://127.0.0.1:5000/signup', values, {
            headers: {
                'Content-Type': 'application/json' // Set the Content-Type header to JSON
            }
        })  // Update the URL with your Flask server's address
                .then((res) => {
                    console.log("Registered Successfully", res.data);
                    navigate('/login');
                })
                .catch((err) => 
                console.error("Error during registration:", err));
        }
    };

    return (
        <div>
            <div className='d-flex justify-content-center align-items-center bg-dark vh-100'>
                <div className='bg-blue p-3 rounded w-50 p-5'>
                    <h3 className='p-4 rounded w-25s text-white text-center'>Create your account</h3>
                    <form id='form' className='col-md-3 mx-auto w-50' method='post' onSubmit={handleSubmit}>
                        <div className='input-group' >
                            <div className='input-group-prepend mb-2'>
                                <span className='input-group-text'> <i className='fa fa-reg-user'> <FaRegUser /> </i> </span>
                            </div>
                            <input type='text' className='form-control mb-2' name='name' placeholder='Username' onChange={handleInput} autoComplete="current-name" />
                        </div>
                        {errors.name && <span className='text-danger'>{errors.name}</span>}
                        <div className='input-group' >
                            <div className='input-group-prepend mb-2'>
                                <span className='input-group-text'> <i className='fa fa-envelope'> <FaEnvelope /> </i> </span>
                            </div>
                            <input type='email' className='form-control mb-2' name='email' placeholder='Email' onChange={handleInput} autoComplete="current-email" />
                        </div>
                        {errors.email && <span className='text-danger'>{errors.email}</span>}
                        <div className='input-group'>
                            <div className='input-group-prepend mb-2'>
                                <span className='input-group-text'> <i className='fa fa-key'> <FaKey /> </i> </span>
                            </div>
                            <input type='password' className='form-control mb-2' name='password' placeholder='Password' onChange={handleInput} autoComplete='current-password' />
                        </div>
                        {errors.password && <span className='text-danger'>{errors.password}</span>}

                        <div>
                            <button type='submit' className='btn btn-danger mb-4 my-2 w-100 rounded-0 fs-5'>
                                <i className='fa fa-unlock'> <FaUnlock /> </i><strong>Signup</strong></button>
                        </div>
                        <div>
                            <p className='text-center text-lg text-white fs-5'><b>Already have an account?</b></p>
                            <Link to='/Login' className='btn btn-Link border w-100 rounded-0 p-3 text-white fs-5'>Login</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Signup
