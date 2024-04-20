import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons'

function Sidebar() {
    return (
        <>
            <div className='w-72 h-screen bg-white border-2 border-red-300'>
                <div className='flex justify-between items-center gap-4 py-[10px] bg-blue-600 h-20 px-12'>
                    <div><img src="img/logo/logo2.png" alt="" className='h-14' /></div>
                    <div className='text-white text-xl font-bold'>Attendance</div>
                </div>
                <div className=' flex flex-col font-semibold text-lg text-zinc-600'>
                    <div>
                        <div className='px-7 py-3 '>
                        <FontAwesomeIcon icon={fas.faTachometerAlt} />
                            Dashboard
                        </div>
                        <hr class="w-64 h-[1px] mx-auto my- bg-slate-500 border-0 rounded"></hr>
                    </div>
                    <div className='py-3'>
                        <div className='px-7 text-gray-400 font-bold tracking-widest'>Features</div>
                        <div className='px-7 '>
                            <div className=''>
                            <FontAwesomeIcon icon={fas.faWindowMaximize} />
                                Personal
                            </div>
                            <div>
                            <FontAwesomeIcon icon={fas.faTable} />
                                TimeTable
                            </div>
                            <div>
                            <FontAwesomeIcon icon={fas.faWpforms} />
                                Exam
                            </div>
                            <div>
                            <FontAwesomeIcon icon={fas.faReceipt} />
                                Fee
                            </div>
                        </div>
                        <hr class="w-64 h-[1px] mx-auto my-2 bg-slate-500 border-0 rounded"></hr>
                    </div>
                    <div className=''>
                        <div className='px-7 text-gray-400 font-bold tracking-widest'>
                            ContactUs
                        </div>

                        <div className='px-7'>
                            <div>
                        <FontAwesomeIcon icon={fas.faTachometerAlt} />
                                ContactUs
                            </div>

                            <div className=''>
                        <FontAwesomeIcon icon={fas.faTachometerAlt} />
                                Feed-Back
                            </div>

                        </div>
                        <hr class="w-64 h-[1px] mx-auto my-2 bg-slate-500 border-0 rounded"></hr>
                    </div>
                    <div className='px-7 text-gray-400 font-bold tracking-widest'>
                        version 1.0
                    </div>
                </div>
            </div>
        </>
    )
}

export default Sidebar