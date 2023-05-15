import React from 'react';
import './login.css';
import { useForm } from './hooks';
import { validateForm } from './utils';
import {AiFillEyeInvisible, AiFillEye} from 'react-icons/ai';
import loginData from '../../common/language/strings';
const Login: React.FC = () => {
  const initialValues = { email: '', password: '' };
  const { values, handleChange, handleSubmit, errors, open, toggle } = useForm(
    initialValues,
    validateForm
  );

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full max-w-xs">
        <div className="bg-white rounded-lg shadow-lg p-8 bg-secondary">
          <div className="mb-8">
          </div>
          <h1 className="text-center text-primary font-bold mb-3">{loginData.title}</h1>
          <form name="myform" onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block text-quaternary font-bold mb-2">
                {loginData.email}
              </label>
              <input
                name="email"
                id="email"
                className="block bg-primary w-full border-gray-300 border rounded py-2 px-4"
                value={values.email}
                onChange={handleChange}
              />
              {errors.includes('Email is required') && (
                <span className="text-red">Email is required</span>
              )}
              {errors.includes('Email is invalid') && (
                <span className="text-red">Email is invalid</span>
              )}
            </div>
            <div className="mb-4 relative">
              <label htmlFor="password" className="block text-quaternary font-bold mb-2">
                {loginData.password}
              </label>
              <input
                name="password"
                id="password"
                type = {(open === false)? 'password':'text'}
                className="block bg-primary w-full border-gray-300 border rounded py-2 px-4"
                value={values.password}
                onChange={handleChange}
              />
              <div className='text-2xl absolute top-10 right-5'>
                    {
                      (open === false)? <AiFillEyeInvisible onClick={toggle}/>:<AiFillEye onClick={toggle}/>
                    } 
              </div>
              {errors.includes('Password is required') && (
                <span className="text-red">Password is required</span>
              )}
              {errors.includes('Password must be at least 6 characters long') && (
                <span className="text-red">Password must be at least 6 characters long</span>
              )}
            </div>
            <div className="mb-4 text-center">
              <a href="#" className="link text-quaternary">{loginData.forgot_password}</a>
            </div>
            <div className="flex justify-center">
              <button type="submit" className="btn bg-primary">{loginData.submit}</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;