import React from 'react'
import SignUp from '../signup/SignUp'
import { NavLink, Link } from 'react-router-dom'

const Login = () => {

    const handlesubmit = () => {
        // Complete Backend

    }

    return (
        <>
            <div className="bg-gray-50 ">
                <div className="flex min-h-[80vh] flex-col justify-center py-12 sm:px-6 lg:px-8">
                    <div className="text-center sm:mx-auto sm:w-full sm:max-w-md">
                        <h1 className="text-3xl font-extrabold text-gray-900 ">
                            Sign in
                        </h1>
                    </div>
                    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                        <div className="bg-white  px-4 pb-4 pt-8 sm:rounded-lg sm:px-10 sm:pb-6 sm:shadow">
                            <form className="space-y-6" onSubmit={handlesubmit}>
                                <div>
                                    <label for="email" className="block text-sm font-medium text-gray-700 ">Email address /
                                        Username</label>
                                    <div className="mt-1">
                                        <input id="email" type="text" data-testid="username" required=""
                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500  sm:text-sm"
                                            value="" />
                                    </div>
                                </div>
                                <div>
                                    <label for="password" className="block text-sm font-medium text-gray-700 ">Password</label>
                                    <div className="mt-1">
                                        <input id="password" name="password" type="password" data-testid="password"
                                            autocomplete="current-password" required=""
                                            className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
                                            value="" />
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-center">
                                        <input id="remember_me" name="remember_me" type="checkbox"
                                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500  disabled:cursor-wait disabled:opacity-50" />
                                        <label for="remember_me" className="ml-2 block text-sm text-gray-900 ">Remember me</label>
                                    </div>
                                    <div className="text-sm">
                                        <a className="font-medium text-indigo-400 hover:text-indigo-500" href="">
                                            Forgot your password?
                                        </a>
                                    </div>
                                </div>

                                <div>                                    
                                        <button data-testid="login" type="submit"
                                            className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2  disabled:cursor-wait disabled:opacity-50">
                                            <span className="absolute inset-y-0 left-0 flex items-center pl-3">
                                                <svg className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                                                    xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor"
                                                    aria-hidden="true">
                                                    <path fill-rule="evenodd"
                                                        d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                                        clip-rule="evenodd"></path>
                                                </svg>
                                            </span>
                                            Sign In
                                        </button>
                                </div>
                            </form>

                            <div className="m-auto mt-6 w-fit md:mt-8">
                                <span className="m-auto ">Don't have an account?
                                    <a className="font-semibold text-indigo-600 " href="/signup">Create Account</a>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Login