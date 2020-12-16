import React, {useState, useCallback} from 'react';
import Title from './Title';
import Count from './Count';
import Button from './Button';

const WrapComponent = () => {
    const [age, setAge] = useState(0);
    const [score, setScore] = useState(0);

    const incrementAge = useCallback(() => {
        setAge(age +1);
    }, [age])

    const incrementScore = useCallback(() => {
        setScore(score + 100);
    }, [score])

    return (
        <div>
            <Title />
            <Count count={age} title="年齢" />
            <Count count={score} title="信用スコア" />
            <Button onClick={incrementAge}>年齢+</Button>
            <Button onClick={incrementScore}>信用スコア+</Button>
        </div>
    );
};

export default WrapComponent;