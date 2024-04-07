import { Skeleton } from "@/components/ui/skeleton"

import React from 'react'

const Loading = () => {
    return (
        <div>
            <div className="flex flex-col space-y-3">
                <div className="space-y-3">
                    <Skeleton className="h-4 w-[75%]" />
                    <Skeleton className="h-4 w-[400px]" />
                </div>
            </div>
        </div>
    )
}

export default Loading
