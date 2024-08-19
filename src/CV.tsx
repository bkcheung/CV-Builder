import { pInfoType, eduType, expType } from "./data";
import EduCV from "./EduCV";
import ExpCV from "./ExpCV";

interface cvProps{
  pInfo: Record<pInfoType,string>
  eduInfo: Record<eduType,string>[]
  expInfo: Record<expType,string>[]
}

export default function CV({ pInfo, eduInfo, expInfo }:cvProps): JSX.Element {
  const educations = eduInfo.map((edu)=>{
    return(
      <EduCV key={edu.id} eduInfo={edu}></EduCV>
    )});
  const experiences = expInfo.map((exp)=>{
    return(
      <ExpCV key={exp.id} expInfo={exp}></ExpCV>
    )});
  return (
    <div className="CV">
      <div className="cvHeader">
        <div id="cvName">{pInfo.name}</div>
        <div className="flexRow">
          <div className="cvContact">
            <img src="/mail.png" style={{ height: "1em" }}></img>
            {/* <div style={{ marginLeft: 5 }}>{pInfo.email}</div> */}
            <div className="ml-1">{pInfo.email}</div>
          </div>
          <div className="cvContact">
            <img src="/telephone.png" style={{ height: "1em" }}></img>
            <div className="ml-1">{pInfo.number}</div>
          </div>
          <div className="cvContact">
            <img src="/location.png" style={{ height: "1em" }}></img>
            <div className="ml-1">{pInfo.address}</div>
          </div>
        </div>
      </div>
      <div className="cvBody">
        <div className="education">
            <div className="sectionHeader">Education</div>
            {educations}
            <div className="sectionHeader">Experience</div>
            {experiences}
        </div>
      </div>
    </div>
  );
}
