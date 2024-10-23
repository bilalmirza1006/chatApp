// src/components/SignInForm.js
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { signInUser } from '../store/slice/authSlice';
import CustomInput from './CustomInput';
import dowloard from '../image/dowloard.jpg'

// import { signInUser } from '../features/authSlice'; // Import the signInUser action

const SignInForm = ({ onClick, isSignUp }) => {
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm();
  const dispatch = useDispatch();
  const authState = useSelector((state) => state.auth);

  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log(data);

    // Dispatch signInUser action to Redux
    // Add error handling for authentication errors and loading state
    // Example:
    // if (authState.error) {
    //   alert(authState.error);
    // } else if (authState.loading) {
    //   // Show loading spinner or modal
    // } else {
    //   // Dispatch signInUser action with email and password from form data
    // }

    // Dispatch signInUser action with email and password from form data
    // Replace 'dispatch(signInUser({ email: data.email, password: data.password }))' with your actual action creator
    // Example: dispatch(signInUser({
    //   email: data.email,
    //   password: data.password,
    // }));

    // Example with Redux Toolkit
    // import { signInUser } from '../store/slice/authSlice';
    // dispatch(signInUser({
    //   email: data.email,
    //   password: data.password,
    dispatch(signInUser({
      email: data.email,
      password: data.password,
    }));
  };

  return (
    // <form onSubmit={handleSubmit(onSubmit)}>
    //   <div>
    //     <label htmlFor="email">Email:</label>
    //     <input
    //       type="email"
    //       id="email"
    //       {...register('email', { required: {value: true, message: 'email is required'}, pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })}
    //     />
    //     <p>{errors.email}</p>
    //     {/* {errors.email?.type === 'required' && <p>Email is required</p>} */}
    //     {/* {errors.email?.type === 'pattern' && <p>Invalid email format</p>} */}
    //   </div>
    //   <div>
    //     <label htmlFor="password">Password:</label>
    //     <input
    //       type={showPassword ? 'text' : 'password'}
    //       id="password"
    //       {...register('password', { required: true, minLength: 8 })}
    //     />
    //     <button type="button" onClick={() => setShowPassword(!showPassword)}>
    //       {showPassword ? <FaEyeSlash /> : <FaEye />}
    //     </button>
    //     {errors.password?.type === 'required' && <p>Password is required</p>}
    //     {errors.password?.type === 'minLength' && <p>Password must be at least 8 characters</p>}
    //   </div>
    //   <button type="submit" disabled={isSubmitting || authState.loading}>
    //     Sign In
    //   </button>

    //   {/* Display Loading, Error, and Success */}
    //   {authState.loading && <p>Loading...</p>}
    //   {authState.error && <p style={{ color: 'red' }}>{authState.error}</p>}
    //   {authState.isAuthenticated && <p>Welcome, {authState.user.firstName}!</p>}
    // </form>
    <div className=' w-full '>
      <div className=' max-w-7xl mx-auto border shadow-lg rounded-lg  grid grid-cols-2 mt-2 '>
        <div className=' rounded-tl-lg rounded-bl-lg p-4 flex flex-col justify-center    bg-cover bg-center'
          style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2020/07/14/13/39/cornflower-5404185_1280.jpg')` }} // Your image URL here

        >
          <h2 className='text-center text-3xl font-bold mb-10'>SignIn</h2>

          <form onSubmit={handleSubmit(onSubmit)} >
            <div className='grid grid-cols-2 mt-2 h-10 mb-[20px]'>
              <label htmlFor="email">Email:</label>
              <Controller
                control={control}
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Invalid email address',
                  },
                })}
                render={({ field: { onChange, onBlur, value } }) => (
                  <div>
                    <CustomInput placeholder='Enter email' onBlur={onBlur} onChange={onChange} value={value} />
                    <div className=''>
                      <p className="font-light text-xs text-red-500">
                        {errors.email?.message}
                      </p>
                    </div>
                  </div>
                )}
                name="email"
              />
            </div>
            <div className='grid grid-cols-2 mt-2 h-10 mb-[20px]'>
              <div className='col-span-1'>

                <label htmlFor="password">Password:</label>
              </div>
              <div className='col-span-1'>

                <Controller

                  control={control}
                  {...register('password', {
                    required: 'Password is required',
                    minLength: {
                      value: 8,
                      message: 'Password must be at least 8 characters long',
                    },
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%?&])[A-Za-z\d@$!%?&]{8,12}$/,
                      message: 'Password uppercase, lowercase, digit, and special character',
                    },
                  })}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <div className='relative col-span-2'>
                      <CustomInput
                        className='col-span-2 '
                        // style={{ background: 'red' }}
                        type={showPassword ? 'text' : 'password'}
                        onBlur={onBlur}
                        onChange={onChange}
                        value={value}
                        placeholder='Enter Password'
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        {showPassword ? <FaEyeSlash /> : <FaEye />}
                      </button>
                      <div classname='' className=''>
                        <p className="font-light text-xs text-red-500">
                          {errors.password?.message}
                        </p>
                      </div>
                    </div>
                  )}
                  name="password"
                />
              </div>

            </div>
            <div className='flex flex-col justify-center items-center '>
              {/* <div> */}


              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 text-white font-semibold rounded-lg transition duration-300 ease-in-out
                  ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 hover:shadow-lg'}
                  `}>
                {isSubmitting ? 'Submitting...' : 'SignIn'}
              </button>
              {/* </div> */}
              <div className='mt-4'>

                <button onClick={onClick} className='cursor-allowed'>
                  {isSignUp ? (
                    <>
                      Switch to : <span className='text-blue-500 underline'>Sign In</span>
                    </>
                  ) : (
                    <>
                      If you don't account : <span className='text-blue-500 underline'>Sign Up</span>
                    </>
                  )}                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='w-full h-[42rem] rounded-tr-lg rounded-br-lg'>
          <img
            src={dowloard}
            alt="Image"
            className='w-full h-[42rem] object-cover rounded-tr-lg rounded-br-lg'
          />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
