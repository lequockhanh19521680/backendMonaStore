import React from 'react'

export default function UserComment({ name, createdAt, numOfStar = 5, comment }) {

    return (
        <div className="max-w-screen-xl w-full mx-auto border-t border-gray-300 py-8">
            <div className="flex items-center justify-between mb-2">
                <div className="text-yellow-2 text-md">Name</div>
                <div className="opacity-80 text-md">01/02/22</div>
            </div>

            <div className="flex items-center mb-3">
                {
                    Array(numOfStar).fill(<i className='bx bxs-star text-red-500' ></i>)
                }
            </div>

            <p className="text-md font-bold text-black mb-2">
                Perfect and elegant
            </p>

            <p className="text-md mb-2">
                Looks even better in person
            </p>
        </div>
    )
}
