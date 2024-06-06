import dayjs from "dayjs";
import { defaultData } from "./data";

export default function CV({ props = defaultData }): JSX.Element {
    let start = dayjs(props.start).format('MM/YYYY');
    if(props.start===''){
      start = "Start Date"
    }
    let end = dayjs(props.end).format('MM/YYYY');
    if(props.end===''){
      end = "Present";
    }
  return (
    <div className="CV">
      <div className="cvHeader">
        <div id="cvName">{props.name}</div>
        <div className="flexRow">
          <div className="cvContact">
            <img src="/mail.png" style={{ height: "1em" }}></img>
            <div style={{ marginLeft: 5 }}>{props.email}</div>
          </div>
          <div className="cvContact">
            <img src="/telephone.png" style={{ height: "1em" }}></img>
            <div style={{ marginLeft: 5 }}>{props.number}</div>
          </div>
          <div className="cvContact">
            <img src="/location.png" style={{ height: "1em" }}></img>
            <div style={{ marginLeft: 5 }}>{props.address}</div>
          </div>
        </div>
      </div>
      <div className="cvBody">
        <div className="education">
          <div className="sectionHeader">Education</div>
          <div className="flexRow">
            <div className="flexCol">
              <div className="edu" style={{ fontWeight: 500 }}>
                {props.degree}
              </div>
              <div className="edu">{props.school}</div>
            </div>
            <div className="flexCol">
              <i>
                <div className="edu">{start} - {end}</div>
              </i>
              <div className="edu">{props.location}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
