"use client"
import React, { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'



const Navbar = () => {

    const { scrollY } = useScroll();
    const [hidden, setHidden] = useState(false);

    useMotionValueEvent(scrollY, "change", (latest) => {

        const prev = scrollY.getPrevious() ?? 0;
        if (latest > prev && latest > 150) {

            setHidden(true);

        } else {
            setHidden(false);
        }
    });


    return (
        <motion.nav
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{
                backgroundColor: hidden ? 'white' : 'black',
                transition: 'background-color 0.3s ease',
                color: hidden ? 'black' : 'white',
            }}
            className={`sticky left-0 top-0 flex justify-between px-10 py-4 items-center`}
        >
            <Link className="text-xl font-semibold underline" href={'/'}>ReScore</Link>
            <div className="flex gap-4">
                <Button className="bg-[#1398aa]">Login</Button>
                <Button className="bg-[#1398aa] ">Sign Up</Button>
            </div>

        </motion.nav >
    )
}

export default Navbar
