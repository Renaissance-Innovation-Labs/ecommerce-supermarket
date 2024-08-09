import React from 'react'
import { GrLocation } from "react-icons/gr";
import { HiOutlinePhone } from "react-icons/hi";
import { BiShoppingBag } from "react-icons/bi";
import { IoHeartOutline } from "react-icons/io5";
import { RiUserLine } from "react-icons/ri";
import { BsChevronDown } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import '../styles/Navbar.css'

const Navbar = () => {
  return (
    <>
    <div className='header'>
        <div className='top-header'>
            <div className='info'>
                <div className='email'>
                    <div className='icon'>
                        <GrLocation />
                    </div>
                    <p>superquick@gmail.com</p>
                </div>
                <div className='email'>
                    <div className='icon'>
                        <HiOutlinePhone />
                    </div>
                    <p>+234 8038 863362</p>
                </div>
            </div>

            <div className='prop'>
                <div className='email'>
                    <div className='icon'>
                        <BiShoppingBag />
                    </div>
                    <p>Cart</p>
                </div>
                <div className='email'>
                    <div className='icon'>
                        <IoHeartOutline />
                    </div>
                    <p>Favorite</p>
                </div>
                <div className='email'>
                    <div className='icon'>
                        <RiUserLine />
                    </div>
                    <p>Account</p>
                </div>

            </div>
            
        </div>
        <div className='mid-header'>
            <div className='logo'>
                <img src='assets/logo.svg' alt='logo'></img>
            </div>
            <div className='links'>
                <ul className='links'>
                    <li><a href='#'>Home</a></li>
                    <li className='drop'><a href='#'>Catgories <BsChevronDown /></a></li>
                    <li><a href='#'>Blog</a></li>
                    <li className='drop'><a href='#'>About Us <BsChevronDown /></a></li>
                </ul>
            </div>
            <div className='user'>
                <div className='btn-1'>
                    <button>Login</button>
                </div>

                <div className='btn-2'>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
        <div className='search-box'>
            <RiSearchLine className='search'/>
            <input type='text' className='search-box-1' placeholder='What are you looking for?'></input>
            <button>Search</button>
        </div>
    </div>
    </>
  )
}

export default Navbar