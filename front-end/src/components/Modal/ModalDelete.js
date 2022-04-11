import React from 'react'
import Modal from './Modal'
import ModalTitle from './ModalTitle'

export default function ModalDelete({ open, toggle, onConfirm }) {
    return (
        <Modal open={open} onClose={toggle}>
            <ModalTitle onClose={toggle}>
                <i className='text-3xl bx bx-trash text-red-500'></i>
            </ModalTitle>

            <div className="text-center text-white opacity-70 mb-10">
                <p className="text-xl mb-3">
                    Are You Sure! Want to Delete This Record?
                </p>
                <p className="text-sm-md">
                    Do you really want to delete these records? You can't view this in your list anymore if you delete!
                </p>
            </div>

            <div className="flex items-center justify-center">
                <button className="text-sm-md px-4 mx-3 py-2 bg-white rounded-lg text-black" onClick={toggle}>
                    No, Keep it
                </button>
                <button className="text-sm-md px-4 mx-3 py-2 bg-green-1 rounded-lg text-white" onClick={() => {
                    onConfirm() 
                    toggle()
                }}
                >
                    Yes, Delete it
                </button>
            </div>
        </Modal>
    )
}
