import React from 'react';
import HeaderNewShort from '../components/HeaderNew/HeaderNewShort';
import PredictBox from '../components/PredictBox/PredictBox';
import TitlePages from '../components/TitlePages/TitlePages';

const Predict:React.FC = () => {
    return (
        <div>
            <HeaderNewShort />
            <TitlePages title='پیش‌بینی' />
            <PredictBox />
        </div>
    );
}

export default Predict;