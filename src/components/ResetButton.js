import './ResetButton.css';

const ResetButton = (props) => {
    return(
        <button className='resetButton' onClick={props.onClick} disabled={props.disabled}>Reset</button>
    )
}

export default ResetButton;