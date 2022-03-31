import React, { useState, useEffect } from 'react'
import UserComment from './components/UserComment'
import UserQuestion from './components/UserQuestion'
import classnames from 'classnames'
import Star from '../../components/Star/Star'
export default function Comment() {

  const [tab, setTab] = useState(1)

  const handleChangeTab = (tab) => {
    setTab(tab)
  }
  return (
    <div>

      <div className="py-4 border-b borer-gray-300 mt-10">
        <h1 className="text-2xl font-medium text-center">Customer Reviews</h1>
      </div>

      <div className="flex justify-between py-5 mb-5 items-start">
        <div className="flex">
          <div className="flex items-center border-r border-gray-300 pr-5">
            <div className="flex mr-2">
              <Star
                numberStar = {5}
                size="2xl"
              />
            </div>
            <span className="opacity-70 text-md">15 Reviews</span>
          </div>

          <div className="pl-5">
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={5}
                />
              </div>
              <span className="text-sm-md text-yellow-2 px-2">(15)</span>
              <div>

              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={4}
                />
              </div>

              <span className="text-sm-md text-yellow-2 px-2">(15)</span>

              <div>

              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={3}
                />
              </div>

              <span className="text-sm-md text-yellow-2 px-2">(15)</span>

              <div>

              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={2}
                />
              </div>

              <span className="text-sm-md text-yellow-2 px-2">(15)</span>

              <div>

              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={1}
                />
              </div>

              <span className="text-sm-md text-yellow-2 px-2">(15)</span>

              <div>

              </div>
            </div>
          </div>
        </div>
        <button className="uppercase border border-black-1 px-10 py-1 cursor-pointer hover:opacity-50">
          Ask a question
        </button>
      </div>
      <div className="flex items-center mb-4">
        <div
          className={classnames(
            "opacity-50 text-md mr-4 cursor-pointer",
            { "text-yellow-2 font-bold opacity-100 border-b-2 border-yellow-2": tab === 1 }
          )}

          onClick={() => handleChangeTab(1)}
        >
          Reviews (15)
        </div>
        <div
          className={classnames(
            "opacity-50 text-md cursor-pointer",
            { "text-yellow-2 font-bold opacity-100 border-b-2 border-yellow-2": tab === 2 }
          )}
          onClick={() => handleChangeTab(2)}
        >
          Questions (3)
        </div>
      </div>
      {
        tab === 1 ? <UserComment /> : null
      }
      {
        tab === 2 ? <UserQuestion /> : null
      }
    </div>
  )
}
