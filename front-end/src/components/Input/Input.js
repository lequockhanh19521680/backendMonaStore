import React from 'react'
import classnames from 'classnames'

export default function Input({ className, dark, ...ref }) {
    return (
        <input
            {...ref}
            className={classnames("w-full p-2 bg-gray-3",
                { "bg-dark-1": dark === 1 },
                className
            )}
        />
    )
}
