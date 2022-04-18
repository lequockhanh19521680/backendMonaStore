import React, { useState, useEffect } from 'react'
import UserComment from './components/UserComment'
import UserQuestion from './components/UserQuestion'
import classnames from 'classnames'
import Star from '../../components/Star/Star'
export default function Comment({ comment }) {

  const [tab, setTab] = useState(1)
  const [oneStar, setOneStar] = useState(0)
  const [twoStar, setTwoStar] = useState(0)
  const [threeStar, setThreeStar] = useState(0)
  const [fourStar, setFourStar] = useState(0)
  const [fiveStar, setFiveStar] = useState(0)
  useEffect(() => {
    let oneStarTemp = 0, twoStarTemp = 0, threeStarTemp = 0, fourStarTemp = 0, fiveStarTemp = 0
    comment?.map(item => {
      if (item?.star === 1) {
        oneStarTemp++
      }
      if (item?.star === 2) {
        twoStarTemp++
      }
      if (item?.star === 3) {
        threeStarTemp++
      }
      if (item?.star === 4) {
        fourStarTemp++
      }
      if (item?.star === 5) {
        fiveStarTemp++
      }
    })
    setOneStar(oneStarTemp)
    setTwoStar(twoStarTemp)
    setThreeStar(threeStarTemp)
    setFourStar(fourStarTemp)
    setFiveStar(fiveStarTemp)
  }, [comment])

  const handleChangeTab = (tab) => {
    setTab(tab)
  }
  console.log(comment)
  return (
    <div id="product-review">

      <div className="py-4 border-b borer-gray-300 mt-10">
        <h1 className="text-2xl font-medium text-center">Đánh giá của khách hàng</h1>
      </div>

      <div className="flex justify-between py-5 mb-5 items-start">
        <div className="flex">
          <div className="flex items-center border-r border-gray-300 pr-5">
            <div className="flex mr-2">
              <Star
                numberStar ={5}
                size="2xl"
              />
            </div>
            <span className="opacity-70 text-md">{comment?.length} Đánh giá</span>
          </div>

          <div className="pl-5">
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={5}
                />
              </div>
              <span className="text-sm-md text-yellow-2 px-2">({fiveStar})</span>
              <div>

              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={4}
                />
              </div>

              <span className="text-sm-md text-yellow-2 px-2">({fourStar})</span>

              <div>

              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={3}
                />
              </div>

              <span className="text-sm-md text-yellow-2 px-2">({threeStar})</span>

              <div>

              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={2}
                />
              </div>

              <span className="text-sm-md text-yellow-2 px-2">({twoStar})</span>

              <div>

              </div>
            </div>
            <div className="flex items-center">
              <div className="flex items-center">
                <Star
                  numberStar={1}
                />
              </div>

              <span className="text-sm-md text-yellow-2 px-2">({oneStar})</span>

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
          Đánh giá ({comment?.length})
        </div>
        <div
          className={classnames(
            "opacity-50 text-md cursor-pointer",
            { "text-yellow-2 font-bold opacity-100 border-b-2 border-yellow-2": tab === 2 }
          )}
          onClick={() => handleChangeTab(2)}
        >
          Câu hỏi (3)
        </div>
      </div>
      {
        tab === 1 ? (
          comment?.map((item,index) => {
            return <UserComment key={index} comment={item?.content} name={item?.userId} numOfStar={item?.star} />
          })
        ) : null
      }
      {
        tab === 2 ? <UserQuestion /> : null
      }
    </div>
  )
}
