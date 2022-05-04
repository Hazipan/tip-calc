const InputPeople = (props) => {
    return (
        <div>
            <div className='labelGrid'>
                <p className='label'>Number of people</p>
                <p style={props.style} className='warning'>Cannot be zero</p>
            </div>
            <input className='input' id='inputPeople' placeholder="1" min='1' type='number' onChange={props.onChange}></input>
        </div>
    )
}

export default InputPeople;