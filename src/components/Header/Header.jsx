import React from 'react'
import {Link, NavLink} from 'react-router-dom'

export default function Header() {
  return (
      <header >
          <nav className='flex flex-col'>
                 <div>
                    <ul className='flex gap-5 justify-center items-center mb-5'> 
                        <li>
                            <NavLink to={"/"}>
                                Home
                            </NavLink>
                        </li>
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
          </nav>
      </header>
  );
}