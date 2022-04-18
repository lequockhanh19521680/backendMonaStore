import React, { useState } from 'react'
import { formatDDMMYYYYHHmm } from '../../../utils/formatDatetime'
import questionApi from '../../../api/questionApi'
import { useDispatch } from 'react-redux'
import { fetchProduct } from '../../../store/product'
import { showToastError, showToastSuccess } from './../../CustomToast/CustomToast';
import ActionGroup from './../../ActionGroup/ActionGroup';



export default function UserQuestion({ question, productId }) {

    const dispatch = useDispatch()
    const userLogin = JSON.parse(localStorage?.getItem('USER_LOGIN'))
    const [answer, setAnswer] = useState()

    const handleReply = async (e) => {
        e.preventDefault();
        try {
            await questionApi.editQuestion(question?._id, {
                answer
            })
            dispatch(fetchProduct(productId))
            showToastSuccess("Thêm câu trả lời thành công")
        } catch (err) {
            console.log(err)
            showToastError("Thêm câu trả lời thất bại")
        }
    }

    const onDelete = async () => {
        try {
            await questionApi.deleteQuestion(question?._id)
            dispatch(fetchProduct(productId))
            showToastSuccess("Xóa câu hỏi thành công")
        } catch (err) {
            console.log(err)
            showToastError("Xóa câu hỏi thất bại")
        }
    }

    return (
        <div className="group max-w-screen-xl w-full mx-auto border-t border-gray-300 py-8 relative">
            <div className="flex items-center justify-between mb-2">
                <div className="text-yellow-2 text-md">{question?.userId?.nameAccount}</div>
                <div className="opacity-80 text-sm-md">{formatDDMMYYYYHHmm(question?.questionDate)}</div>
            </div>
            <p className="text-md opacity-80 mb-3 font-medium">
                Q: {question?.question}
            </p>

            {
                question?.answer && (
                    <div className="ml-6">
                        <div className="pl-4 border-l-2 border-yellow-2">
                            <div className="flex items-center justify-between mb-4">
                                <div className="text-yellow-2 text-md">Admin</div>
                                <div className="opacity-80 text-sm-md">{formatDDMMYYYYHHmm(question?.answerDate)}</div>
                            </div>
                            <p className="">
                                A: {question?.answer}
                            </p>
                        </div>
                    </div>
                )
            }

            {
                !question?.answer && userLogin?.role === 'ADMIN' && (
                    <form type="submit">
                        <textarea
                            className="border border-gray-300 w-full h-20 px-5 py-3"
                            onChange={(e) => setAnswer(e.target.value)}
                        />
                        <button
                            onClick={(e) => handleReply(e)}
                            className="px-4 py-2 rounded-lg bg-blue-1 text-white"
                        >
                            Gửi câu trả lời
                        </button>
                    </form>
                )
            }

            <div className="absolute right-0 hidden group-hover:block">
                <ActionGroup showEye={false} showEdit={false} onDelete={onDelete} />
            </div>
        </div>
    )
}
