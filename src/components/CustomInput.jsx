import React from 'react';

function CustomInput({ type = "text", className = "", placeholder = "Enter text...", ...props }) {
  return (
    <div className=''>
      <input 
        type={type} 
        className={` border-2 border-gray-400  rounded-md h-10 p-1 w-full ${className}`} 
        placeholder={placeholder}
        {...props}
      />
    </div>
  );
}

export default CustomInput;
