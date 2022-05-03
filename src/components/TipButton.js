import "./TipButton.css";

const TipButton = (props) => {
    let btn = 'btn'
    let active = 'btn active';
    return (
        <button className={props.isActive ? active : btn} value={props.value} onClick={props.onClick}>
            {props.label}
        </button>
    )
};

export default TipButton;