import React from 'react'
import classnames from 'classnames'
export default function Button({ onClick, pending, isLoading, children, className, background, backgroundHover }) {
  return (
    <button className={classnames(
        "rounded-lg px-10 py-5 mt-5 flex items-center",
        {"bg-green-1": !background},
        {
            "hover:bg-[#057a55]": !backgroundHover
        },
        {
            "opacity-50": isLoading
        },
        {
            "opacity-50": pending
        },
        className
    )}
        onClick={onClick}
          disabled={pending}
    >
          {children}
          {
              isLoading && (
                  <img src="/images/icon/loading.gif" alt="icon" width={20} className="ml-2" />
              )
          }
    </button>
  )
}
