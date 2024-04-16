import React from 'react'

const Footer = () => {
    return (
        <div>


            <footer className="">
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
                    <div
                        className="flex flex-col items-center gap-4 rounded-lg bg-[#1398aa] p-6 shadow-lg sm:flex-row sm:justify-between"
                    >
                        <strong className="text-xl text-white sm:text-xl">Thank you for stopping by! </strong>

                        <a
                            className="inline-flex items-center gap-2 rounded-full border border-white bg-white px-8 py-3 text-[#1398aa] hover:bg-transparent hover:text-white focus:outline-none focus:ring active:bg-white/90"
                            href="https://shrivedkakde00.vercel.app/"
                            target='_blank'
                        >
                            <span className="text-sm font-medium"> Made By Me </span>

                            <svg
                                className="size-5 rtl:rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    stroke-linecap="round"
                                    stroke-linejoin="round"
                                    stroke-width="2"
                                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                                />
                            </svg>
                        </a>
                    </div>



                </div>
            </footer>
        </div>
    )
}

export default Footer
