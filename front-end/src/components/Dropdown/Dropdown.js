import React, { useState } from 'react'
import classnames from 'classnames'
export default function Dropdown({ title, listDropdown, className, classNameButton, label, value, onSelect }) {

    const [titleState, setTitleState] = useState(title)
    const [isShow, setIsShow] = useState(false)
    return (
        <div className={classnames("w-full text-md relative", className)}>
            <button
                className={
                    classnames("z-10 px-2 py-3 rounded-lg border border-white w-full flex items-center justify-between opacity-80 h-10",
                        classNameButton,
                        { "bg-gray-3": !classNameButton}
                    )
                }
                onClick={(e) => {
                    e.preventDefault()
                    setIsShow(!isShow)
                }}
            >
                <p>
                    {titleState}
                </p>
                <i className='bx bxs-chevron-down'></i>
            </button>
            {
                isShow && (
                    <div className="border border-white bg-gray-3 absolute w-full z-20">
                        <ul>
                            {
                                listDropdown.map((item, index) => {
                                    return (
                                        <li key={index} className="py-1 hover:bg-blue-1 px-2 cursor-pointer"
                                            onClick={() => {
                                                onSelect(item?.[value] || item)
                                                setTitleState(item?.[label] || item)
                                                setIsShow(false)
                                            }}>
                                            {item?.[label] || item}
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
