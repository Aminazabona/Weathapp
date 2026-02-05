import React from 'react'
import { CiSearch } from "react-icons/ci";
import "./Header.css"
function Header() {
    return (
        <div className="header">
            <p>Amina Weather-app</p>
            <div className='search'>
              <input
            type='text'
            placeholder='Enter a town'
            />
            <button><CiSearch /></button>
            </div>

        </div>
    );
}

export default Header

