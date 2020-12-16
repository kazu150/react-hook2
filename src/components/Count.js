import React from 'react';

const Count = ({title, count}) => {
    return(
        <div>
            <p>{title}: {count}</p>
        </div>
    )
}

export default React.memo(Count);