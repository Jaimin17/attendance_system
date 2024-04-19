import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, NavLink } from 'react-router-dom';

export default function Dashboard() {
    return (
        <>
                <nav className="bg-blue-400 w-full flex items-center justify-between px-5 ">
            <div>
                <button>
                    {/* <FontAwesomeIcon icon={fas.faHouse}/> */}
                </button>
            </div>
            <div className='flex gap-5 h-20 justify-center items-center'>
                <div className='flex'>
                    <div>I</div>
                    <div>N</div>
                    <div>M</div>
                    <div>T</div>
                </div>
                <div>
                    i n
                </div>
            </div>
            
        </nav>
            
        </>
    );
}