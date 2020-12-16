import React from 'react';

const Title = () => {
    return (
        <h1>useCallback hookによる最適化</h1>
    );
}

export default React.memo(Title);