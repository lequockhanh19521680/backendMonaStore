import React, { useState } from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Input from '../../../components/Input/Input'
import Table from './../../../components/Table/Table';
import ActionGroup from './../../../components/ActionGroup/ActionGroup';
import Badge from '../../../components/Badge/Badge'
import couponApi from '../../../api/couponApi';
import { useFetchListCoupon, useListCoupon } from '../../../store/coupon/hook';
import LoadingPage from './../../../components/LoadingPage/Loading';
import { COUPON_STATUS } from '../../../constants/index'
import classnames from 'classnames';
export default function Coupons() {
    useFetchListCoupon()
    const listCoupon = useListCoupon()
    const [inputValue, setInputValue] = useState()

    const handleChangeInput = (e) => {
        setInputValue(e.target.value)
    }

    const handleDeleteCoupon = async (id) => {
        try {
            await couponApi.deleteCoupon(id)
        } catch (err) {
            console.log(err)
        }
    }

    const columnsTable = [
        {
            Header: 'ID',
            accessor: '_id',
        },
        {
            Header: 'START DATE',
            accessor: 'startDate',
        },
        {
            Header: 'END DATE',
            accessor: 'endDate',
        },
        {
            Header: 'NAME',
            accessor: 'name',
        },
        {
            Header: 'CODE',
            accessor: 'code',
        },
        {
            Header: 'PERCENTAGE',
            accessor: 'value'
        },
        {
            Header: 'AMOUNT',
            accessor: 'amount',
        },
        {
            Header: 'STATUS',
            accessor: 'status',
            Cell: data => {
                return <Badge className={classnames("text-sm-md px-2 font-medium", `bg-[${COUPON_STATUS?.[data.row.original.status.toLowerCase()]?.color}]`)}>{COUPON_STATUS?.[data.row.original.status.toLowerCase()]?.label}</Badge>
            }
        },
        {
            Header: 'ACTIONS',
            accessor: 'action',
            Cell: data => {
                return <ActionGroup onDelete={() => handleDeleteCoupon(data.row.original._id)} />
            }
        },
    ]

    return (
        <AdminContainer className="overflow-hidden h-screen">
            <p className="text-lg font-medium mb-6">
                Coupons
            </p>

            <form className="p-5 w-full rounded-lg bg-dark-1 flex items-center">
                <Input
                    className="border border-gray-400 rounded-lg text-md text-white h-[42px] mr-5"
                    onChange={handleChangeInput}
                    dark={1}
                    type="text"
                    placeholder="Search by product name"
                />

                <button className="bg-green-1 rounded-lg hover:bg-[#057a55] w-1/4 h-[42px]">
                    <div className="flex items-center justify-center text-md h-full">
                        <i className='bx bx-plus mr-2'></i>
                        <span>Add Coupon</span>
                    </div>
                </button>
            </form>

            {
                listCoupon && (
                    <Table
                        columnsTable={columnsTable}
                        data={listCoupon?.data}
                    />
                )
            }
        </AdminContainer>
    )
}
