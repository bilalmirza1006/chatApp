import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useSignInMutation } from '../store/slice/apiSlice';
import CustomInput from './CustomInput';
import dowloard from '../image/dowloard.jpg';
import { useSelector } from 'react-redux';

const SignInForm = ({ onClick, isSignUp }) => {
  const { register, handleSubmit, control, formState: { errors, isSubmitting } } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const [signIn, { isLoading }] = useSignInMutation();

  const onSubmit = async (data) => {
    try {
      const response = await signIn(data).unwrap();
      alert('Sign-In Successful!');

      console.log('Response:', response);
    } catch (err) {
      console.error('Sign-In Failed:', err);
      alert(err?.data?.message || 'An error occurred during sign-in.');
    }
  };

  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto border shadow-lg rounded-lg grid grid-cols-2 mt-2">
        <div
          className="rounded-tl-lg rounded-bl-lg p-4 flex flex-col justify-center bg-cover bg-center"
          style={{ backgroundImage: `url('https://cdn.pixabay.com/photo/2020/07/14/13/39/cornflower-5404185_1280.jpg')` }}
        >
          <h2 className="text-center text-3xl font-bold mb-10">Sign In</h2>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Field */}
            <div className="grid grid-cols-2 mt-2 h-10 mb-5">
              <label htmlFor="email" className="col-span-1">Email:</label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: 'Email is required',
                  pattern: {
                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                    message: 'Invalid email address',
                  },
                }}
                render={({ field }) => (
                  <div className="col-span-1">
                    <CustomInput
                      placeholder="Enter email"
                      {...field}
                    />
                    {errors.email && (
                      <p className="font-light text-xs text-red-500">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Password Field */}
            <div className="grid grid-cols-2 mt-2 h-10 mb-5">
              <label htmlFor="password" className="col-span-1">Password:</label>
              <Controller
                name="password"
                control={control}
                rules={{
                  required: 'Password is required',
                }}
                render={({ field }) => (
                  <div className="relative col-span-1">
                    <CustomInput
                      type={showPassword ? 'text' : 'password'}
                      placeholder="Enter password"
                      {...field}
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.password && (
                      <p className="font-light text-xs text-red-500">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                )}
              />
            </div>

            {/* Submit Button */}
            <div className="flex flex-col justify-center items-center">
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className={`w-full py-3 px-4 text-white font-semibold rounded-lg transition duration-300 ease-in-out ${
                  isSubmitting || isLoading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-indigo-500 hover:shadow-lg'
                }`}
              >
                {isSubmitting || isLoading ? 'Submitting...' : 'Sign In'}
              </button>

              {/* Switch to Sign Up */}
              <div className="mt-4">
                <button onClick={onClick} className="cursor-pointer">
                  {isSignUp ? (
                    <span>Switch to: <span className="text-blue-500 underline">Sign In</span></span>
                  ) : (
                    <span>If you don’t have an account: <span className="text-blue-500 underline">Sign Up</span></span>
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Image Section */}
        <div className="w-full h-[42rem] rounded-tr-lg rounded-br-lg">
          <img
            src={dowloard}
            alt="Sign-In"
            className="w-full h-[42rem] object-cover rounded-tr-lg rounded-br-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
