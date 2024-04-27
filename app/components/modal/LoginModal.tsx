"use client"

import React, { useCallback, useState } from 'react'
import { FcGoogle } from "react-icons/fc";
import {
    FieldValues,
    SubmitHandler,
    useForm
} from "react-hook-form"
import useRegisterModal from '@/hooks/useRegisterModal';
import toast from 'react-hot-toast';
import Modal from './Modal';
import Button from '../Button';
import useLoginModal from '@/hooks/useLoginModal';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';


const LoginModal = () => {

    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);


    const {
        register,
        handleSubmit,
        formState: {
            errors,
        },
    } = useForm<FieldValues>({
        defaultValues: {
            email: '',
            password: ''
        },
    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);

        signIn('credentials', {
            ...data,
            redirect: false,
        })
            .then((callback) => {
                setIsLoading(false);

                if (callback?.ok) {
                    toast.success("Logged in successfully");
                    router.refresh();
                    loginModal.onClose();


                }

                if (callback?.error) {
                    toast.error(callback.error);
                }
            })


    }
    const onToggle = useCallback(() => {
        registerModal.onOpen();
        loginModal.onClose();
    }, [registerModal, loginModal])

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <div className="text-xl  font-semibold">Welcome to Rescore !</div>

            <input
                {...register('email', { required: 'Email is required' })}
                placeholder="Email "
                className={`
          w-full
          p-4
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:border-black/90
          text-xl

        `} />
            <input

                {...register('password', { required: 'Password is required' })}
                placeholder="Password "
                type='password'
                className={`
          w-full
          p-4
          font-light 
          bg-white 
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          hover:border-black/90
          text-xl


        `} />

        </div>
    )

    const footerContent = (
        <div className="flex flex-col gap-4 mt-3">
            <hr />
            <Button
                outline
                label="Continue with Google"
                icon={FcGoogle}
                onClick={() => signIn('google')}
            />

            <div className="
      text-neutral-500 text-center mt-4 font-light">
                <p>First time using Airbnb?
                    <span
                        onClick={onToggle}
                        className="
              text-blue-500
              cursor-pointer 
              hover:underline
            "
                    > Create an account</span>
                </p>
            </div>
        </div>

    )



    return (
        <Modal
            disabled={isLoading}
            isOpen={loginModal.isOpen}
            title="Login"
            actionLabel="Continue"
            onClose={loginModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}
        />
    )
}

export default LoginModal