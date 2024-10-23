import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { signUpUser } from '../store/slice/authSlice';
import { useDispatch } from 'react-redux';
import dowloard from '../image/dowloard.jpg'
import CustomInput from './CustomInput';

const SignUpForm = ({ onClick, isSignUp }) => {
  const { register, handleSubmit, control, formState: { errors, isSubmitting }, getValues } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  // const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log('Data before submission:', data);
    dispatch(signUpUser({
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      country: data.country,
      gender: data.gender,
      picture: data.picture[0], // File input for profile picture
    }));
  };

  return (
    <div className=' w-full '>
      <div className=' max-w-7xl mx-auto border shadow-lg rounded-lg  grid grid-cols-2 mt-2 '>
        <div className=' rounded-tl-lg rounded-bl-lg p-4 flex flex-col justify-center    bg-cover bg-center'
          style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2021/06/29/11/19/cornflower-6373897_1280.jpg')` }} // Your image URL here

        >
          <h2 className='text-center text-3xl font-bold mb-4'>Sign Up</h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* First Name Field */}
            <div className='grid grid-cols-2 mt-2 h-10 mb-[20px]'>
              <label htmlFor="firstName">First Name:</label>
              <Controller
                control={control}
                {...register('firstName', {
                  required: 'First name is required',
                })}
                render={({ field: { onChange, onBlur, value } }) => (
                  <div className=''>
                    <CustomInput placeholder='Enter first name' className='w-full' onBlur={onBlur} onChange={onChange} value={value} />
                    <div >
                      <p className="font-light text-xs text-red-500">
                        {errors.firstName?.message}
                      </p>
                    </div>
                  </div>
                )}
                name="firstName"
              />
              {/*  classname= ''<div>
                <p className="font-light text-xs text-red-500">
                  {errors.firstName?.message}
                </p>
              </div> */}
            </div>

            {/* Last Name Field */}
            <div className='grid grid-cols-2 mt-2 h-10 mb-[20px]'>
              <label htmlFor="lastName">Last Name:</label>
              <Controller
                control={control}
                {...register('lastName', {
                  required: 'Last name is required',
                })}
                render={({ field: { onChange, onBlur, value } }) => (
                  <div className=''>
                    <CustomInput className='' placeholder='Enter last name' onBlur={onBlur} onChange={onChange} value={value} />
                    <div classname=''>
                      <p className="font-light text-xs text-red-500">
                        {errors.lastName?.message}
                      </p>
                    </div>
                  </div>
                )}
                name="lastName"
              />
            </div>

            {/* Email Field */}
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
                    <div classname=''>
                      <p className="font-light text-xs text-red-500">
                        {errors.email?.message}
                      </p>
                    </div>
                  </div>
                )}
                name="email"
              />
            </div>

            {/* Password Field */}
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
                      <div >
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

            {/* Confirm Password Field */}
            <div className='grid grid-cols-2 mt-2 h-10 mb-[20px]'>
              <label htmlFor="confirmPassword">Confirm Password:</label>
              <Controller
                control={control}
                {...register('confirmPassword', {
                  required: 'Confirm password is required',
                  validate: value => value === getValues('password') || 'Passwords do not match',
                })}
                render={({ field: { onChange, onBlur, value } }) => (
                  <div className='relative '>
                    <CustomInput
                      type={showConfirmPassword ? 'text' : 'password'}
                      onBlur={onBlur}
                      onChange={onChange}
                      value={value}
                      placeholder='Enter confirm Password'
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    <div classname=''>
                      <p className="font-light text-xs text-red-500">
                        {errors.confirmPassword?.message}
                      </p>
                    </div>
                  </div>
                )}
                name="confirmPassword"
              />
            </div>

            {/* Gender Field */}
            <div className='grid grid-cols-2 mt-2 h-10 mb-[20px]'>
              <label htmlFor="gender">Gender:</label>
              <div>

                <div className='flex items-center justify-between'>
                  <div className='pt-1 '>
                    <input className='mr-4' type="radio" id="male" name="gender" value="male" {...register('gender', { required: 'Gender is required' })} />
                    <label htmlFor="male">Male</label>
                  </div>
                  <div className='pt-1 ml-4'>
                    <input className='mr-4' type="radio" id="female" name="gender" value="female" {...register('gender', { required: 'Gender is required' })} />
                    <label htmlFor="female">Female</label>
                  </div>
                  <div className='pt-1 ml-4'>
                    <input className='mr-4' type="radio" id="other" name="gender" value="other" {...register('gender', { required: 'Gender is required' })} />
                    <label htmlFor="other">Other</label>
                  </div>
                </div>
                <div classname='' className='col-span-2'>
                  <p className="font-light text-xs text-red-500">
                    {errors.gender?.message}
                  </p>
                </div>
              </div>

              {/* Error message for gender */}
            </div>

            {/* Country Field */}
            <div className='grid grid-cols-2 mt-2 h-10 mb-[20px]'>
              <label htmlFor="country">Country:</label>
              <Controller
                control={control}
                {...register('country', { required: 'Country is required' })}
                render={({ field: { onChange, onBlur, value } }) => (
                  <div>
                    <select onBlur={onBlur} onChange={onChange} value={value}>
                      <option value="">Select Country</option>
                      <option value="pakistan">Pakistan</option>
                      {/* Add more country options */}
                    </select>
                    <div classname=''>
                      <p className="font-light text-xs text-red-500">
                        {errors.country?.message}
                      </p>
                    </div>
                  </div>
                )}
                name="country"
              />
            </div>

            {/* Profile Picture Field */}
            <div className='grid grid-cols-2 mt-2 h-10 mb-[20px]'>
              <label htmlFor="picture">Profile Picture:</label>
              <div>

                <input type="file" id="picture" {...register('picture', { required: 'Profile picture is required' })} />

                <div classname=''>
                  <p className="font-light text-xs text-red-500">
                    {errors.picture?.message}
                  </p>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className='flex flex-col justify-center items-center '>
              {/* <div> */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full py-3 px-4 text-white font-semibold rounded-lg transition duration-300 ease-in-out
                  ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 hover:shadow-lg'}`}>
                {isSubmitting ? 'Submitting...' : 'Sign Up'}
              </button>
              {/* </div> */}
              <div className='mt-4'>

                <button onClick={onClick} className='cursor-allowed'>
                  {isSignUp ? (
                    <>
                      If you have already account: <span className='text-blue-500 underline'>Sign In</span>
                    </>
                  ) : (
                    <>
                      Switch to : <span className='text-blue-500 underline'>Sign Up</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className='w-full h-[42rem]'>
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

export default SignUpForm;
