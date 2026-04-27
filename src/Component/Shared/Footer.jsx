import React from 'react';
import { FaFacebookSquare, FaInstagramSquare } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
    return (
        <footer>
            <div className=' bg-green-950 w-full space-y-6 px-20 lg:px-0'>

                <div className='container mx-auto flex flex-col justify-center items-center text-center pt-20 space-y-5'>

                    <h2 className='text-white text-5xl font-bold'>KeenKeeper</h2>

                    <p className='text-gray-400 text-sm'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>

                    <h4 className='text-semibold text-white'>Social Links</h4>
                    <ul className='flex gap-2'>
                        <li className='bg-white w-7 h-7 rounded-full flex flex-col items-center justify-center'>
                            <FaInstagramSquare />
                        </li>
                        <li className='bg-white w-7 h-7 rounded-full flex flex-col items-center justify-center'>
                            <FaFacebookSquare />
                        </li>
                        <li className='bg-white w-7 h-7 rounded-full flex flex-col items-center justify-center'>
                            <FaXTwitter />
                        </li>
                    </ul>
                    <hr className="divider max-w-5xl w-full mx-auto mt-4 mb-0 text-gray-700"></hr>
                </div>

                <div className='w-full max-w-5xl mx-auto flex justify-between items-center text-sm text-gray-400 py-1 pb-20'>

                    <p>&copy; 2026 KeenKeeper. All rights reserved.</p>

                    <div className='flex gap-6'>
                        <p className='hover:text-white cursor-pointer'>Privacy Policy</p>
                        <p className='hover:text-white cursor-pointer'>Terms of Service</p>
                        <p className='hover:text-white cursor-pointer'>Cookies</p>
                    </div>

                </div>


            </div>
        </footer>
    );
};

export default Footer;