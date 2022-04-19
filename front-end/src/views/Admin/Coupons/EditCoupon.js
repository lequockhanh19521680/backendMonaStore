import React, { useState, useEffect } from 'react'
import Input from '../../../components/Input/Input'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import couponApi from '../../../api/couponApi'
import Button from '../../../components/Button/Button'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useFetchCoupon, useCoupon } from '../../../store/coupon/hook'
import { useParams } from 'react-router-dom'
import { formatDDMMYYYYHHmm } from '../../../utils/formatDatetime'
import { showToastError, showToastSuccess } from './../../../components/CustomToast/CustomToast';
export default function EditCoupon() {
  useFetchCoupon()
  const coupon = useCoupon()
  const [name, setName] = useState()
  const [amount, setAmount] = useState()
  const [value, setValue] = useState()
  const [code, setCode] = useState()
  const [pending, setPending] = useState(false)
  const [endDate, setEndDate] = useState();
  const { id } = useParams()


  useEffect(() => {
    setName(coupon?.data?.name)
    setAmount(coupon?.data?.amount)
    setCode(coupon?.data?.code)
    setValue(coupon?.data?.value)
    setEndDate(new Date(coupon?.data?.endDate))
  }, [coupon])

  const handleChangeDate = (date) => {
    setEndDate(date)
  }

  const handleUpdateCoupon = async (e) => {
    e.preventDefault()
    setPending(true)
    try {
      await couponApi.editCoupon(id, {
        name,
        code,
        value,
        amount,
        endDate: new Date(endDate).toISOString()
      })
      setPending(false)
      showToastSuccess("Cập nhật thành công")
    } catch (error) {
      console.log(error)
      showToastError("Cập nhật thất bại")
    }
  }

  return (
    <AdminContainer>
      <form>
        <Input
          className="border border-gray-400 rounded-lg text-md text-white"
          label="Coupon Name"
          name="coupon-name"
          dark={1}
          type="text"
          value={name}
          placeholder="Coupon name"
          onChange={(e) => setName(e.target.value)}
        />

        <Input
          className="border border-gray-400 rounded-lg text-md text-white"
          label="Coupon code"
          name="coupon-code"
          dark={1}
          type="text"
          placeholder="Coupon code"
          classNameContainer="mt-5"
          onChange={(e) => setCode(e.target.value)}
          value={code}
        />

        <Input
          className="border border-gray-400 rounded-lg text-md text-white"
          label="Coupon Amount"
          name="coupon-amount"
          dark={1}
          type="number"
          placeholder="Coupon Amount"
          classNameContainer="mt-5"
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
          min="1"
          max="100"
        />

        <Input
          className="border border-gray-400 rounded-lg text-md text-white"
          label="Coupon Value"
          name="coupon-value"
          dark={1}
          type="number"
          placeholder="Coupon Value"
          classNameContainer="mt-5"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          min="1"
          max="100"
        />

        <p className="mb-3 mt-5">
          End Day
        </p>
        <DatePicker
          onChange={(date) => handleChangeDate(date)}
          dateFormat="Pp"
          className="text-black"
          inline
          locale="es"
        />
        <Button
          onClick={(e) => handleUpdateCoupon(e)}
          pending={pending}
          isLoading={pending}
        >
          Update
        </Button>
      </form>
    </AdminContainer>
  )
}
