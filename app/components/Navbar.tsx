"use client"
import React, { useEffect, useState } from 'react'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import useRegisterModal from '@/hooks/useRegisterModal'
import useLoginModal from '@/hooks/useLoginModal'
import { User } from '@prisma/client'
import { signOut } from 'next-auth/react'
import { useUserStore } from '@/hooks/getUser'
import axios from 'axios'


interface NavbarProps {
    currentUser?: User | null;
}


function Navbar({ currentUser }) {

    const { scrollY } = useScroll()
    const [hidden, setHidden] = useState(false)
    const registerModal = useRegisterModal()
    const loginModal = useLoginModal()

    useMotionValueEvent(scrollY, "change", (latest) => {
        const prev = scrollY.getPrevious() ?? 0
        if (latest > prev && latest > 150) {
            setHidden(true)
        } else {
            setHidden(false)
        }
    })

    const onClickPrev = async () => {

        try {
            const response = await axios.get('/api/prevData');
            console.log(response)


        } catch (error) {
            console.error('Error fetching current data:', error);
        }
    };


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
            <div className="flex gap-4 ">
                {currentUser ? <div className="flex gap-4">

                    <Button className="bg-[#1398aa] hover:border " onClick={() => signOut()}>LogOut</Button>
                </div> : <>
                    <Button className="bg-[#1398aa] hover:border " onClick={loginModal.onOpen}>Login</Button>
                    <Button className="bg-[#1398aa] hover:border " onClick={registerModal.onOpen}>Sign Up</Button></>}
            </div>

        </motion.nav>
    )
}

export default Navbar
