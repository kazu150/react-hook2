import React from 'react';
import useInput from '../hooks/useInput';
import useShowName from '../hooks/useShowName';

const Form = () => {
    const [firstName, bindFirstName, resetFirstName] =useInput('')
    const [lastName, bindLastName, resetLastName] =useInput('')
    const [name] = useShowName(1);

    const handleSubmit = e => {
        e.preventDefault();
        alert(`こんにちは${firstName} ${lastName}さん`)
        resetFirstName();
        resetLastName();
    }
    

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>First Name</label>
                    <input type ="text" {...bindFirstName} />
                </div>
                <div>
                    <label>Last Name</label>
                    <input type ="text" {...bindLastName}/>
                </div>
                <button type="submit">送信</button>
            </form>
            {name}
        </div>
    );
}

export default Form;