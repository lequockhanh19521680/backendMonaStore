import React from 'react'
import '../../styles/cartIcon.scss';
import classnames from 'classnames';
export default function CartIcon({ className }) {
  return (
      <div className={classnames("absolute opacity-0 duration-300 ease-linear transition-opacity", className)}>
          <div className="w-[25px] h-[25px] relative border-2 border-yellow-1 flex items-center justify-center cart-icon">
              <p className="text-sm-md font-bold">
                  +
              </p>
          </div>
      </div>
  )
}
