import { pInfoType, eduType } from "./data";
import EduCV from "./EduCV";

interface cvProps{
  pInfo: Record<pInfoType,string>
  eduInfo: Record<eduType,string>[]
}

export default function CV({ pInfo, eduInfo }:cvProps): JSX.Element {
  const educations = eduInfo.map((edu)=>{
    return(
      <EduCV eduInfo={edu}></EduCV>
    )});

  return (
    <div className="CV">
      <div className="cvHeader">
        <div id="cvName">{pInfo.name}</div>
        <div className="flexRow">
          <div className="cvContact">
            <img src="/mail.png" style={{ height: "1em" }}></img>
            <div style={{ marginLeft: 5 }}>{pInfo.email}</div>
          </div>
          <div className="cvContact">
            <img src="/telephone.png" style={{ height: "1em" }}></img>
            <div style={{ marginLeft: 5 }}>{pInfo.number}</div>
          </div>
          <div className="cvContact">
            <img src="/location.png" style={{ height: "1em" }}></img>
            <div style={{ marginLeft: 5 }}>{pInfo.address}</div>
          </div>
        </div>
      </div>
      <div className="cvBody">
        {educations}
      </div>
    </div>
  );
}
