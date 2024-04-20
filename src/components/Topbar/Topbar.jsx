import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {fas} from '@fortawesome/free-solid-svg-icons'

function Topbar() {
  return (
    <>
    <nav className="bg-blue-400 w-full flex items-center justify-between px-5 py-[10px]">
                <div>
                    <button >
                        <FontAwesomeIcon icon={fas.faBars} style={{color: 'white'}} size='xl'/>
                    </button>
                </div>
                <div className='flex gap-5 h-20 justify-center items-center'>
                    <div className='flex gap-12'>
                        <div>
                            <FontAwesomeIcon icon={fas.faSearch} style={{color: 'white'}} size='xl'/>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={fas.faBell} style={{color: 'white'}} size='xl'/>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={fas.faEnvelope} style={{color: 'white'}} size='xl'/>
                        </div>
                        <div>
                        <FontAwesomeIcon icon={fas.faList} style={{color: 'white'}} size='xl'/>
                        </div>
                    </div>
                    <div className='inline-block  h-20 min-h-[1em] w-0.5 self-stretch bg-neutral-100 '></div>
                    <div className='flex items-center justify-center gap-5'>
                        <div>
                            <img src="img/boy.png" alt="pic"  className='rounded-full h-9 w-9  border-2 border-white'/>
                        </div>
                        <div className=''>
                            Name
                        </div>
                    </div>
                </div>  
            </nav>
    </>
  )
}

export default Topbar