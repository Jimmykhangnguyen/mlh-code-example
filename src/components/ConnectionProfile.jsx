import React, { useState, useEffect } from "react";
import { MdEdit } from 'react-icons/md'
import { FaTrashAlt } from 'react-icons/fa'
import { IoPersonCircleSharp } from 'react-icons/io5'

const ConnectionProfile = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleEditClick = () => {
        setIsModalOpen(true)
    }

    const handleCloseModal = () => {
        setIsModalOpen(false)
    }

    return (
        <div className="h-[15vh] w-[45vh] bg-white rounded-[20px] flex mt-[2vh]">
            <IoPersonCircleSharp className="ml-[2vh] w-[16vh] h-[16vh]" />
            <div className="mt-[1vh] w-[43vh]">
                <h2 className="font-bold text-left text-[3.5vh] ml-[2vh]">
                    Testing
                </h2>
                <div className="text-left ml-[2vh] text-[2.2vh]">
                    <p>
                        <b>Occupation:</b> Testing
                    </p>
                    <p>
                        <b>Location:</b> Testing
                    </p>
                </div>
            </div>
            <div className="w-[8vh] h-[15vh] rounded-[20px] flex flex-col items-center justify-around mr-[1vh]">
                <button
                    className="flex items-center justify-center font-azeret bg-[#FFB302] w-[6vh] text-[4vh] font-bold border h-[6vh] rounded-2xl border-solid border-[rgb(84,84,84)] hover:cursor-pointer hover:text-[white] hover:bg-[rgb(59,59,59)]"
                    onClick={handleEditClick}
                >
                    <MdEdit />
                </button>
                <button
                    className="flex items-center justify-center font-azeret bg-[#F85555] w-[6vh] text-[4vh] font-bold border h-[6vh] rounded-2xl border-solid border-[rgb(84,84,84)] hover:cursor-pointer hover:text-[white] hover:bg-[rgb(59,59,59)]"
                >
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    )
}

export default ConnectionProfile;
