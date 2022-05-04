const InputBill = (props) => {
    return(
        <div>
            <div className='labelGrid'>
                <p className='label'>Bill</p>
                <p style={props.style} className='warning'>Cannot be zero</p>
            </div>
            <input className='input' id='inputBill' placeholder='0' min='1' type='number' onChange={props.onChange}></input>
        </div>
    )
}

export default InputBill;