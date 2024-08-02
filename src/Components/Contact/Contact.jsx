import { FaUser } from "react-icons/fa";
import { HiOutlineMail, HiOutlinePhone } from "react-icons/hi";
import "./Contact.css"


const Contact = () => {
    return (
        <>
            <section className="container bg-white">
                <div className="px-6 py-12 mx-auto">
                    <div className="container lg:flex p-10 lg:items-center lg:-mx-6">
                        <div className="lg:w-1/2 lg:mx-6">
                            <h1 className="text-3xl font-bold text-black capitalize lg:text-3xl">
                                Contact us
                            </h1>
                            <p className="mt-5">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officiis dolores corporis nihil incidunt molestiae accusantium a aliquid rem voluptates facere.</p>
                            <div className="mt-6 space-y-8 md:mt-16">
                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1 mx-2 bg-[#6caf46] text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <span className="mx-2 text-black truncate w-72">
                                        Lorem Ipsum is simply dummy 478
                                        India, 33272002
                                    </span>
                                </p>
                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1 mx-2 bg-[#6caf46] text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>

                                    <span className="mx-2 text-black truncate w-72">+91 954 944 855452</span>
                                </p>
                                <p className="flex items-start -mx-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8 p-1 mx-2 bg-[#6caf46] text-white rounded-full" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>

                                    <span className="mx-2 text-gray-700 truncate w-72">info@gmail.com</span>
                                </p>
                            </div>
                        </div>
                        <div className="mt-8 lg:w-1/2 lg:mx-6">
                            <div
                                className="form w-full px-8 py-10 mx-auto overflow-hidden bg-[#f0fae0] rounded-xl">
                                <form className="">
                                    <div className="lg:flex gap-7">
                                        <label className="input input-bordered flex items-center gap-2 mb-5">
                                            <div className="flex items-center">
                                                <FaUser />
                                                <input type="text" placeholder="Name" className="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 rounded-md dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 border-none" />
                                            </div>
                                        </label>
                                        <label className="input input-bordered flex items-center gap-2">
                                            <div className="flex items-center">
                                                <HiOutlineMail className="text-xl" />
                                                <input type="email" placeholder="Email Address" className="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 rounded-md dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 border-none" />
                                            </div>
                                        </label>
                                    </div>
                                    <div className="mt-6">
                                        <label className="input flex items-center">
                                            <HiOutlinePhone className="text-lg" />
                                            <input type="text" placeholder="Phone" className="block w-full px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-500 rounded-md dark:placeholder-gray-600  dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 border-none" />
                                        </label>
                                    </div>
                                    <div className="mt-10">
                                        <textarea className="block w-full h-32 px-5 py-3 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40 border-none" placeholder="Message here..."></textarea>
                                    </div>
                                    <button className="form-button px-8 py-3 mt-6 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-black rounded-full hover:bg-blue-400 hover:duration-1000 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                                        get in touch
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;