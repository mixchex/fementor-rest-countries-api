import React from 'react'
import { XCircleIcon } from '@heroicons/react/24/outline';

interface Props {
    error: {
        status?: number,
        message?: string
    }
}
const Alert = ({
    error
}: Props) => {
    return (
        <div className="flex items-center space-x-4 px-6 py-4 bg-red-200 text-red-800 rounded dark:bg-red-800 dark:text-white">
            <XCircleIcon className="w-8 h-8" />
            <span>{error.message}</span>
        </div>
    )
}
export default Alert;