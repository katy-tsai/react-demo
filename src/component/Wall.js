import React from 'react';

const Wall = ({children}) => {
    return (
        <div className="wall">
            {children}
        </div>
    );
};

export default Wall;