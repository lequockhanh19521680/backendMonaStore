import React from 'react'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import Dropdown from '../../../components/Dropdown/Dropdown'
import DoughnutChart from '../../../components/DoughnutChart/DoughnutChart'
import BarChart from '../../../components/BarChart/BarChart'
import Table from '../../../components/Table/Table'
import { useFetchListCoupon, useListCoupon } from '../../../store/coupon/hook';
import { PRODUCT_STATUS_COLOR, PRODUCT_STATUS } from '../../../constants/index'
import Badge from '../../../components/Badge/Badge'
import classnames from 'classnames'
import LoadingPage from '../../../components/LoadingPage/Loading'
export default function Dashboard() {
  useFetchListCoupon()
  const listCoupon = useListCoupon()
  const labels = ['Nhẫn', 'Dây chuyền', 'Bông tai', 'Lắc tay', 'Đồng hồ']
  const dataDoughnutChart = [15, 15, 20, 25, 25]


  const columnsTable = [
    {
      Header: 'ORDER TIME',
      accessor: 'time',
    },
    {
      Header: 'DELIVERY ADDRESS',
      accessor: 'address',
    },
    {
      Header: 'PHONE',
      accessor: 'phone',
    },
    {
      Header: 'PAYMENT METHOD',
      accessor: 'paymentMethod',
    },
    {
      Header: 'ORDER AMOUNT',
      accessor: 'cost',
    },
    {
      Header: 'STATUS',
      accessor: 'status',
      Cell: data => {
        return <Badge className={classnames("text-sm-md px-2 font-medium", `bg-[${PRODUCT_STATUS_COLOR?.[data?.row.original.status.toLowerCase()]}]`)}>{PRODUCT_STATUS?.[data.row.original.status?.toLowerCase()]}</Badge>
      }
    },
  ]


  return (
    <AdminContainer>
      <p className="text-lg font-medium mb-6">
        Dashboard Overview
      </p>

      <div className="grid grid-cols-3 gap-x-5">
        <div className="bg-green-2 rounded-lg flex flex-col items-center justify-center py-5">
          <i className='bx bx-layer text-4xl'></i>
          <p className="text-lg mt-1">Total Order</p>
          <p className="text-3xl font-bold mt-2">$300</p>
        </div>
        <div className="bg-blue-1 rounded-lg flex flex-col items-center justify-center py-5">
          <i className='bx bx-cart text-4xl'></i>
          <p className="text-lg mt-1">Total Order</p>
          <p className="text-3xl font-bold mt-2">$5000</p>
        </div>
        <div className="bg-green-1 rounded-lg flex flex-col items-center justify-center py-5">
          <i className='bx bxs-credit-card text-4xl'></i>
          <p className="text-lg mt-1">Total Order</p>
          <p className="text-3xl font-bold mt-2">$95000</p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-x-5 my-8">
        <div className="px-5 rounded-lg bg-dark-1 py-5 flex items-center">
          <div className="w-12 h-12 rounded-full bg-orange-1 flex items-center justify-center text-2xl mr-4">
            <i className='bx bx-cart'></i>
          </div>
          <div>
            <p className="text-md opacity-50">
              Total Order
            </p>
            <p className="font-bold text-2xl">
              172
            </p>
          </div>
        </div>
        <div className="px-5 rounded-lg bg-dark-1 py-5 flex items-center">
          <div className="w-12 h-12 rounded-full bg-blue-1 flex items-center justify-center text-2xl mr-4">
            <i className='bx bx-refresh' ></i>
          </div>
          <div>
            <p className="text-md opacity-50">
              Order Pending
            </p>
            <p className="font-bold text-2xl">
              37
            </p>
          </div>
        </div>

        <div className="px-5 rounded-lg bg-dark-1 py-5 flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-2 flex items-center justify-center text-2xl mr-4">
            <i className='bx bxs-truck' ></i>
          </div>
          <div>
            <p className="text-md opacity-50">
              Order Processing
            </p>
            <p className="font-bold text-2xl">
              59
            </p>
          </div>
        </div>

        <div className="px-5 rounded-lg bg-dark-1 py-5 flex items-center">
          <div className="w-12 h-12 rounded-full bg-green-1 flex items-center justify-center text-2xl mr-4">
            <i className='bx bx-check' ></i>
          </div>
          <div>
            <p className="text-md opacity-50">
              Order Delivered
            </p>
            <p className="font-bold text-2xl">
              61
            </p>
          </div>
        </div>

      </div>

      <div className="grid grid-cols-2 my-8 gap-x-5">
        <div className="p-4 rounded-lg shadow-xs bg-dark-1">
          <p className="opacity-80 font-medium text-lg mb-5">Conversions This Year</p>
          <div className="h-[400px] flex flex-cols items-end">
            <BarChart />
          </div>
        </div>
        <div className="p-4 rounded-lg shadow-xs bg-dark-1">
          <p className="opacity-80 font-medium text-lg mb-5">Top Revenue Product</p>
          <div className="h-[400px] flex flex-cols items-end">
            <DoughnutChart
              labels={labels}
              dataChart={dataDoughnutChart}
            />
          </div>
        </div>
      </div>
      {
        listCoupon?.data && <Table columnsTable={columnsTable} data={listCoupon?.data} />
      }
    </AdminContainer>
  )
}
