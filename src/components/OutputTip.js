import React from 'react';

const OutputTip = (props) => {
    return (
        <div className='results'>
            <div className="col">
                <p>Tip Amount</p>
                <p className='perPerson'>/ person</p>
            </div>
            <p className='amount'>{props.value}</p>
        </div>
    )

}

export default OutputTip;