import './TipGrid.css';

const TipGrid = ({children}) => {
    return(
        <div>
            <p className='label'>Select Tip %</p>
            <div className='tipGrid'>{children}</div>
        </div>
    )
}

export default TipGrid;