import { defaultData } from "./data";

function CV({props=defaultData}): JSX.Element{

    return(
        <div className="CV">
            <h2>{props.name}</h2>
            <h4>{props.email}</h4>
            <h4>{props.number}</h4>
            <h4>{props.address}</h4>
        </div>
    )
}

export default CV;