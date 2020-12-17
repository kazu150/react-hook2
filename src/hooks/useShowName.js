import {useState} from 'react';

const useShowName = (id) => {
    const [name, setName] =useState('');
    
    const fetchName = async () => {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        setName(data.name)
    };
    fetchName();
    
    return [name];
}

export default useShowName;