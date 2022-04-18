import React, { useState, useEffect } from 'react'
import UserComment from './components/UserComment'
import UserQuestion from './components/UserQuestion'
import classnames from 'classnames'
import Star from '../../components/Star/Star'
import { showToastError, showToastSuccess } from './../CustomToast/CustomToast';
import Rating from '@mui/material/Rating';
import Box from '@mui/material/Box';
import StarIcon from '@mui/icons-material/Star';
import commentApi from '../../api/commentApi'
import questionApi from '../../api/questionApi'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../../store/product'
const labels = {
  0.5: 'Useless',
  1: 'Useless+',
  1.5: 'Poor',
  2: 'Poor+',
  2.5: 'Ok',
  3: 'Ok+',
  3.5: 'Good',
  4: 'Good+',
  4.5: 'Excellent',
  5: 'Excellent+',
};

function getLabelText(value) {
  return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}


export default function Comment({ comment, question, productId }) {

  const [tab, setTab] = useState(1)
  const [oneStar, setOneStar] = useState(0)
  const [twoStar, setTwoStar] = useState(0)
  const [threeStar, setThreeStar] = useState(0)
  const [fourStar, setFourStar] = useState(0)
  const [fiveStar, setFiveStar] = useState(0)
  const [star, setStar] = useState(0)
  const [showQuestionForm, setShowQuestionForm] = useState(false)
  const [showReviewForm, setShowReviewForm] = useState(false)
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  const [contentQuestion, setcontentQuestion] = useState()
  const [contentReview, setContentReview] = useState()
  const dispatch = useDispatch()
  const userLogin = JSON.parse(localStorage?.getItem('USER_LOGIN'))

  useEffect(() => {
    let oneStarTemp = 0, twoStarTemp = 0, threeStarTemp = 0, fourStarTemp = 0, fiveStarTemp = 0
    let count = 0
    comment?.map(item => {
      if (item?.star === 1) {
        oneStarTemp++
        count++
      }
      if (item?.star === 2) {
        twoStarTemp++
        count++
      }
      if (item?.star === 3) {
        threeStarTemp++
        count++
      }
      if (item?.star === 4) {
        fourStarTemp++
        count++
      }
      if (item?.star === 5) {
        fiveStarTemp++
        count++
      }
    })

    if (comment?.length) {
      count = comment?.reduce((total, star) => {
        return total + star?.star
      }, 0)
    }
    
    setOneStar(oneStarTemp)
    setTwoStar(twoStarTemp)
    setThreeStar(threeStarTemp)
    setFourStar(fourStarTemp)
    setFiveStar(fiveStarTemp)
    setStar(Math.round((count / (oneStarTemp + twoStarTemp + threeStarTemp + fourStarTemp + fiveStarTemp)) / 0.5) * 0.5)
  }, [comment])

  const handleChangeTab = (tab) => {
    setTab(tab)
  }

  const handleSubmitQuestion = async (e) => {
    e.preventDefault();
    if (!userLogin) {
      showToastError("Bạn phải đăng nhập để đặt câu hỏi")
      return;
    }

    try {
      await questionApi.addQuestion({
        productId,
        userId: userLogin?._id,
        question: contentQuestion,
      })
      showToastSuccess("Thêm câu hỏi thành công")
      dispatch(fetchProduct(productId))
    } catch (err) {
      console.log(err)
      showToastError("Thêm câu hỏi thất bại")
    }
  }

  const handleSubmitReview = async (e) => {
    e.preventDefault();
    if (!userLogin) {
      showToastError("Bạn phải đăng nhập để đánh giá sản phẩm")
      return;
    }

    try {
      await commentApi.addComment({
        productId,
        userId: userLogin?._id,
        content: contentReview,
        star: value,
      })
      showToastSuccess("Gửi đánh giá thành công")
      dispatch(fetchProduct(productId))
    } catch (err) {
      console.log(err)
      showToastError("Gửi đánh giá thất bại")
    }
  }

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
                numberStar={star || 0}
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
        <div className="flex flex-col">
          <button
            onClick={() => {
              setShowQuestionForm(true)
              setShowReviewForm(false)
            }}
            className="uppercase border border-black-1 px-10 py-1 cursor-pointer hover:opacity-50">
            Đặt câu hỏi
          </button>

          <button 
            onClick={() => {
              setShowQuestionForm(false)
              setShowReviewForm(true)
            }}
          className="mt-10 uppercase border border-black-1 px-10 py-1 cursor-pointer hover:opacity-50">
            Viết đánh giá
          </button>
        </div>
      </div>

      {
        showQuestionForm && (
          <div className="mb-10">
            <form>
              <textarea
                className="w-full border border-gray-300 px-5 py-2 h-40"
                placeholder='Câu hỏi của bạn'
                onChange={e => setcontentQuestion(e.target.value)}
              />
              <button
                className="px-10 bg-blue-1 text-white text-xl py-3 rounded-lg"
                onClick={e => handleSubmitQuestion(e)}
              >
                Gửi câu hỏi
              </button>
            </form>
          </div>
        )
      }

      {
        showReviewForm && (
          <div className="mb-10">
            <div className="flex justify-center mb-5">
              <Box
                sx={{
                  width: 200,
                  display: 'flex',
                  alignItems: 'center',
                }}
              >
                <Rating
                  name="hover-feedback"
                  value={value}
                  precision={0.5}
                  getLabelText={getLabelText}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  onChangeActive={(event, newHover) => {
                    setHover(newHover);
                  }}
                  emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
                />
                {value !== null && (
                  <Box sx={{ ml: 2 }}>{labels[hover !== -1 ? hover : value]}</Box>
                )}
              </Box>
            </div>
            <form>
              <textarea
                className="w-full border border-gray-300 px-5 py-2 h-40"
                placeholder='Đánh giá của bạn'
                onChange={e => setContentReview(e.target.value)}
              />
              <button
                className="px-10 bg-blue-1 text-white text-xl py-3 rounded-lg"
                onClick={e => handleSubmitReview(e)}
              >
                Gửi đánh giá
              </button>
            </form>
          </div>
        )
      }

      <div className="flex items-center mb-4">
        <div
          className={classnames(
            "opacity-50 text-md mr-4 cursor-pointer",
            { "text-yellow-2 font-bold opacity-100 border-b-2 border-yellow-2": tab === 1 }
          )}

          onClick={() => handleChangeTab(1)}
        >
          Đánh giá ({comment?.length || 0})
        </div>
        <div
          className={classnames(
            "opacity-50 text-md cursor-pointer",
            { "text-yellow-2 font-bold opacity-100 border-b-2 border-yellow-2": tab === 2 }
          )}
          onClick={() => handleChangeTab(2)}
        >
          Câu hỏi ({question?.length || 0})
        </div>
      </div>
      {
        tab === 1 ? (
          comment?.map((item, index) => {
            return <UserComment createdAt={item?.createAt} key={index} comment={item?.content} name={item?.userId?.nameAccount} numOfStar={item?.star} />
          })
        ) : null
      }
      {
        tab === 2 ? (
          question?.map((item, index) => {
            return <UserQuestion question={item} productId={productId} />
          })
        ) : null
      }
    </div>
  )
}
