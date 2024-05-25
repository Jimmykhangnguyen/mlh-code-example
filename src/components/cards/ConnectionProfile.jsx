import React from "react";
import { FaTrashAlt } from 'react-icons/fa'
import { IoPersonCircleSharp } from 'react-icons/io5'

const ConnectionProfile = ({_id, name, location, checkFunction}) => {

    const handleDelete = async (e) => {
        const res = await fetch(`http://localhost:3001/` + _id, {
            method: "DELETE",
            headers: { 'Content-Type': 'application/json' },
        })
        checkFunction()
    }

    return (
        <div className="w-[45vh] bg-white rounded-[20px] flex mt-[2vh]">
            <IoPersonCircleSharp className="ml-[2vh] text-[13vh]" />
            <div className="mt-[1vh] w-[43vh] ml-[2vh]">
                <h2 className="font-bold text-left text-[3.5vh]">
                    {name}
                </h2>
                <div className="text-left text-[2.5vh] mb-[1vh]">
                    <p>
                        <b>Location:</b> {location}
                    </p>
                </div>
            </div>
            <div className="w-[8vh] rounded-[20px] flex flex-col items-center justify-around mr-[1vh]">
                <button
                    onClick={handleDelete}
                    className="flex items-center justify-center font-azeret bg-[#F85555] w-[5vh] text-[3.5vh] font-bold border h-[5vh] rounded-2xl border-solid border-[rgb(84,84,84)] hover:cursor-pointer hover:text-[white] hover:bg-[rgb(59,59,59)]"
                >
                    <FaTrashAlt />
                </button>
            </div>
        </div>
    )
}

export default ConnectionProfile;
