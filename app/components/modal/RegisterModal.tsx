"use client";
import axios from 'axios';
import React, { useCallback, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import useRegisterModal from '@/hooks/useRegisterModal';
import { FieldValues, useForm, SubmitHandler } from 'react-hook-form';
import Modal from './Modal';
import toast from 'react-hot-toast';
import Button from '../Button';
import useLoginModal from '@/hooks/useLoginModal';
import { signIn } from 'next-auth/react';

const RegisterModal = () => {
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const [isLoading, setIsLoading] = useState(false);

    const {
        register, handleSubmit, formState: { errors }
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: ''
        }

    });

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios.post('/api/register', data)
            .then(() => {
                setIsLoading(false);
                registerModal.onClose();
                loginModal.onOpen();
            })
            .catch((error) => {
                setIsLoading(false);
                toast.error('An error occurred. Please try again later.')
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    const bodyContent = (
        <div className="flex flex-col gap-4">
            <div className="text-xl  font-semibold">Welcome to Rescore !</div>

            <div className=" flex flex-col gap-4 ">
                <input
                    {...register('name', { required: 'Name is required' })}
                    placeholder="Name "
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

        `} />
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

        `} />

            </div>
        </div>
    )
    const onToggle = useCallback(() => {
        registerModal.onClose();
        loginModal.onOpen();
    }, [registerModal, loginModal])
    const footerContent = (
        <div className='flex flex-col gap-4 mt-3'>
            <hr />
            <Button outline label='Continue with Google' icon={FcGoogle} onClick={() => signIn('google')} />

            <div className="text-sm text-center">Already have an account? <span className='text-blue-500 cursor-pointer' onClick={onToggle}>Login</span></div>
        </div>
    )
    return (
        <Modal disabled={isLoading}
            isOpen={registerModal.isOpen}
            title='Register'
            actionLabel='Continue'
            onClose={registerModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            body={bodyContent}
            footer={footerContent}

        />


    )
}

export default RegisterModal
