import React from 'react';

const SwitchBtn = ({onClick,isActive=false}) => {
    return (
        <div className={['switch_btn_div',isActive?'active':''].join(" ")} onClick={onClick}>
            
        </div>
    );
};

export default SwitchBtn;
