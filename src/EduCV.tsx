import dayjs from "dayjs";
import { eduType } from "./data";

interface eduProps{
    eduInfo: Record<eduType,string>
}

function EduCV({eduInfo}:eduProps): JSX.Element {
    let start = dayjs(eduInfo.start).format('MM/YYYY');
    if(eduInfo.start===''){
      start = "Start Date"
    }
    let end = dayjs(eduInfo.end).format('MM/YYYY');
    if(eduInfo.end===''){
      end = "Present";
    }
    return(
        <div className="education">
          <div className="sectionHeader">Education</div>
          <div className="flexRow">
            <div className="flexCol">
              <div className="edu" style={{ fontWeight: 500 }}>
                {eduInfo.degree}
              </div>
              <div className="edu">{eduInfo.school}</div>
            </div>
            <div className="flexCol">
              <i>
                <div className="edu">{start} - {end}</div>
              </i>
              <div className="edu">{eduInfo.location}</div>
            </div>
          </div>
        </div>
    )}

export default EduCV;