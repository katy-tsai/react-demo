import React from 'react';

const Windows = ({num,key,isLight=true}) => {
    return (
        <div className={['window_div',isLight?'turn_light':''].join(" ")}>
            {
                [ ...Array(num).keys()].map(no=>
                    <div key={`window_${key}_${no}`}></div>
                 )
            }
        </div>
    );
};

export default Windows;
