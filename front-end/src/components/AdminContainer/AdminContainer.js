import React from 'react'
import classnames from 'classnames'
export default function AdminContainer({ children, className }) {
    return (
        <div className={classnames("w-full bg-dark-2 ml-[230px]", className)}>
            <div className="mx-auto py-10 max-w-screen-2xl text-white md:px-5 sm:px-10">
                {children}
            </div>
        </div>
    )
}
