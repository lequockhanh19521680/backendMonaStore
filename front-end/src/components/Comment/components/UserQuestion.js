import React from 'react'

export default function UserQuestion() {
    return (
        <div className="max-w-screen-xl w-full mx-auto border-t border-gray-300 py-8">
            <div className="flex items-center justify-between mb-2">
                <div className="text-yellow-2 text-md">Name</div>
                <div className="opacity-80 text-sm-md">01/02/22</div>
            </div>
            <p className="text-md opacity-80 mb-3 font-medium">
                Q: Is the chain made out of gold ?
            </p>

            <div className="ml-6">
                <div className="pl-4 border-l-2 border-yellow-2">
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-yellow-2 text-md">Name</div>
                        <div className="opacity-80 text-sm-md">01/02/22</div>
                    </div>
                    <p className="">
                        A: Hi Alex! It sure is! Our freshwater pearls are strung on a 14k yellow gold cable chain. If you have any other questions about this necklace, feel free to reach back out!
                    </p>
                </div>
            </div>
        </div>
    )
}
