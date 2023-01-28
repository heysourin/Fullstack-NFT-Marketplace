import { useGlobalState, setGlobalState } from '../store'
import { useState } from 'react'
import { FaTimes } from 'react-icons/fa'
const CreateNFT = () => {
  const [modal] = useGlobalState('modal')
  const [title, setTitle] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [fileUrl, setFileUrl] = useState('')
  const [imgBase64, setImgBase64] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()

    if (!title || !price || !description) return

    setGlobalState('modal', 'scale-0')
  }

  const closeModal = () => {
    setGlobalState('modal', 'scale-0')
    resetForm()
  }

  const resetForm = () => {
    setFileUrl('')
    setImgBase64(null)
    setTitle('')
    setPrice('')
    setDescription('')
  }

  return (
    <div className="flex flex-col md:flex-row w-4/5 justify-between items-center mx-auto py-10 text-left border-b-2 text-white">
      CreateNFT
    </div>
  )
}

export default CreateNFT
