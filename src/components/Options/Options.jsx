import React from 'react';
import style from './Options.module.css';

const Options = ({updateFeedback, totalFeedback, resetFeedback}) => {
    return (
        <div className={style.optionBtns}>
            <button onClick={() => updateFeedback('good')} className={style.optionBtn}>Good</button>
            <button onClick={() => updateFeedback('neutral')} className={style.optionBtn}>Neutral</button>
            <button onClick={() => updateFeedback('bad')} className={style.optionBtn}>Bad</button>
            {totalFeedback > 0 && (
                <button onClick={resetFeedback} className={style.optionBtn}>Reset</button>
            )}
        </div>
    );
};

export default Options;