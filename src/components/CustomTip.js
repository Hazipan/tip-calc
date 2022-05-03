import './CustomTip.css';

const CustomTip = (props) => {
    return(
        <input type='number' id='customTip' min='1' placeholder='Custom' onChange={props.onChange}></input>
    )
}

export default CustomTip