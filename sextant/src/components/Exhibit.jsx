
const Exhibit=({heading, childcomp})=>{
    return (
        <div className="exhibit">
            <h3>{heading}</h3>
            <p>{childcomp}</p>
        </div>
    )
}

export default Exhibit;