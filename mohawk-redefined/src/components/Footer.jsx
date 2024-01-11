
import { Link } from 'react-router-dom';

export default function Footer() {
    return (
        <footer className="bg-gray-200 border-y">
            <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div className="md:flex md:justify-center items-center">
                    <div className="md:mb-0 flex flex-col items-center">
                        <Link to="/about">
                            <img
                                src="./assets/redefined-logo.png"
                                className="h-30 w-36 rounded-full px-2 py-2 bg-white"
                                alt="Redefied Logo"
                            />
                        </Link>
                        <div className='mb-6 md:mb-0 flex space-x-3 mt-4'>
                            <a href="mailto:our@email.com" className="text-blue-800 hover:text-blue-900">
                            <img src="./assets/email.png" alt="Email Image"
                            className="w-14 h-14 rounded-full bg-gray-200 hover:bg-white p-1"
                            />
                            </a>

                            <a href="https://discord.com" className="text-blue-800 hover:text-blue-900">
                            <img src="./assets/discord.png" alt="Discord Image"
                            className="w-14 h-14 rounded-full bg-gray-200 hover:bg-white p-2"
                            />
                            </a>

                            <a href="https://instagram.com" className="text-blue-800 hover:text-blue-900">
                            <img src="./assets/instagram-logo.png" alt="Instagram Image"
                            className="w-14 h-14 rounded-full bg-gray-200 hover:bg-white p-2"
                            />
                            </a>

                            <a href="https://www.linkedin.com/in/your-linkedin-profile" className="text-blue-800 hover:text-blue-900">
                            <img src="./assets/linkedin-logo.png" alt="Linkedin Image"
                            className="w-14 h-14 rounded-full bg-gray-200 hover:bg-white p-2"
                            />
                            </a>

                        </div>
                    </div>
                </div>
                <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8" />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <span className=" text-black sm:text-center">
                        © 2024 &nbsp;
                        <a href="./components/About" className="hover:underline hover:text-orange-600">
                         Mohawk-Redefined
                        </a>
                        . All Rights Reserved.
                    </span>
                </div>
            </div>
        </footer>
    );
}