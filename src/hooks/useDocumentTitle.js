import { useEffect } from 'react';

const useDocumentTitle = (count) => {
    useEffect(() => {
        document.title = `カウント：${count}`
    }, [count])
}

export default useDocumentTitle;