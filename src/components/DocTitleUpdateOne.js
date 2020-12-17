import React, {useState, useEffect} from 'react';
import useDocumentTitle from '../hooks/useDocumentTitle'

const DocTitleUpdateOne = () => {
    const [count, setCount] = useState(0);
    useDocumentTitle(count);
    return (
        <div>
            <button onClick={() => setCount(count + 1)} >count - {count}</button>
        </div>
    );
}

export default DocTitleUpdateOne;