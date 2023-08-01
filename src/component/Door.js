import React, { useState } from 'react';

const Door = () => {
    let [isOpen,setIsOpen]=useState(false);
    const onToggleDoor = ()=>{
        setIsOpen(!isOpen);
    }

    return (
        <div className="door_div">
            <div className={['door',isOpen?'open':''].join(" ")} onClick={onToggleDoor}>
            </div>      
        </div>
    );
};

export default Door;