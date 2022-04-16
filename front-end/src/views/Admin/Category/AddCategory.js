import React, { useState } from 'react'
import Input from '../../../components/Input/Input'
import AdminContainer from '../../../components/AdminContainer/AdminContainer'
import productApi from '../../../api/productApi'
import Button from '../../../components/Button/Button'
import { showToastSuccess, showToastError } from '../../../components/CustomToast/CustomToast';
export default function AddCategory() {

    const [nameType, setNameType] = useState()
    const [note, setNote] = useState()
    const [pending, setPending] = useState(false)

    const resetInput = () => {
        setNameType('')
        setNote('')
    }

    const handleAddCategory = async (e) => {
        e.preventDefault()
        setPending(true)
        try {
            await productApi.postProductType({
                nameType: nameType,
                note: note,
            })
            setPending(false)
            resetInput()
            showToastSuccess("Thêm loại sản phẩm thành công")
        } catch (error) {
            console.log(error)
            setPending(false)
            showToastError("Thêm loại sản phẩm thất bại")
        }
    }

    return (
        <AdminContainer>
            <form>
                <Input
                    className="border border-gray-400 rounded-lg text-md text-white"
                    label="Name"
                    name="category-name"
                    dark={1}
                    type="text"
                    value={nameType}
                    placeholder="Category name"
                    onChange={(e) => setNameType(e.target.value)}
                />

                <div className="mt-5">
                    <div className="mb-3">
                        <label for="category-note">Note:</label>
                    </div>

                    <textarea
                        onChange={(e) => setNote(e.target.value)}
                        placeholder='Note'
                        id="category-note"
                        name="category-note"
                        value={note}
                        className="p-3 w-full h-40 border-gray-400 rounded-lg text-md text-white bg-dark-1 border"
                    />
                </div>

                <Button
                    onClick={(e) => handleAddCategory(e)}
                    pending={pending}
                    isLoading={pending}
                >
                    Add Category
                </Button>
            </form>
        </AdminContainer>
    )
}
