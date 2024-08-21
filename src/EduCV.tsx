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
       
          <div className="flex justify-between">
            <div className="flexCol">
              <div className="p-1 text-sm" style={{ fontWeight: 500 }}>
                {eduInfo.degree}
              </div>
              <div className="p-1 text-sm">{eduInfo.school}</div>
            </div>
            <div className="flexCol rightAlign">
              <i>
                <div className="p-1 text-sm">{start} - {end}</div>
              </i>
              <div className="p-1 text-sm">{eduInfo.location}</div>
            </div>
          </div>
    )}

export default EduCV;