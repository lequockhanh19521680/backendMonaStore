import React, { useState } from 'react'
import classnames from 'classnames'
export default function Dropdown({ title, listDropdown, className }) {

    const [titleState, setTitleState] = useState(title)
    const [isShow, setIsShow] = useState(false)
    return (
        <div className={classnames("w-full text-md relative", className)}>
            <button
                className="px-2 py-3 rounded-lg bg-gray-3 border border-white w-full flex items-center justify-between opacity-80 h-10"
                onClick={() => setIsShow(!isShow)}
            >
                <p>
                    {titleState}
                </p>
                <i className='bx bxs-chevron-down'></i>
            </button>
            {
                isShow && (
                    <div className="border border-white bg-gray-3 absolute w-full">
                        <ul>
                            {
                                listDropdown.map((item, index) => {
                                    return (
                                        <li key={index} className="py-1 hover:bg-blue-1 px-2" onClick={() => {
                                            setTitleState(item.label)
                                            setIsShow(false)
                                        }}>
                                            {item.label}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                )
            }
        </div>
    )
}
