import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
<<<<<<< HEAD
import { ShopContext } from '../context/ShopContext';

const Navbar = () => {

    const [visible, setVisible] = useState(false);

    const { setShowSearch, getCartCount, navigate, token, setToken, setCartItems } = useContext(ShopContext);

    const logout = () => {
        navigate('/login')
        localStorage.removeItem('token')
        setToken('')
        setCartItems({})
    }

    return (
        <div className='flex items-center justify-between py-5 font-medium'>

            <Link to='/'><img src={assets.logo} className='w-36' alt="" /></Link>

            {/* Desktop Navigation */}
            <ul className='hidden sm:flex gap-5 text-sm'>
                <NavLink to='/' className='flex flex-col items-center gap-1 text-[#d5006d] hover:text-[#d5006d]'>
                    <p>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#d5006d] hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1 text-[#d5006d] hover:text-[#d5006d]'>
                    <p>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#d5006d] hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1 text-[#d5006d] hover:text-[#d5006d]'>
                    <p>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#d5006d] hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1 text-[#d5006d] hover:text-[#d5006d]'>
                    <p>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#d5006d] hidden' />
                </NavLink>
            </ul>

            {/* Actions: Search, Profile, Cart, Menu */}
            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection') }} src={assets.search_icon} className='w-5 cursor-pointer' alt="" />

                <div className='group relative'>
                    <img onClick={() => token ? null : navigate('/login')} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    {/* Dropdown Menu */}
                    {token && 
<div className='group-hover:block hidden absolute dropdown-menu right-0 pt-4 z-50'>
    <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-[#d5006d] text-white rounded shadow-lg'>
        <p className='cursor-pointer hover:text-gray-200'>My Profile</p>
        <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-gray-200'>Orders</p>
        <p onClick={logout} className='cursor-pointer hover:text-gray-200'>Logout</p>
    </div>
</div>}

                </div>

                <Link to='/cart' className='relative'>
                    <img src={assets.cart_icon} className='w-5 min-w-5' alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                <img onClick={() => setVisible(true)} src={assets.menu_icon} className='w-5 cursor-pointer sm:hidden' alt="" />
            </div>

            {/* Sidebar menu for small screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`}>
                <div className='flex flex-col text-[#d5006d]'>
                    <div onClick={() => setVisible(false)} className='flex items-center gap-4 p-3 cursor-pointer text-gray-600'>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:text-[#d5006d]' to='/'>HOME</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:text-[#d5006d]' to='/collection'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:text-[#d5006d]' to='/about'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisible(false)} className='py-2 pl-6 border hover:text-[#d5006d]' to='/contact'>CONTACT</NavLink>
                </div>
            </div>

=======
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {

    const [visible, setVisble] = useState(false)

    const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

    return (
        <div className='flex items-center justify-between py-5 font-medium' >

            <Link to='/'><img className='w-36' src={assets.logo} alt="" /></Link>

            <ul className='hidden sm:flex gap-5 text-sm text-gray-700'>
                <NavLink to="/" className='flex flex-col items-center gap-1'>
                    <p className='text-[#D5006D]'>HOME</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#FBB6D0] hidden' />
                </NavLink>
                <NavLink to='/collection' className='flex flex-col items-center gap-1'>
                    <p className='text-[#D5006D]'>COLLECTION</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#FBB6D0] hidden' />
                </NavLink>
                <NavLink to='/about' className='flex flex-col items-center gap-1'>
                    <p className='text-[#D5006D]'>ABOUT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#FBB6D0] hidden' />
                </NavLink>
                <NavLink to='/contact' className='flex flex-col items-center gap-1'>
                    <p className='text-[#D5006D]'>CONTACT</p>
                    <hr className='w-2/4 border-none h-[1.5px] bg-[#FBB6D0] hidden' />
                </NavLink>
            </ul>

            <div className='flex items-center gap-6'>
                <img onClick={() => { setShowSearch(true); navigate('/collection') }} className='w-5 cursor-pointer' src={assets.search_icon} alt="" />
                <div className='group relative'>
                    <img onClick={() => { navigate('/login') }} className='w-5 cursor-pointer' src={assets.profile_icon} alt="" />
                    
                    {/* Dropdown Menu */}
                    <div className='group-hover:block hidden absolute z-20 dropdown-menu right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-white text-[#D5006D] rounded'>
                            <p onClick={() => { }} className='cursor-pointer hover:text-[#D5006D]'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-[#D5006D]'>Orders</p>
                            <p onClick={() => { }} className='cursor-pointer hover:text-[#D5006D]'>Logout</p>
                        </div>
                    </div>
                </div>

                <Link to='/cart' className='relative'>
                    <img className='w-5 min-w-5' src={assets.cart_icon} alt="" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]'>{getCartCount()}</p>
                </Link>

                <img onClick={() => setVisble(true)} className='w-5 cursor-pointer sm:hidden' src={assets.menu_icon} alt="" />
            </div>

            {/* Sidebar Menu For Small Screens */}
            <div className={`absolute top-0 right-0 bottom-0 overflow-hidden bg-white transition-all ${visible ? 'w-full' : 'w-0'}`} >
                <div className='flex flex-col text-gray-600'>
                    <div onClick={() => setVisble(false)} className='flex items-center gap-4 p-3 '>
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="" />
                        <p>Back</p>
                    </div>
                    <NavLink onClick={() => setVisble(false)} to="/" className='py-2 pl-6 border'>HOME</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/collection' className='py-2 pl-6 border'>COLLECTION</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/about' className='py-2 pl-6 border'>ABOUT</NavLink>
                    <NavLink onClick={() => setVisble(false)} to='/contact' className='py-2 pl-6 border'>CONTACT</NavLink>
                </div>
            </div>
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
        </div>
    )
}

<<<<<<< HEAD
export default Navbar;
=======
export default Navbar
>>>>>>> 7a3663e7552d30f68f9013e5422f8a643d29c399
