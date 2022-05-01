import "./TipButton.css";

const TipButton = ({value, label}) => {
    return (
        <button className='btn' value={value}>
            {label}
        </button>
    )
};

export default TipButton;