const RoundCounter = (props : any) =>{
    const roundNumber = props.roundNumber
    return(
        <div className="round-counter">
            <div>
                Round:
            </div>
            <div>
                {roundNumber}
            </div>
        </div>
    )
}

export default RoundCounter