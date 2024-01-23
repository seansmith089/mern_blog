import { Button, Label, TextInput } from 'flowbite-react';
import React from 'react'
import { Link } from 'react-router-dom';

function SignUp() {
  return (
    <div className="min-h-screen mt-20">
      <div className=" flex flex-col gap-5 md:flex-row md:items-center p-3 max-w-3xl mx-auto">
        {/* Left Side */}
        <div className="flex-1">
          <Link to="/" className=" text-4xl font-bold dark:text-white ">
            <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
              SeanSmithDev
            </span>
            Blog
          </Link>
          <p className="text-sm mt-5">
            This is a demo project. You can sign up with any email and password,
            or with Google
          </p>
        </div>

        {/* Right Side */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Email" />
              <TextInput type="text" placeholder="name@example.com" id="email" />
            </div>
            <div>
              <Label value="Password" />
              <TextInput type="text" placeholder="Password" id="password" />
            </div>

            <Button gradientDuoTone="purpleToPink" type="submit">Sign Up</Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/signin" className='text-blue-500'>Sign In</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUp