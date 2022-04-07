import React, { useState } from 'react'
import { Eye, Edit, Trash } from 'react-feather'
import ModalDelete from '../Modal/ModalDelete'
export default function ActionGroup({ onDelete, onEdit, onShow, showEye = true, showEdit = true, showDelete = true }) {
    const [openModalDelete, setOpenModalDelete] = useState(false)

    return (
        <div className="flex items-center">
            {
                showEye && (
                    <button className="mr-2 hover:text-green-1" onClick={onShow}>
                        <Eye />
                    </button>
                )
            }
            {
                showEdit && (
                    <button className="mr-2 hover:text-green-1" onClick={onEdit}>
                        <Edit />
                    </button>
                )
            }
            {
                showDelete && (
                    <button className="hover:text-red-600" onClick={() => setOpenModalDelete(true)}>
                        <Trash />
                    </button>
                )
            }
        {
            openModalDelete && (
                <ModalDelete
                    open={openModalDelete}
                    toggle={() => setOpenModalDelete(!openModalDelete)}
                    onConfirm={onDelete}
                />
            )
        }
        </div>
    )
}
