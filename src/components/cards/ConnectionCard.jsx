import React, { useState, useEffect } from "react";
import ConnectionProfile from "./ConnectionProfile";
import AddConnectionForm from "../forms/AddConnectionForm.jsx";

const ConnectionCard = ({ connections, checkFunction }) => {

    console.log(connections)

    const [showAddForm, setShowAddForm] = useState(false)

    const handleCloseForm = () => {
        setShowAddForm(false);
        checkFunction();
    }

    return (
        <div style={{ scrollbarGutter: 'stable',}} className="bg-[#FCAF58] rounded-[20px] w-[50vh] h-[94vh] m-[2vh] mt-[0vh] ml-[0vh] flex flex-col items-center overflow-auto overflow-x-hidden">
            <button
                className="font-azeret bg-[#8DC363] w-[40vh] text-[large] font-bold border h-[6vh] rounded-[1vh] mt-[2vh] border-solid border-[rgb(84,84,84)] hover:cursor-pointer hover:text-[white] hover:bg-[rgb(59,59,59)]"
                onClick={(e) => {
                    e.preventDefault()
                    setShowAddForm(true)
                }}>
                Add
            </button>
            <AddConnectionForm 
                isOpen={showAddForm}
                onClose={handleCloseForm}
            />
            {connections && connections.length > 0 ? (
                connections.map((connection) => (
                    <ConnectionProfile 
                    _id={connection._id}
                    name={connection.name} 
                    location={connection.location} 
                    checkFunction={checkFunction}
                />
                ))
            ) : (
                <p>There are currently no connections</p>
            )}
        </div>
    );
}

export default ConnectionCard;