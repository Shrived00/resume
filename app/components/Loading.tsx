import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="flex min-h-[60vh] justify-center items-center flex-col space-y-3 ">
                <div className="space-y-3">
                    <Skeleton className="w-[250px] h-[15px] md:w-[700px] rounded-full bg-white" />
                    <Skeleton className="w-[200px] h-[15px] md:w-[600px] rounded-full bg-white" />
                    <Skeleton className="w-[250px] h-[15px] md:w-[700px] rounded-full bg-white" />
                    <Skeleton className="w-[200px] h-[15px] md:w-[600px] rounded-full bg-white" />
                    <Skeleton className="w-[250px] h-[15px] md:w-[700px] rounded-full bg-white" />
                    <Skeleton className="w-[200px] h-[15px] md:w-[600px] rounded-full bg-white" />


                </div>
            </div>
        </div>
    )
}

export default Loading