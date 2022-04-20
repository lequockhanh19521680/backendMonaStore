import React from 'react'
import Star from '../../../components/Star/Star'
import { formatDDMMYYYYHHmm } from '../../../utils/formatDatetime'

export default function UserComment({ name, createdAt, numOfStar = 5, comment }) {

    return (
        <div className="max-w-screen-xl w-full mx-auto border-t border-gray-300 py-8">
            <div className="flex items-center justify-between mb-2">
                <div className="text-yellow-2 text-md">{name}</div>
                <div className="opacity-80 text-sm-md">{formatDDMMYYYYHHmm(createdAt)}</div>
            </div>

            <div className="flex items-center mb-3">
                <Star
                    numberStar={numOfStar || 0}
                />
            </div>

            <p className="text-md mb-2">
                {comment || ''}
            </p>
        </div>
    )
}
