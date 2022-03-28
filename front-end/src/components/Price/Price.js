import React from 'react'
import classnames from "classnames"
export default function Price( {price, priceDel, color="text-white-1"}) {
  return (
      <p className={classnames("text-md font-medium", color)}>
          {
              priceDel ? (
                  <del className="opacity-50">
                      {priceDel}   <span className="underline">đ</span>
                  </del>
              ) : null
          }
          <span className={classnames("ml-2", color)}>
              {price} <span className="underline">đ</span>
          </span>
      </p>
  )
}

