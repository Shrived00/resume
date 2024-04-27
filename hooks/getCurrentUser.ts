import { getServerSession } from "next-auth";

import { authOptions } from "@/pages/api/auth/[...nextauth]";

import prisma from "@/lib/prismadb";
import toast from "react-hot-toast";
import { useUserStore } from "./getUser";


export async function getSession() {
    return await getServerSession(authOptions)
}

export default async function getCurrentUser() {
    try {

        const session = await getSession();

        if (!session?.user?.email) {
            return null;
        }

        const currentUser = await prisma.user.findUnique({
            where: {
                email: session.user.email as string,
            }
        });

        if (!currentUser) {
            return null;
        }


        return {
            ...currentUser,
            createdAt: currentUser.createdAt.toISOString(),
            updatedAt: currentUser.updatedAt.toISOString(),
            emailVerified:
                currentUser.email?.toString() || null,
        };




    } catch (error: any) {
        return null;
        toast.error('Chutoya error')

    }
}