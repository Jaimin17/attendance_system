import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import ReCAPTCHA from 'react-google-recaptcha'
import Login from '../login/Login'

const SignUp = () => {

    function onChange(value) {
        console.log("Captcha value:", value);
      }

    return (
        <>
            <section className="flex flex-col items-center pt-6">
                <div
                    className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 ">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">Create an
                            account
                        </h1>
                        <form className="space-y-4 md:space-y-6" method="POST">
                            <div className='sm:flex sm:flex-row sm:gap-3'>
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">First name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="" required="" />
                                </div>
                                <div>
                                    <label for="name" className="block mb-2 text-sm font-medium text-gray-900 ">Last name</label>
                                    <input type="text" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="" required="" />
                                </div>
                            </div>
                            <div>
                                <label for="email" className="block mb-2 text-sm font-medium text-gray-900 ">Email Id</label>
                                <input type=" email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " placeholder="" required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" />
                            </div>
                            <div>
                                <label for="password" className="block mb-2 text-sm font-medium text-gray-900 ">Confirm Password</label>
                                <input type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5 " required="" />
                            </div>
                            <div>
                            {/* <ReCAPTCHA
                                sitekey="6LcK_JopAAAAAB9Z4Z2cNqA2yqQPOu0z5keAFEAc"
                                onChange={onChange}
                            /> */}
                            </div>
                            <button type="submit" className="w-full text-white bg-indigo-600 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "><a href="/">Create an account</a></button>
                            <p className="text-sm font-light text-gray-500 ">Already have an account? 
                            <a className="font-medium text-indigo-600 hover:underline " href="/login"> Login here</a>
                            </p>
                        </form>
                    </div>
                </div>
            </section>
        </>
    )
}

export default SignUp