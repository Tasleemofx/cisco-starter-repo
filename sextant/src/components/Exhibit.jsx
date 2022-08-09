import Address from "./Address"
const Exhibit=({heading, childcomp, version})=>{
    return (
        <div className="exhibit">
            <h3>{heading}</h3>
            <p>{childcomp}</p>
            <Address version={version}/>
        </div>
    )
}

export default Exhibit;