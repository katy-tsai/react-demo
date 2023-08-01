import React from 'react';
import Floor from './Floor';



const House = ({floor=2,index=0,className,isLight}) => {
   
   
    return (
        <div className={['house',className].join(" ")}>
        {
           [ ...Array(floor).keys()].reverse().map(no=>
            <Floor key={`floor_${no}_${index}`} no={no}  index={`${no}_${index}`} isLight={isLight} />
            )
        }
        </div>
       
    );
};

export default House;