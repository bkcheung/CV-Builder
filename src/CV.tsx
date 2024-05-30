import { defaultData } from "./data";

function CV({props=defaultData}): JSX.Element{
    return(
        <div className="CV">
            <div className="cvHeader"> 
                <div id="cvName">{props.name}</div>
                <div className="flexRow">
                    <img src="/public/mail.png" style={{height:'1em'}}></img>
                    <div className="cvContact">{props.email}</div>
                    <img src="/public/telephone.png" style={{height:'1em'}}></img>
                    <div className="cvContact">{props.number}</div>
                    <img src="/public/location.png" style={{height:'1em'}}></img>
                    <div className="cvContact">{props.address}</div>
                </div>
            </div>
            <div className="cvBody">
                <div className="education">
                    <div className="sectionHeader">Education</div>
                    <div className="flexRow">
                        <div className="flexCol">
                            <div className="edu" style={{fontWeight:500}}>{props.degree}</div>
                            <div className="edu">{props.school}</div>
                        </div>
                        <div className="flexCol">
                            <i><div className="edu">{props.start} - {props.end}</div></i>
                            <div className="edu">{props.location}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CV;