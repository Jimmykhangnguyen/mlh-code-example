import React, { useState, useEffect } from "react";
import ConnectionProfile from "./ConnectionProfile";

const ConnectionCard = () => {
    return (
        <div className="bg-[#FCAF58] rounded-[20px] w-[50vh] h-[94vh] m-[2vh] mt-[0vh] ml-[0vh] flex flex-col items-center overflow-auto overflow-x-hidden">
            <ConnectionProfile />
            <ConnectionProfile />
            <ConnectionProfile />
            <ConnectionProfile />
            <ConnectionProfile />
        </div>
    );
}

export default ConnectionCard;