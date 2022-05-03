const OutputTotal = (props) => {
    return (
        <div className='results'>
            <div className="col">
                <p>Total</p>
                <p className='perPerson'>/ person</p>
            </div>
            <p className='amount'>{props.value}</p>
        </div>
    )
}

export default OutputTotal;