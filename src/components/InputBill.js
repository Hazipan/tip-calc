const InputBill = (props) => {
    return(
        <div>
            <p className='label'>Bill</p>
            <input className='input' id='inputBill' placeholder="0" min='1' type='number' onChange={props.onChange}></input>
        </div>
    )
}

export default InputBill;