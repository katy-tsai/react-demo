import React from 'react';
import Wall from './Wall';
import Windows from './Windows';
import Door from './Door';

const Floor = ({no,index ,isLight=false}) => {
    let windowNo=Math.floor(Math.random()*3)+1;
    return (
     <Wall>
       { no>0&&<Windows num={windowNo} index={index} isLight={isLight}/>}
       { no===0&&<Door/>}
    </Wall>
    );
};

export default Floor;