import React from 'react'
import classnames from 'classnames'

export default function Input({ label, name, className, classNameContainer, dark, ...ref }) {
    return (
      <div className={classNameContainer}>    
            {
                label && (
                    <div className="mb-3">
                        <label for={name}>
                            {label}:
                        </label>
                    </div>
                )
            }
            <input
                {...ref}
                id={name}
                name={name}
                className={classnames("w-full p-2",
                    {
                        " bg-gray-3": !dark
                    },
                    { "bg-dark-1": dark === 1 },
                    className
                )}
            />

      </div>
    )
}
