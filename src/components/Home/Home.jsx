import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function Home() {
    return (
        <>
        <div>
                    <ul className='flex gap-5 justify-center items-center mb-5'> 
                        <li>
                            <NavLink to={"/login"}>
                                Login
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={"/signup"}>
                                Signup
                            </NavLink>
                        </li>
                    </ul>
                </div>
        </>


    );
}