const InputBill = () => {
    return(
        <div>
            <p className='label'>Bill</p>
            <input className='input' id='inputBill' placeholder="0" min='1' type='number'></input>
        </div>
    )
}

export default InputBill;