const InputPeople = (props) => {
    return(
        <div>
            <p className='label'>Number of people</p>
            <input className='input' id='inputPeople' placeholder="0" min='1' type='number' onChange={props.onChange}></input>
        </div>
    )
}

export default InputPeople;